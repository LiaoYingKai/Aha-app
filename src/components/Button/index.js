import cx from "classnames";

export const ButtonSize = {
  LARGE: "large",
  SMALL: "small",
};

export const ButtonType = {
  OUTLINED: "outlined",
  CONTAINED: "contained",
};

const { LARGE } = ButtonSize;

const { CONTAINED } = ButtonType;

export default function Button({ size = LARGE, type = CONTAINED, children, onClick }) {
  const typeStyle =
    type === CONTAINED
      ? "border-[1px] border-solid border-white bg-white text-black hover:bg-transparent hover:text-white"
      : "border-[1px] border-solid border-white bg-transparent text-white hover:bg-white hover:text-black";
  const sizeStyle = size === LARGE ? "w-full max-w-[335px] h-10 rounded text-sm font-bold" : "px-2.5 h-8 rounded-[20px] text-xs";

  return (
    <button onClick={onClick} type="button" className={cx("flex items-center justify-center", typeStyle, sizeStyle)}>
      {children}
    </button>
  );
}

Button.ButtonSize = ButtonSize;
Button.ButtonType = ButtonType;
