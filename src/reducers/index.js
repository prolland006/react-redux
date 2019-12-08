export default (state, action) => {
  switch (action.type) {
    case 'INC':
      console.log(state);
      return { val: state.val + 10, act: 'INC' }
    case 'DEC':
      return { val: state.val - 10, act: 'DEC' }
    default:
      return state
  }
}
