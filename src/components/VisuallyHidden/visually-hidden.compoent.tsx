import {
  cloneElement,
  Fragment,
  type ReactElement,
  type ReactNode
} from "react";

type VisuallyHiddenProps = {
    children: ReactNode;
}

const visuallyHidden = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: 1,
  width: 1,
  margin: -1,
  padding: 0,
  overflow: "hidden",
  position: "absolute",
}

export const VisuallyHidden = ({ children }: VisuallyHiddenProps) => {
  const element = children as ReactElement;

  return (
    <Fragment>
      {
        cloneElement(
          element,
          Object.assign(
            {},
            element.props,
            {
              style: Object.assign(
                {},
                visuallyHidden,
                element.props.style
              ),
            }
          )
        )
      }
    </Fragment>
  )
}