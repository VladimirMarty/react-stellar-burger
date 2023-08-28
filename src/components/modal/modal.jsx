import React from "react";
import { useEffect } from "react";
import styles from "./modal.module.css";
import { createPortal } from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { useDispatch } from "react-redux";
import { changeModalVisible } from "../../service/actions/addTodo";
import { changeModalIng } from "../../service/actions/addTodo";
const Modal = (props) => {
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(changeModalVisible(false));
    dispatch(changeModalIng(null));
  };
  React.useEffect(() => {
    const handleEscClose = (evt) => {
      evt.key === "Escape" && onClose();
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, []);

  return createPortal(
    <>
      <div className={styles.over}>
        <div className={styles.modalContainer}>
          <span onClick={onClose} className={styles.closeX}>
            &times;
          </span>
          {props.children}
        </div>
      </div>
      <ModalOverlay onClick={onClose} />
    </>,
    document.getElementById("root")
  );
};

export default Modal;

// const Modal = ({ open, onClose, modalContent }) => {
//   const aa = () => {
//     onClose();
//   };

//   useEffect(() => {
//     const close = (e) => {
//       if (e.keyCode === 27) {
//         onClose();
//       }
//     };
//     window.addEventListener("keydown", close);
//     return () => window.removeEventListener("keydown", close);
//   }, []);

//   return createPortal (
//     <>

//     <div className={`${styles.over} ${open ? styles.active : ""}`}>
//       <div className={styles.modalContainer}>
//         <span onClick={aa} className={styles.closeX}>
//           &times;
//         </span>
//         {modalContent}
//       </div>
//     </div>
//     <ModalOverlay onClick={onClose} />
// </>,
//    document.getElementById('root')

//   );
// };

// export default Modal;
