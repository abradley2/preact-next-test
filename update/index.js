export default function (state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECRMENET':
      return state - 1
    default:
      return state
  }
}