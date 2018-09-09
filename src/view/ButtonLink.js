import cn from "classnames"
import Link from "next/link"

export default function ButtonLink(props) {
  return <Link
    href={props.href}
  >
    <a
      className={cn(
        "button-reset",
        "ph3 pv2 br2",
        "white",
        "bn",
        "bg-blue",
        "fw5",
        "pointer",
        "link",
        "dt"
      )}
    >
      {props.children}
    </a>
  </Link>
}
