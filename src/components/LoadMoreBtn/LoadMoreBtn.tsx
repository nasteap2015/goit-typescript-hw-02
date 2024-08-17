import css from './LoadMoreBtn.module.css'

interface LoadMoreBtnProp {
    onLoadMore: () => void;
}

const LoadMoreBtn = ({ onLoadMore } : LoadMoreBtnProp) => {
    return (
        <button onClick={onLoadMore} className={css.loadMoreButton}>Load more</button>
    )
};

export default LoadMoreBtn;