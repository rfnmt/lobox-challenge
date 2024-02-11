import clsx from "clsx";
import Styles from "./TextInput.module.scss";
import {
  ForwardedRef,
  InputHTMLAttributes,
  KeyboardEventHandler,
  MouseEventHandler,
  MutableRefObject,
  ReactNode,
  forwardRef,
} from "react";

interface Props
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "className" | "onKeyDown"
  > {
  className?: string;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  prependSlot?: ReactNode;
}

function TextInputComponent(
  { className, onKeyDown, prependSlot, ...props }: Props,
  ref: ForwardedRef<HTMLInputElement>
) {
  const clickHandler: MouseEventHandler<HTMLInputElement> = (e) => {
    props.onClick?.(e);
    (ref as MutableRefObject<HTMLInputElement>)?.current?.focus();
  };
  return (
    <div
      className={clsx(
        "flex jc-between ai-center px-4 py-1 radius-8 w-100",
        Styles.TextInput__container
      )}
      onClick={clickHandler}
    >
      <input
        className={clsx(
          className,
          "text-normal py-4 w-100",
          Styles.TextInput__input
        )}
        // Handling it with uncontrolled approach leads to prevent unnecessary re-rendering
        ref={ref}
        onKeyDown={onKeyDown}
        {...props}
      />
      {prependSlot}
    </div>
  );
}

const TextInput = forwardRef(TextInputComponent);

export default TextInput;
