export default (state = { val: 100, act: 'NULL' }, action) => {
  switch (action.type) {
      case 'INC':
          return {...state, val: state.val+10, act: 'INC' };
      case 'DEC':
          return {...state, val: state.val-10, act: 'DEC' };
      default:
      return state;
  }
};