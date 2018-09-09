import cn from "classnames"
import Head from "../src/view/Head"
import { withStore, dispatch } from "../src/update/store"
import update from "../src/update/submit"
import Button from "../src/view/Button"
import ButtonLink from "../src/view/ButtonLink"
import TextInput from "../src/view/TextInput"
import CheckBox from "../src/view/CheckBox"

const section = [
  "pt2"
]

function SubmitPage (props, {state}) {
  const { page } = state
  return <div>
    <Head />
    <div className="mw7 center pa2">
      <div
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

      </div>
      <div
        className={cn(
          "f4",
          "black-90",
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
                dispatch({ type: "TOGGLE_SCRUB_REASON", name: scrubReason.name })
              }
            />
          </div>
        })}
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
            dispatch({ type: "EDIT_MESSAGE", message: e.target.value })
          }
        />
      </div>
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
