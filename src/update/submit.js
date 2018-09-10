import update from "immutability-helper"
import { loop, Cmd } from "redux-loop"
import { findWithIndex, maybe3 } from "../utils"

const initialPageState = {
  message: "",
  scrubReasons: [
    {id: "mix", name: "The Mix", value: false},
    {id: "pressure", name: "The Pressure", value: false},
    {id: "setups", name: "The Setups", value: false},
    {id: "shenanigans", name: "The Shenanigans", value: false}
  ],
  saltLevels: [
    {id: 0, name: "Not salty at all"},
    {id: 1, name: "Somewhat salty"},
    {id: 2, name: "The salt is real"}
  ],
  selectedSaltLevel: null
}

const toggleScrubReason = (page, id) => {
  const result = findWithIndex((cur) => cur.id === id, page.scrubReasons)

  return maybe3(
    [page, Cmd.none],
    (found) =>  {
      const updatedResult = update(found.target, { $toggle: ["value"] })

      return [
        update(page, {
          scrubReasons: {
            $splice: [[found.index, 1, updatedResult]]
          }
        }),
        Cmd.none
      ]
    },
    result
  )
}


function submitPageUpdate (page, action) {
  switch (action.type) {
  case "EDIT_POPOFF_MESSAGE":
    return [
      update(page, {
        message: {$set: action.message}
      }),
      Cmd.none
    ]
  case "TOGGLE_SCRUB_REASON":
    return toggleScrubReason(page, action.id)

  case "SELECT_SALT_LEVEL":
    return [
      update(page, {
        selectedSaltLevel: {$set: action.id}
      }),
      Cmd.none
    ]
  }
  return [initialPageState, Cmd.none]
}

export default function (state, action) {
  const [page, cmd] = submitPageUpdate(state.page, action)

  return loop({...state, page}, cmd)
}
