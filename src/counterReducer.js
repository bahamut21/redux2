const counterReducer = (state = 0, action) => {
  switch (action.type) {
      case 'ADD':
          return state + 1;
      case 'REMOVE':
          return state - 1;
      case 'RESET':
          return  0;
      case 'ADD10':
        return state +10;
      case 'REM10':
        return state -10;
      default:
          return state;
  }
}
export default counterReducer;