import cn from "classnames"

export default function RadioButton(props) {
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
        "v-mid",
        "pr2"
      )}
    >
      {props.checked
        ? "radio_button_checked"
        : "radio_button_unchecked"
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
