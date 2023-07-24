import React from "react";
import styles from './modal-overlay.module.css';


function ModalOverlay({onMouseDown}) {

  return (
    <div className={styles.overlay} onMouseDown={onMouseDown}>
    </div>
  )
}


export default  ModalOverlay