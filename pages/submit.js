import cn from "classnames"
import Head from "../src/view/Head"
import { withStore, dispatch } from "../src/update/store"
import update from "../src/update/submit"
import Button from "../src/view/Button"
import ButtonLink from "../src/view/ButtonLink"
import TextInput from "../src/view/TextInput"
import CheckBox from "../src/view/CheckBox"
import RadioButton from "../src/view/RadioButton"

const section = [
  "pt2"
]

function HeaderSection() {
  return (<div
    className={cn(
      section,
    )}
  >
    <ButtonLink href="/">
      <span
        className={cn(
          "material-icons",
          "white",
          "pr2",
          "dtc",
          "v-mid"
        )}
      >
          arrow_back
      </span>
      <span
        className={cn(
          "dtc",
          "v-mid"
        )}
      >
        Main Page
      </span>
    </ButtonLink>
  </div>)
}

function ReasonsSection({state}) {
  const { page } = state

  return (<div>
    <div
      className={cn(
        "f4",
        "black-90",
        "mt3",
        section
      )}
    >
      How badly did you body this scrub?
    </div>
    <div
      className={cn(
        section
      )}
    >
      {page.scrubReasons.map(scrubReason => {
        return <div key={scrubReason.name}>
          <CheckBox
            label={scrubReason.name}
            checked={scrubReason.value}
            onClick={() =>
              dispatch({ type: "TOGGLE_SCRUB_REASON", id: scrubReason.id })
            }
          />
        </div>
      })}
    </div>
  </div>)
}

function SaltLevelSection({state}) {
  const { page } = state

  return (<div>
    <div
      className={cn(
        "f4 black-90",
        "mt3",
        section
      )}
    >
    How salty was this scrub after the ass whooping?
    </div>
    <div
      className={cn(
        section
      )}
    >
      {
        page.saltLevels.map(saltLevel => {
          return <div key={saltLevel.id}>
            <RadioButton
              label={saltLevel.name}
              checked={page.selectedSaltLevel === saltLevel.id}
              onClick={() =>
                dispatch({ type: "SELECT_SALT_LEVEL", id: saltLevel.id })
              }
            />
          </div>
        })
      }
    </div>
  </div>)
}

function PopOffSection({state}) {
  const { page } = state
  return (<div>
    <div
      className={cn(
        section,
        "mt3"
      )}
    >
      (Optional short pop-off message)
    </div>
    <div
      className={cn(
        section
      )}
    >
      <TextInput
        type="text"
        value={page.message}
        onInput={(e) =>
          dispatch({ type: "EDIT_POPOFF_MESSAGE", message: e.target.value })
        }
        className="w5"
      />
    </div>
  </div>)
}

function SubmitPage (props, {state}) {
  const { page } = state
  return <div>
    <Head />
    <div className="mw7 center pa2">
      <HeaderSection props={props} state={state} />
      <ReasonsSection props={props} state={state} />
      <SaltLevelSection props={props} state={state} />
      <PopOffSection props={props} state={state} />
      <div
        className={cn(
          section
        )}
      >
        <Button
          onClick={Function.prototype}
        >
        SUBMIT
        </Button>
      </div>
    </div>
  </div>
}

export default withStore(SubmitPage, update)
