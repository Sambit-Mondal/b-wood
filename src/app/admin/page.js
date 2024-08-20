'use client';
import React, { useState } from 'react';
import AdminMovies from '../../components/adminComponents/Movies/AdminMovies';
import AdminTheatres from '../../components/adminComponents/Theatres/AdminTheatres';
import AdminReservations from '../../components/adminComponents/Reservations/AdminReservations';
import AdminUsers from '../../components/adminComponents/Users/AdminUsers';
import { FaPlusCircle } from 'react-icons/fa';
import MoviesSidebar from '../../components/adminComponents/Movies/MoviesSidebar';
import UsersSidebar from '../../components/adminComponents/Users/UsersSidebar';
import TheatresSidebar from '../../components/adminComponents/Theatres/TheatresSidebar';

function Admin() {
  const [isMoviesSidebarOpen, setMoviesSidebarOpen] = useState(false);
  const [isUsersSidebarOpen, setUsersSidebarOpen] = useState(false);
  const [isTheatresSidebarOpen, setTheatresSidebarOpen] = useState(false);
  const [sidebarMode, setSidebarMode] = useState('add');
  const [movieId, setMovieId] = useState("");
  const [theaterId, setTheaterId] = useState("");

  const handleOpenMoviesSidebar = (mode,id) => {
    setUsersSidebarOpen(false);
    setTheatresSidebarOpen(false);
    setSidebarMode(mode);
    setMovieId(id);
    setMoviesSidebarOpen(true);
  };

  const handleOpenUsersSidebar = (mode) => {
    setMoviesSidebarOpen(false);
    setTheatresSidebarOpen(false);
    setSidebarMode(mode);
    setUsersSidebarOpen(true);
  };

  const handleOpenTheatresSidebar = (mode,id) => {
    setMoviesSidebarOpen(false);
    setUsersSidebarOpen(false);
    setSidebarMode(mode);
    setTheaterId(id);
    setTheatresSidebarOpen(true);
  }

  const handleCloseMoviesSidebar = () => {
    setMoviesSidebarOpen(false);
  };

  const handleCloseUsersSidebar = () => {
    setUsersSidebarOpen(false);
  };

  const handleCloseTheatresSidebar = () => {
    setTheatresSidebarOpen(false);
  }

  return (
    <main className='px-4 lg:px-10 pt-36 lg:pt-20 flex flex-col gap-10'>

      <div className="lg:p-6">
        <div className='flex items-center justify-between'>
          <h1 className="text-2xl lg:text-3xl text-neon font-bold">Existing Movies</h1>
          <button
            onClick={() => handleOpenMoviesSidebar('add')}
            className='flex items-center justify-around p-1 gap-2 pr-3 text-neon lg:text-black font-bold bg-black lg:bg-neon rounded-full cursor-pointer transition ease-in-out duration-150 hover:scale-105'>
            <FaPlusCircle className='size-8' />
            <p className='hidden lg:flex items-center justify-center'>Add Movies</p>
          </button>
        </div>
        <AdminMovies onOpenSidebar={(id) => {handleOpenMoviesSidebar('edit',id)}} />
        <MoviesSidebar isOpen={isMoviesSidebarOpen} onClose={handleCloseMoviesSidebar} mode={sidebarMode} movieId={movieId} />
      </div>

      <div className="lg:p-6">
        <div className='flex items-center justify-between'>
          <h1 className="text-2xl lg:text-3xl text-neon font-bold">Existing Theatres</h1>
          <button
            onClick={() => handleOpenTheatresSidebar('add')}
            className='flex items-center justify-around p-1 gap-2 pr-3 text-neon lg:text-black font-bold bg-black lg:bg-neon rounded-full cursor-pointer transition ease-in-out duration-150 hover:scale-105'>
            <FaPlusCircle className='size-8' />
            <p className='hidden lg:flex items-center justify-center'>Add Theatres</p>
          </button>
        </div>
        <AdminTheatres onOpenSidebar={(id) => {handleOpenTheatresSidebar('edit',id)}} />
        <TheatresSidebar isOpen={isTheatresSidebarOpen} onClose={handleCloseTheatresSidebar} mode={sidebarMode} theaterId={theaterId} />
      </div>

      <div className="lg:p-6">
        <div className='flex items-center justify-between'>
          <h1 className="text-2xl lg:text-3xl text-neon font-bold">Existing Reservations</h1>
          <button className='flex items-center justify-around p-1 gap-2 pr-3 text-neon lg:text-black font-bold bg:black lg:bg-neon rounded-full cursor-pointer transition ease-in-out duration-150 hover:scale-105'>
            <FaPlusCircle className='size-8' />
            <p className='hidden lg:flex items-center justify-center'>Add Reservations</p>
          </button>
        </div>
        <AdminReservations />
      </div>

      <div className="lg:p-6">
        <div className='flex items-center justify-between'>
          <h1 className="text-2xl lg:text-3xl text-neon font-bold">Existing Users</h1>
          <button
            onClick={() => handleOpenUsersSidebar('add')}
            className='flex items-center justify-around p-1 gap-2 pr-3 text-neon lg:text-black font-bold bg-black lg:bg-neon rounded-full cursor-pointer transition ease-in-out duration-150 hover:scale-105'>
            <FaPlusCircle className='size-8' />
            <p className='hidden lg:flex items-center justify-center'>Add Users</p>
          </button>
        </div>
        <AdminUsers onOpenSidebar={() => handleOpenUsersSidebar('edit')} />
        <UsersSidebar isOpen={isUsersSidebarOpen} onClose={handleCloseUsersSidebar} mode={sidebarMode} />
      </div>

    </main>
  );
}

export default Admin;