import { IoSearch } from "react-icons/io5";
import toast from 'react-hot-toast';
import css from './SearchBar.module.css'


const SearchBar = ({ onSearch }) => {
    const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
		const query = form.elements.query.value;
		if(form.elements.query.value.trim() === "") {
            toast('Please enter a search query!',
                {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                }
            );
			return;
		}
		onSearch(query);
    form.reset();
  };

    return (
        <header className={css.headerContainer}>
            <form onSubmit={handleSubmit} className={css.form}>
                <input
                    type="text"
                    name="query"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    className={css.input}
                />
                <button type="submit" className={css.searchButton}><IoSearch className={css.buttonIcon} /></button>
            </form>
        </header>
    )
};

export default SearchBar;
