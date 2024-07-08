'use client'

import React from 'react';
import { Song } from '../types'; // Adjust the path as per your file structure
import Image from 'next/image';
import { motion } from 'framer-motion';

interface SongListProps {
  tracks: Song[];
  onSongClick: (song: Song) => void;
}

const SongList: React.FC<SongListProps> = ({ tracks, onSongClick }) => {
  const handleClick = (song: Song) => {
    onSongClick(song); // Pass the selected song to the parent component
  };

  return (
    <motion.div
    className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-32" // Add padding at the bottom
    initial="hidden"
    animate="visible"
    variants={{
      hidden: {
        opacity: 0,
        y: 20,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.2,
          when: "beforeChildren",
          staggerChildren: 0.1,
        },
      },
    }}
  >
    {tracks.map((track) => (
      <motion.div
        key={track.id}
        className="bg-gray-800 p-4 rounded-lg flex items-center space-x-4 cursor-pointer transform transition-transform duration-200 hover:scale-105"
        onClick={() => onSongClick(track)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image src={track.coverUrl} alt={track.title} width={64} height={64} className="h-16 w-16 rounded-lg" />
        <div>
          <p className="text-white">{track.title}</p>
          <p className="text-gray-400">{track.artist}</p>
        </div>
      </motion.div>
    ))}
  </motion.div>
  );
};

export default SongList;
