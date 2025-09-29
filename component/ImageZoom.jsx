"use client";

import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function ImageZoom({ src, alt, width = 500, height = 500 }) {
    return (
        <div className="w-full flex justify-center overflow-hidden">
            <Zoom>
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className="object-contain rounded-lg cursor-zoom-in max-w-full h-auto"
                />
            </Zoom>
        </div>
    );
}