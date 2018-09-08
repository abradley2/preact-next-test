import Link from "next/link"
import Head from "../src/view/Head"
import { withStore, dispatch } from "../src/update/store"
import update from "../src/update/submit"
import Button from "../src/view/Button"

function SubmitPage (props, {state}) {
  const { page } = state
  return <div>
    <Head />
    <div>
      <Link href="/">
        <a>I feel so broke up, I want to go home</a>
      </Link>
    </div>
    <h3>{page.message}</h3>
    <input
      type="text"
      value={page.message}
      onInput={(e) =>
        dispatch({ type: "EDIT_MESSAGE", message: e.target.value })
      }
    />
    <div className="mw7 center pa2">
      <Button
        onClick={Function.prototype}
      >
        Click me
      </Button>
    </div>
  </div>
}

export default withStore(SubmitPage, update)
