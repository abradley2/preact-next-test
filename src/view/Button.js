import cn from "classnames"

export default function Button(props) {
  return <button
    onClick={props.onClick}
    className={cn(
      "button-reset",
      "ph3 pv2 br2",
      "white",
      "bn",
      "bg-orange",
      "fw5",
      "pointer"
    )}
  >
    {props.children}
  </button>
}
