import styles from "./styles.module.css";

type SizeType = "small" | "medium" | "large";

const sizeStyle = (size: SizeType) => {
  switch (size) {
    case "small":
      return styles.smallSpacer;
    case "medium":
      return styles.mediumSpacer;
    case "large":
      return styles.largeSpacer;
    default:
      return styles.mediumSpacer;
  }
};

type Props = {
  /**
   * @description Spacerコンポーネント
   * @param {SizeType} size
   */
  size: SizeType;
};

const Spacer = (props: Props) => {
  const { size } = props;

  return <div className={sizeStyle(size)}></div>;
};

export default Spacer;
