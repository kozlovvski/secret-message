// templates/component/Component.tsx

import React from "react";
import styles from "./TemplateName.module.scss";

export interface ITemplateNameProps {}

/**
 * A component that <EDIT THIS>
 *
 * @return the TemplateName component
 */

const TemplateName: React.FC<ITemplateNameProps> = ({ children }) => {
  return (
    <div
      className={styles["TemplateName"]}
      data-testid="component-TemplateName"
    >
      <h1>TemplateName component</h1>
    </div>
  );
};

export default TemplateName;
