import update from "immutability-helper"
import { loop, Cmd } from "redux-loop"
import { Just, Nothing, maybe } from "sanctuary"

const initialPageState = {
  message: "Hello there",
  scrubReasons: [
    {name: "The Mix", value: false},
    {name: "The Pressure", value: false},
    {name: "The Setups", value: false},
    {name: "The Shenanigans", value: false}
  ]
}

const toggleScrubReason = (page, action) => {
  const result = page.scrubReasons.reduce((acc, cur, idx) => {
    if (acc.isJust) return acc

    if (cur.name === action.name) {
      return Just({reason: cur, idx})
    }

    return acc

  }, Nothing)

  return (maybe(
    [page, Cmd.none]
  )(
    (found) => {
      const updatedResult = update(found.reason, { $toggle: ["value"] })

      return [
        update(page, {
          scrubReasons: {
            $splice: [[found.idx, 1, updatedResult]]
          }
        }),
        Cmd.none
      ]
    }
  )(
    result
  ))
}

function submitPageUpdate (page, action) {
  switch (action.type) {
  case "EDIT_MESSAGE":
    return [
      update(page, {
        message: {$set: action.message}
      }),
      Cmd.none
    ]
  case "TOGGLE_SCRUB_REASON":
    return toggleScrubReason(page, action)
  }
  return [initialPageState, Cmd.none]
}

export default function (state, action) {
  const [page, cmd] = submitPageUpdate(state.page, action)


  return loop({...state, page}, cmd)
}
