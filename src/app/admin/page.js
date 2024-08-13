'use client';
import React, { useState } from 'react';
import AdminMovies from '../../components/adminComponents/Movies/AdminMovies';
import AdminTheatres from '../../components/adminComponents/Theatres/AdminTheatres';
import AdminReservations from '../../components/adminComponents/Reservations/AdminReservations';
import AdminUsers from '../../components/adminComponents/Users/AdminUsers';
import { FaPlusCircle } from 'react-icons/fa';
import MoviesSidebar from '../../components/adminComponents/Movies/MoviesSidebar';
import UsersSidebar from '../../components/adminComponents/Users/UsersSidebar';

function Admin() {
  const [isMoviesSidebarOpen, setMoviesSidebarOpen] = useState(false);
  const [isUsersSidebarOpen, setUsersSidebarOpen] = useState(false);
  const [sidebarMode, setSidebarMode] = useState('add');

  const handleOpenMoviesSidebar = (mode) => {
    setUsersSidebarOpen(false);
    setSidebarMode(mode);
    setMoviesSidebarOpen(true);
  };

  const handleOpenUsersSidebar = (mode) => {
    setMoviesSidebarOpen(false);
    setSidebarMode(mode);
    setUsersSidebarOpen(true);
  };

  const handleCloseMoviesSidebar = () => {
    setMoviesSidebarOpen(false);
  };

  const handleCloseUsersSidebar = () => {
    setUsersSidebarOpen(false);
  };

  return (
    <main className='px-10 pt-20'>

      <div className="p-6">
        <div className='flex justify-between'>
          <h1 className="text-3xl text-neon font-bold">Existing Movies</h1>
          <button
            onClick={() => handleOpenMoviesSidebar('add')}
            className='flex items-center justify-around p-1 gap-2 pr-3 text-black font-bold bg-neon rounded-full cursor-pointer transition ease-in-out duration-150 hover:scale-105'>
            <FaPlusCircle className='size-8' />
            <p className='flex items-center justify-center'>Add Movies</p>
          </button>
        </div>
        <AdminMovies onOpenSidebar={() => handleOpenMoviesSidebar('edit')} />
        <MoviesSidebar isOpen={isMoviesSidebarOpen} onClose={handleCloseMoviesSidebar} mode={sidebarMode} />
      </div>

      <div className="p-6">
        <div className='flex justify-between'>
          <h1 className="text-3xl text-neon font-bold">Existing Theatres</h1>
          <button className='flex items-center justify-around p-1 gap-2 pr-3 text-black font-bold bg-neon rounded-full cursor-pointer transition ease-in-out duration-150 hover:scale-105'>
            <FaPlusCircle className='size-8' />
            <p className='flex items-center justify-center'>Add Theatres</p>
          </button>
        </div>
        <AdminTheatres />
      </div>

      <div className="p-6">
        <div className='flex justify-between'>
          <h1 className="text-3xl text-neon font-bold">Existing Reservations</h1>
          <button className='flex items-center justify-around p-1 gap-2 pr-3 text-black font-bold bg-neon rounded-full cursor-pointer transition ease-in-out duration-150 hover:scale-105'>
            <FaPlusCircle className='size-8' />
            <p className='flex items-center justify-center'>Add Reservations</p>
          </button>
        </div>
        <AdminReservations />
      </div>

      <div className="p-6">
        <div className='flex justify-between'>
          <h1 className="text-3xl text-neon font-bold">Existing Users</h1>
          <button
            onClick={() => handleOpenUsersSidebar('add')}
            className='flex items-center justify-around p-1 gap-2 pr-3 text-black font-bold bg-neon rounded-full cursor-pointer transition ease-in-out duration-150 hover:scale-105'>
            <FaPlusCircle className='size-8' />
            <p className='flex items-center justify-center'>Add Users</p>
          </button>
        </div>
        <AdminUsers onOpenSidebar={() => handleOpenUsersSidebar('edit')} />
        <UsersSidebar isOpen={isUsersSidebarOpen} onClose={handleCloseUsersSidebar} mode={sidebarMode} />
      </div>

    </main>
  );
}

export default Admin;