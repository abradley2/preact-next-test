import Link from "next/link"
import Head from "../src/view/Head"
import { withStore, dispatch } from "../src/update/store"
import update from "../src/update/submit"

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
      onInput={(e) =>
        dispatch({ type: "EDIT_MESSAGE", message: e.target.message })
      }
    />
  </div>
}

export default withStore(SubmitPage, update)
