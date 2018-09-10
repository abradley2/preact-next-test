import cn from "classnames"

export default function FileInput(props) {
  return <input
    type="file"
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
