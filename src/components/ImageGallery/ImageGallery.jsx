import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css'

const ImageGallery = ({ images, openModal }) => {
    return (
        <ul className={css.gallery}>
            {images.map((image) => (
                <li key={image.id} className={css.galleryItem} onClick={() =>openModal(image.urls.regular, image.description)}>
                    <ImageCard description={image.alt_description} urls={image.urls} likes={image.likes} tags={image.tags} openModal={openModal}/>
                </li>
            ))
            }
        </ul>
    );
};


export default ImageGallery; 