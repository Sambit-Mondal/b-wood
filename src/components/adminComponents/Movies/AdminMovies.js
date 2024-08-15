'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import MoviesSidebar from './MoviesSidebar';

const Card = ({ title, imageSrc, onClick }) => {
    return (
        <div
            className="relative border-2 ml-4 w-60 cursor-pointer text-center border-neon rounded-xl shadow-lg flex flex-col justify-center p-2 transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-opacity-80"
            onClick={onClick}
        >
            <div className="relative h-80 w-full rounded-md mb-4 overflow-hidden">
                <Image
                    src={imageSrc}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out transform"
                />
                <div className="absolute inset-0 flex items-center justify-center px-4 py-2 bg-green-500/30 text-black font-extrabold rounded-lg opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 z-10"></div>
            </div>
            <h2 className="font-bold mb-2">{title}</h2>
        </div>
    );
};

const AdminMovies = ({ onOpenSidebar }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const handleCardClick = () => {
        onOpenSidebar();
    };

    const handleSidebarClose = () => {
        setSidebarOpen(false);
    };

    const resources = [
        {
            title: "Deadpool and Wolverine",
            imageSrc: "/image.png",
        },
        {
            title: "Deadpool and Wolverine",
            imageSrc: "/image.png",
        },
        {
            title: "Deadpool and Wolverine",
            imageSrc: "/image.png",
        },
        {
            title: "Deadpool and Wolverine",
            imageSrc: "/image.png",
        },
        {
            title: "Deadpool and Wolverine",
            imageSrc: "/image.png",
        },
        {
            title: "Deadpool and Wolverine",
            imageSrc: "/image.png",
        },
        {
            title: "Deadpool and Wolverine",
            imageSrc: "/image.png",
        },
        {
            title: "Deadpool and Wolverine",
            imageSrc: "/image.png",
        },
        {
            title: "Deadpool and Wolverine",
            imageSrc: "/image.png",
        },
        {
            title: "Deadpool and Wolverine",
            imageSrc: "/image.png",
        }
    ];

    return (
        <>
            <div className="w-full h-full overflow-x-auto py-5 pr-2 rounded-xl" style={{ scrollbarWidth: 'none' }}>
                <div className="flex space-x-6" style={{ minWidth: 'max-content' }}>
                    {resources.map((resource, index) => (
                        <Card
                            key={index}
                            title={resource.title}
                            imageSrc={resource.imageSrc}
                            onClick={handleCardClick}
                        />
                    ))}
                </div>
            </div>
            <MoviesSidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} />
        </>
    );
};

export default AdminMovies;