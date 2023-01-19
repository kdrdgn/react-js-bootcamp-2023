import { useEffect, useState } from "react";
import { loadGalleryImagesAsync, useAppDispatch, useAppSelector } from "../store";

const Gallery = () => {

    const dispatch = useAppDispatch();
    const galleryImages = useAppSelector(state => state.app.galleryImages);
    const loadingStatus = useAppSelector(state => state.app.status);

    const [currentImage, setCurrentImage] = useState<number>(0);

    useEffect(() => {
        dispatch(loadGalleryImagesAsync());
    }, [dispatch]);

    const handleNext = () => {
        setCurrentImage(currentImage + 1 > galleryImages.length ? currentImage + 1 : 0);
    }
    const handlePrev = () => {
        setCurrentImage(currentImage - 1 < 0 ? currentImage - 1 : galleryImages.length );
    }

    return <div>
        <div>{loadingStatus === 'loading' ? 'Loading...' : ''}</div>
        {galleryImages[currentImage] !== undefined ? <img src={galleryImages[currentImage].url} alt={`Gallery`} /> : null}
        <div>
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
        </div>
    </div>
}

export default Gallery;