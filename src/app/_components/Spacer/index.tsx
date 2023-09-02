import styles from "./styles.module.css";

const className = (spaceSize: string) => {
  switch (spaceSize) {
    case "small":
      return `${styles.spaceSizeSmall}`;
    case "medium":
      return `${styles.spaceSizeMidium}`;
    case "large":
      return `${styles.spaceSizeLarge}`;
    default:
      return `${styles.spaceSizeSmall}`;
  }
};

type spacerProps = {
  /**
   * @description Spaceのサイズ
   * @example small, medium, large
   */
  spaceSize: string;
};

export default function Spacer(props: spacerProps) {
  const { spaceSize } = props;

  return <div className={className(spaceSize)}></div>;
}
