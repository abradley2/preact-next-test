const initialPageState = 42

const updatePage = (page, action) => {
  switch (action.type) {
  case "INCREMENT":
    return page + 1
  case "DECRMENET":
    return page - 1
  }
  return initialPageState
}

export default function IndexUpdate (state, action) {
  return {
    ...state,
    page: updatePage(state.page, action)
  }
}
