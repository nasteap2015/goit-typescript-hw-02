import Modal from 'react-modal';
import css from './ImageModal.module.css'

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onRequestClose, style, imageU,imageDesc }) => {
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={style}
        className={css.modal}
        overlayClassName={css.overlay}
        >
        <img src={imageU} alt={imageDesc} />
      </Modal>
    )

};

export default ImageModal;