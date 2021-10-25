import React from 'react'
import ReactDOM from 'react-dom'
import App from 'core/App'
import reportWebVitals from './reportWebVitals'

import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import { enUS } from 'locale/enUS'
import { ru } from 'locale/ru'

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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
