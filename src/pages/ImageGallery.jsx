import {
  PhotoProvider,
  PhotoView
} from "react-photo-view";

import "react-photo-view/dist/react-photo-view.css";

export default function ImageGallery({ images }) {
  return (
    <PhotoProvider>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <PhotoView key={index} src={img}>
            <img src={img} alt="" className="gallery-image" />
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  );
}