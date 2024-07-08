'use client'

import React, { useState } from 'react';
import { Song } from '../types';

interface SearchBarProps {
  songs: Song[];
  setSearchResults: React.Dispatch<React.SetStateAction<Song[]>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ songs, setSearchResults }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter songs based on the search query (start with matching)
    const filteredSongs = songs.filter(song =>
      song.title.toLowerCase().startsWith(query) || song.artist.toLowerCase().startsWith(query)
    );

    setSearchResults(filteredSongs); // Update search results
  };

  return (
    <div className="mt-8">
      <input
        type="text"
        placeholder="Search songs, albums, artists..."
        className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
    </div>
  );
};

export default SearchBar;

