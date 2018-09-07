import Head from '../view/Head'
import { withStore, dispatch } from '../update/store'

function Page () {
  return <div>
    <Head />
    <h3>Hello There</h3>
  </div>
}

export default withStore(Page)
