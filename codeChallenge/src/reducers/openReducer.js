const openReducer = (state=[{typs: "Test"}] ,action) => {


  switch (action.type) {
    case 'GET_OPEN':
      debugger
      return {
        topic: action.payload
      }
    default:
      return state
  }

}





export default openReducer
