import { HTMLAttributes } from "react";
import styles from "./styles.module.css";

type SizeType = "small" | "medium" | "large";

type TypographyProps = {
  text: string;
  size: SizeType;
};

type Props = TypographyProps &
  Omit<HTMLAttributes<HTMLElement>, keyof TypographyProps>;

const sizeStyle = (size: SizeType) => {
  switch (size) {
    case "small":
      return styles.smallParagraph;
    case "medium":
      return styles.mediumParagraph;
    case "large":
      return styles.largeParagraph;
    default:
      return styles.mediumParagraph;
  }
};

/**
 * @description Typographyコンポーネント
 * @param {string} text
 * @param {SizeType} size
 * @param {HTMLAttributes<HTMLElement>} HTMLの属性
 */
const Typography = (props: Props) => {
  const { text, size, ...optionalHtmlProps } = props;
  return (
    <p className={sizeStyle(size)} {...optionalHtmlProps}>
      {text}
    </p>
  );
};

export default Typography;
