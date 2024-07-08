'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Song } from '../types'; // Adjust the path as per your file structure

interface PlayerProps {
  song: Song | null; // Specify the type as Song or null
}

const Player: React.FC<PlayerProps> = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (song && audioRef.current) {
      audioRef.current.src = song.audioUrl;
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [song]);

  useEffect(() => {
    const audio = audioRef.current;
    const updateCurrentTime = () => {
      if (audio) {
        setCurrentTime(audio.currentTime);
        setDuration(audio.duration);
      }
    };
    audio?.addEventListener('timeupdate', updateCurrentTime);
    return () => {
      audio?.removeEventListener('timeupdate', updateCurrentTime);
    };
  }, []);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${formattedSeconds}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 p-4 flex items-center justify-center shadow-lg">
      {song ? (
        <div className="flex items-center space-x-4 w-full max-w-screen-lg mx-auto">
          <div className="flex-shrink-0">
            <Image src={song.coverUrl} alt="Song Cover" width={64} height={64} className="rounded-lg" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-medium truncate">{song.title}</p>
            <p className="text-gray-400 truncate">{song.artist}</p>
            <div className="flex items-center space-x-4 mt-2">
              <button className="text-white focus:outline-none" onClick={handlePlayPause}>
                {isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
                <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4">
                    <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"/>
                    <path d="M20 24v-6.928l6 3.464L32 24l-6 3.464l-6 3.464V24Z"/>
                </g>
            </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16">
                  <path fill="currentColor" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 14.5a6.5 6.5 0 1 1 0-13a6.5 6.5 0 0 1 0 13zM5 5h2v6H5zm4 0h2v6H9z"/>
              </svg>
                )}
              </button>
              <input
                type="range"
                min={0}
                max={duration}
                value={currentTime}
                onChange={handleSeek}
                className="appearance-none w-full h-1 bg-gray-700 rounded-lg outline-none focus:outline-none"
              />
              <span className="text-xs text-gray-400">{formatTime(currentTime)}</span>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-white">Select a song to play</p>
      )}
      <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />
    </div>
  );
};

export default Player;
