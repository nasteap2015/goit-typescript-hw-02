import { useState, useEffect } from 'react'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal';
import { fetchImagesByQuery } from './images-api';
import toast, { Toaster } from 'react-hot-toast';

import './App.css'

export interface Image {
  id: string;
  description: string;
  alt_description: string;
  likes: number;
  tags: [
        {
            title: string,
        },
    ],   
  urls: {
    small: string;
    regular: string;
  }    
}

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [modalUrl, setModalUrl] = useState<string>('');
  const [modalDesc, setModalDesc] = useState<string>('');

  function openModal(imageUrl: string, imageDescription: string) {
    setIsOpen(true);
    setModalUrl(imageUrl);
    setModalDesc(imageDescription);

  }

  function closeModal() {
    setIsOpen(false);
  }
  
  useEffect(() => {
    if (!query.trim()) return;

    async function fetchImages() {
      try {
        setShowBtn(false);
        setError(false);
        setLoading(true);
        const { results, total_pages } = await fetchImagesByQuery(query, page);
        if (total_pages === 0) {
          toast.error("No image found!");
          return;
        } else {
          setImages(prevState => {
            return [...prevState, ...results];
          });
          setShowBtn(total_pages > page);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [query, page]
  );
    
    const handleSearch = async (query: string) => {
      setQuery(query);
      setPage(1);
      setImages([]);
    };

    const handleLoadMore = async () => {
      setPage(page + 1);
    };

  return (
    <>
      <SearchBar onSearch={handleSearch}/>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery images={images} openModal={openModal}/>}
      {showBtn && <LoadMoreBtn onLoadMore={handleLoadMore} />}
      <Toaster position="top-right" />
      <ImageModal isOpen={modalIsOpen} onRequestClose={closeModal} imageU={modalUrl} imageDesc={modalDesc} />
    </>
  )
}

export default App
