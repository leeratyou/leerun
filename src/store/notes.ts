import { makeAutoObservable, reaction } from 'mobx'
import { INote } from 'types/INote'

import { notes } from 'fixtures/notes'
import { ID } from 'types'

function byDate(a: INote, b: INote) {
  return a.dateCreated.localeCompare(b.dateCreated)
}

class NotesStore {
  
  constructor() {
    makeAutoObservable(this)
  
    reaction(
      () => this._notes.length,
      size => !size && this.fetchNotes(),
      { fireImmediately: true }
    )
  }
  
  _notes: INote[] = []
  
  getNotes = (categoryId: ID) => {
    return this._notes
      .filter(note => note.categoryId === categoryId)
      .sort(byDate)
  }
  
  fetchNotes = async () => this._notes = notes
  
}

const notesStore = new NotesStore()
export default notesStore
