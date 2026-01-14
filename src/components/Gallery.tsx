import React, { useState } from "react";

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="rounded overflow-hidden shadow hover:scale-105 transition-transform cursor-pointer"
            onClick={() => setSelected(src)}
          >
            <img
              src={src}
              alt={`Gallery image ${idx + 1}`}
              className="w-full"
              loading="lazy"
              style={{ display: "block" }}
            />
          </div>
        ))}
      </div>
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            alt="Enlarged"
            className="max-w-full max-h-full rounded shadow-lg"
            style={{ background: "white" }}
          />
        </div>
      )}
    </>
  );
};

export default Gallery;
