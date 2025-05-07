
import React from 'react';
const images = import.meta.glob('../assets/background/*.svg', { eager: true });

const CloudBackground = ({ children }) => {

    const cloudImages = Object.values(images).map((mod) => mod.default);
    return (
        <div className="cloud-background">
            <div>
                {cloudImages.map((src, index) => (
                    <img
                    key={index}
                    src={src}
                    className={`cloud cloud${index + 1}`}
                    alt={`Cloud ${index + 1}`}
                    />
                ))}
            </div>
            <div className="content">
                {children}
            </div>
        </div>
    );
};

export default CloudBackground;