// templates/component/Component.tsx

import React from "react";
import styles from "./CreateMessageConfirm.module.scss";

export interface ICreateMessageConfirmProps {}

/**
 * A component that <EDIT THIS>
 *
 * @return the CreateMessageConfirm component
 */

const CreateMessageConfirm: React.FC<ICreateMessageConfirmProps> = ({
  children,
}) => {
  return (
    <div
      className={styles["CreateMessageConfirm"]}
      data-testid="component-CreateMessageConfirm"
    >
      <h1>CreateMessageConfirm component</h1>
    </div>
  );
};

export default CreateMessageConfirm;
