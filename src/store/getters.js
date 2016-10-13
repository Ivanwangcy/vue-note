export const msg = state => state.msg
export const count = state => state.count

export const getViewModel = state => {
  return state.viewModel == "list" ? 'large' : 'list'
}
