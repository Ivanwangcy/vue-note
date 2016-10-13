// export const increment = (state) => {
//   state.count++;
// }

// let titles = [
//   "Welcome to your Vue.js app!",
//   "Hello Vue 2.0! ",
//   "Hello World! ",
//   "Hi JavaScript! ",
//   "Hi HTML5! "
// ]
// export const randomTitle = (state) => {
//   let index = ~~(Math.random() * titles.length)
//   state.msg = titles[index]
// }

export const ADD_NOTE = (state) => {
  const newNote = {
    text: "New Note",
    favorite: false
  }

  state.notes.push(newNote);
  state.activeNote = newNote;
}

export const EDIT_NOTE = (state, text) => {
  state.activeNote.text = text
}

export const ROMOVE_NOTE = (state) => {
  state.notes.$remove(state.activeNote)
  state.activeNote = state.notes[0]
}

export const TOGGLE_FAVORITE = (state) => {
  state.activeNote.favorite = !state.activeNote.favorite
}

export const SET_ACTIVE_NOTE = (state, note) => {
  state.activeNote = note;
}

export const CHANGE_VIEW_MODEL = (state) => {
  state.viewModel == 'list' ? 'large' : 'list'
}
