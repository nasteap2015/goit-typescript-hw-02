import css from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({ onLoadMore }) => {
    return (
        <button onClick={onLoadMore} className={css.loadMoreButton}>Load more</button>
    )
};

export default LoadMoreBtn;