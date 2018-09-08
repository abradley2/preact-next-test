import update from "immutability-helper"

const initialPageState = {
  message: "Hello there"
}

function submitPageUpdate (page, action) {
  switch (action.type) {
  case "EDIT_MESSAGE":
    return update(page, {
      message: {$set: action.message}
    })
  }
  return initialPageState
}

export default function (state, action) {
  const page = submitPageUpdate(state.page, action)

  return {
    ...state,
    page
  }
}
