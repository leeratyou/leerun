import { render, screen } from '@testing-library/react'
import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import { enUS } from 'locale/enUS'
import { ru } from 'locale/ru'

import App from 'core/App'

beforeAll(() => {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources: {
        enUS,
        ru
      },
      lng: "enUS", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
      // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
      // if you're using a language detector, do not define the lng option
      
      interpolation: {
        escapeValue: false // react already safes from xss
      }
    });
})

describe('Rendering app', () => {
  test('Find "Logo" word that should be in any case', () => {
    render(<App />)
    expect(screen.getByText('Logo')).toBeInTheDocument()
  })
})
