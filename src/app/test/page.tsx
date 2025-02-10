"use client";

import { useState, useRef, useCallback } from "react";
// @ts-ignore
import ColorThief from "colorthief";

const Home = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [palette, setPalette] = useState<number[][]>([]);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  // Handle image upload
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImageSrc(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  // Extract colors using ColorThief
  const extractColors = useCallback(() => {
    if (imageRef.current) {
      const colorThief = new ColorThief();
      if (imageRef.current.complete) {
        const colors = colorThief.getPalette(imageRef.current, 5);
        setPalette(colors);
      }
    }
  }, []);

  // Copy color to clipboard
  const copyToClipboard = (color: number[]) => {
    const colorCode = `rgb(${color.join(", ")})`;
    navigator.clipboard.writeText(colorCode);
    setCopiedColor(colorCode);

    setTimeout(() => setCopiedColor(null), 2000); // Reset after 2 seconds
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-primary text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-newprimary2 text-center">
        Image Color Palette Extractor
      </h1>

      {/* Image Upload Input */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-6 p-2 bg-primary2 text-white rounded-lg cursor-pointer transition hover:bg-newprimary"
      />

      {imageSrc && (
        <div className="mt-5">
          {/* Display Image */}
          <img
            ref={imageRef}
            src={imageSrc}
            crossOrigin="anonymous"
            onLoad={extractColors}
            className="w-64 h-auto rounded-lg shadow-lg border-2 border-newprimary2"
            alt="Uploaded"
          />

          {/* Display Extracted Colors */}
          <div className="flex flex-wrap justify-center mt-6 gap-2">
            {palette.map((color, index) => {
              const colorCode = `rgb(${color.join(", ")})`;
              return (
                <div
                  key={index}
                  className="relative w-16 h-16 rounded-lg shadow-lg cursor-pointer transform transition hover:scale-110"
                  style={{ backgroundColor: colorCode }}
                  onClick={() => copyToClipboard(color)}
                >
                  <span className="absolute bottom-0 left-0 right-0 text-center text-sm bg-black bg-opacity-70 text-white rounded opacity-0 transition-opacity duration-300 hover:opacity-100">
                    {colorCode}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Copied Notification */}
          {copiedColor && (
            <div className="mt-4 text-lg font-semibold text-newprimary2 animate-pulse">
              Copied: {copiedColor}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
