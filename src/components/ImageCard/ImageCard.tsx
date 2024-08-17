import css from './ImageCard.module.css'

interface ImageCardProp {
    description: string,
    urls: {
    small: string;
    regular: string;
  },
    likes: number,
    tags: [
        {
            title: string,
        },
    ],   
    openModal: (urls:string, description:string) => void
}

const ImageCard = ({ description, urls, likes, tags, openModal} : ImageCardProp ) => {
    const imageTags = tags.map(tag => tag.title);
    return (
        <div className={css.imageContainer} onClick={() => openModal(urls.regular, description)}>
            <img src={urls.small} alt={description} className={css.image}/>
            <p><span className={css.descriptionCategory}>Likes:</span> {likes}</p>
            <p><span className={css.descriptionCategory}>Tags:</span> {imageTags.join(",")}</p>
        </div>
    );
};

export default ImageCard;