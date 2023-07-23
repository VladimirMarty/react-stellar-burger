import React from "react";
import styles from "./modal.module.css";
const Modal = ({ open, onClose,modalContent }) => {
 const aa =() =>{
   
    onClose()
 }

  return (
    <div className={`${styles.overlay} ${open ? styles.active : ''}`}>
      <div className={styles.modalContainer}>
        <span onClick={aa} className={styles.closeX}>
          &times;
        </span>
        {modalContent}
      </div>
    </div>
  );
};

export default Modal;
