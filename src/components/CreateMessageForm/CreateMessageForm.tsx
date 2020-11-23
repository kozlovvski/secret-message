// templates/component/Component.tsx

import React from "react";
import styles from "./CreateMessageForm.module.scss";

export interface ICreateMessageFormProps {
  success: boolean;
  setNewCard: () => void;
}

/**
 * A component that accepts a
 *
 * @return the CreateMessageForm component
 */

const CreateMessageForm: React.FC<ICreateMessageFormProps> = ({ children }) => {
  return (
    <div
      className={styles["CreateMessageForm"]}
      data-testid="component-CreateMessageForm"
    >
      <h1>CreateMessageForm component</h1>
    </div>
  );
};

export default CreateMessageForm;
