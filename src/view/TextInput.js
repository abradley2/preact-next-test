import cn from "classnames"

const mes

export function update() {

}

export default function TextInput(props) {
  return <input
    onFocus={() => props.onMessage("FOCUS")}
    onBlur={() => props.onMessage("BLUR")}
    {...props}
    className={cn(
      "input-reset",

      "ph3",
      "pv2",
      "br2",
      "ba",
      "b--orange",
      "outline-0",
      props.className
    )}
  />
}
