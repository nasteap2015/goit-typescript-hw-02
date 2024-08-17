import { IoSearch } from "react-icons/io5";
import toast from 'react-hot-toast';
import css from './SearchBar.module.css'
import { FormEvent } from 'react';

interface onSearchProps  {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: onSearchProps) => {
    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
		const query = form.query.value;
		if(form.query.value.trim() === "") {
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
