import Link from "next/link"
import Head from "../src/view/Head"
import { withStore, dispatch } from "../src/update/store"
import update from "../src/update/index"

function IndexPage (props, {state}) {
  const {page} = state

  return <div>
    <Head />
    <div>
      <Link href="/submit">
        <a>Go to submit page</a>
      </Link>
    </div>
    <div>
      <button
        onClick={() => dispatch({ type: "DECRMENET" })}
      >
        --
      </button>
      <span>{page}</span>
      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        ++
      </button>
    </div>
  </div>
}

export default withStore(IndexPage, update)
