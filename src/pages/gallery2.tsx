import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

// Helper to get all image paths
const IMAGE_PATHS = [
  // Images in /tmp/images
  "31946958_937641486414672_2147145122972696576_n.jpg",
  "42297082_1048979055280914_7140517373097803776_n.jpg",
  "43579735_1058094511036035_6722159499446059008_n.jpg",
  "43666884_1058094561036030_8834559724268552192_n.jpg",
  "50548293_1124092947769524_7462402644829536256_n.jpg",
  "67708595_1256422051203279_5417582841351372800_n.jpg",
  "69051185_1256422067869944_7781846932028129280_n.jpg",
  "72485667_1310496575795826_3147370644602093568_n.jpg",
  "72911809_1310496362462514_5821245754982793216_n.jpg",
  "brick-white-fence.jpg",
  "detached-garage.jpg",
  "ranch.jpg",
  // Images in /tmp/images/gallery
  "gallery/IMG_9864.PNG",
  "gallery/IMG_9865.PNG",
  "gallery/IMG_9866.PNG",
  "gallery/IMG_9867.PNG",
  "gallery/IMG_9868.PNG",
  "gallery/IMG_9869.PNG",
  "gallery/IMG_9870.PNG",
  "gallery/IMG_9871.PNG",
  "gallery/IMG_9872.PNG",
  "gallery/IMG_9873.PNG",
  "gallery/IMG_9874.PNG",
  "gallery/IMG_9875.PNG",
  "gallery/IMG_9876.PNG",
  "gallery/IMG_9877.PNG",
  "gallery/IMG_9878.PNG",
  "gallery/IMG_9879.PNG",
  "gallery/IMG_9880.PNG",
  "gallery/IMG_9881.PNG",
  "gallery/IMG_9882.PNG",
  "gallery/IMG_9883.PNG",
].map((f) => `/tmp/images/${f}`);

const SLIDE_INTERVAL = 5000; // ms

const Gallery2 = () => {
  const [current, setCurrent] = useState(0);
  const [preloaded, setPreloaded] = useState(false);
  const [paused, setPaused] = useState(false);
  const [enlarged, setEnlarged] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Preload images after initial load
  useEffect(() => {
    const preload = () => {
      IMAGE_PATHS.forEach((src) => {
        const img = new window.Image();
        img.src = src;
      });
    };
    setTimeout(() => {
      preload();
      setPreloaded(true);
    }, 500);
  }, []);

  // Auto-slide effect
  useEffect(() => {
    if (paused || enlarged) return;
    timerRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % IMAGE_PATHS.length);
    }, SLIDE_INTERVAL);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, paused, enlarged]);

  // Arrow navigation
  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + IMAGE_PATHS.length) % IMAGE_PATHS.length);
  };
  const goNext = () => {
    setCurrent((prev) => (prev + 1) % IMAGE_PATHS.length);
  };

  // Click image to enlarge and pause
  const handleImageClick = () => {
    setPaused(true);
    setEnlarged(true);
  };
  // Click overlay to close and resume
  const handleOverlayClick = () => {
    setEnlarged(false);
    setPaused(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <div className="w-full flex justify-start p-4">
        <Link href="/" legacyBehavior>
          <a className="px-8 py-4 text-black rounded hover:underline">
            <text className="text-2xl">Back</text>
          </a>
        </Link>
      </div>
      <div
        className="relative w-full max-w-4xl flex items-center justify-center overflow-hidden"
        style={{ height: "70vh" }}
      >
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100"
          onClick={goPrev}
          aria-label="Previous"
        >
          <span className="text-2xl">&#8592;</span>
        </button>
        <div className="w-full h-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{
              transform: `translateX(-${current * 100}%)`,
              height: "100%",
            }}
          >
            {IMAGE_PATHS.map((src, idx) => {
              const isGallery = src.includes("/gallery/");
              const imgElement = (
                <img
                  src={src}
                  alt={`Gallery image ${idx + 1}`}
                  className="w-full h-full object-contain rounded cursor-zoom-in"
                  style={{ maxHeight: "70vh", background: "white" }}
                  loading={preloaded ? "eager" : "lazy"}
                  onClick={handleImageClick}
                />
              );
              return (
                <div
                  key={src}
                  className="w-full flex-shrink-0 flex items-center justify-center"
                  style={{ height: "70vh", background: "white" }}
                >
                  {isGallery ? (
                    <div className="w-full h-70vh overflow-hidden">
                      <img
                        src={src}
                        alt={`Gallery image ${idx + 1}`}
                        className="w-full h-full object-cover rounded cursor-zoom-in"
                        style={{ maxHeight: "90vh", background: "white" }}
                        loading={preloaded ? "eager" : "lazy"}
                        onClick={handleImageClick}
                      />
                    </div>
                  ) : (
                    imgElement
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100"
          onClick={goNext}
          aria-label="Next"
        >
          <span className="text-2xl">&#8594;</span>
        </button>
        {enlarged && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={handleOverlayClick}
            style={{ cursor: "zoom-out" }}
          >
            <img
              src={IMAGE_PATHS[current]}
              alt={`Gallery image ${current + 1}`}
              className="max-w-full max-h-full rounded shadow-lg"
              style={{ background: "white" }}
            />
          </div>
        )}
      </div>
      <div className="mt-4 text-black text-center">
        {current + 1} / {IMAGE_PATHS.length}
      </div>
    </div>
  );
};

export default Gallery2;
