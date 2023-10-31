import React from "react";

import styles from "./styles.module.scss";
import classNames from "classnames";

const cx = classNames.bind(styles); // <-- explicitly bind your styles

function Docs() {
  return <div className={cx("docs")}>Docs</div>;
}

export default Docs;
