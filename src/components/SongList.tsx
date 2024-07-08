'use client'

import React from 'react';
import { Song } from '../types'; // Adjust the path as per your file structure
import Image from 'next/image';

interface SongListProps {
  tracks: Song[];
  onSongClick: (song: Song) => void;
}

const SongList: React.FC<SongListProps> = ({ tracks, onSongClick }) => {
  const handleClick = (song: Song) => {
    onSongClick(song); // Pass the selected song to the parent component
  };

  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  ">
      {tracks.map((track) => (
        <div key={track.id} className="bg-gray-800 p-4 rounded-lg flex items-center space-x-4 cursor-pointer" onClick={() => handleClick(track)}>
          <Image src={track.coverUrl} alt={track.title} width={64} height={64} className="h-16 w-16 rounded-lg" />
          <div>
            <p className="text-white">{track.title}</p>
            <p className="text-gray-400">{track.artist}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SongList;
