import cn from "classnames"

export default function CheckBox(props) {
  return <div
    className={cn(
      "dt",
      "mv1",
      "pointer"
    )}
    onClick={props.onClick}
  >
    <span
      className={cn(
        "material-icons",
        "orange",
        "dtc",
        "v-mid"
      )}
    >
      {props.checked
        ? "check_box"
        : "check_box_outline_blank"
      }
    </span>
    <span
      className={cn(
        "black-90",
        "dtc",
        "v-mid"
      )}
    >
      {props.label}
    </span>
  </div>
}
