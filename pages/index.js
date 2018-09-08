import Head from "../view/Head"
import { withStore, dispatch } from "../update/store"
import update from "../update/index"

function IndexPage (props, {state}) {
  return <div>
    <Head />
    <div>
      <button
        onClick={() => dispatch({ type: "DECRMENET" })}
      >
        --
      </button>
      <span>{state}</span>
      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        ++
      </button>
    </div>
  </div>
}

export default withStore(IndexPage, update)
