// components/ImageComponent.tsx
import React from 'react';

const ImageComponent: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            
            <img src="/public/images/compas.jpg" alt="Example" className=" w-full max-w-md" />
        </div>
    );
};

export default ImageComponent;

