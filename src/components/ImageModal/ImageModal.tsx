import Modal from 'react-modal';
import css from './ImageModal.module.css'

Modal.setAppElement("#root");

interface ImageModalProp {
  isOpen: boolean;
  onRequestClose: () => void;
  imageU: string;
  imageDesc: string;
}

const ImageModal = ({ isOpen, onRequestClose, imageU,imageDesc } : ImageModalProp) => {
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className={css.modal}
        overlayClassName={css.overlay}
        >
        <img src={imageU} alt={imageDesc} />
      </Modal>
    )

};

export default ImageModal;