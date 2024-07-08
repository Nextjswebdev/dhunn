// components/Header.tsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className={`p-4 shadow-md sticky top-0 z-50 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 14 14" className={`${isDarkMode ? 'text-white' : 'text-black'}`}>
          <path fill="currentColor" fillRule="evenodd" d="M9.812.633c.183-.836 1.374-.841 1.565-.006l.009.04l.018.077c.22.935.976 1.649 1.923 1.814c.872.151.872 1.404 0 1.556A2.398 2.398 0 0 0 11.4 5.943l-.023.102c-.19.835-1.382.83-1.565-.007l-.02-.088a2.383 2.383 0 0 0-1.918-1.838c-.871-.151-.871-1.401 0-1.553A2.383 2.383 0 0 0 9.79.731l.014-.065l.007-.033ZM3.74 4.24l2.406-.668c.088.75.602 1.45 1.541 1.614c.518.09.93.484 1.043.998l.019.088l.013.057L4.395 7.54v4.268a2.188 2.188 0 1 1-1.5-2.078V5.34a1.147 1.147 0 0 1 .845-1.1m7.807 3.273a1.977 1.977 0 0 1-1.637.123a2.192 2.192 0 0 0-2.739 2.118a2.188 2.188 0 0 0 4.376.056V7.512Z" clipRule="evenodd" />
        </svg>
        <nav className="flex space-x-4">
          {['About This App'].map((link, index) => (
            <a
              key={link}
              href="#"
              className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} hover:${isDarkMode ? 'text-white' : 'text-black'}`}
            >
              {link}
            </a>
          ))}
        </nav>
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full   hover:shadow-lg transition-all duration-300`}
        >
          {isDarkMode ? <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 2048 2048">
    <path fill="currentColor" d="M960 512q93 0 174 35t142 96t96 142t36 175q0 93-35 174t-96 142t-142 96t-175 36q-93 0-174-35t-142-96t-96-142t-36-175q0-93 35-174t96-142t142-96t175-36zm0 768q66 0 124-25t101-69t69-102t26-124q0-66-25-124t-69-101t-102-69t-124-26q-35 0-64 7v626q29 7 64 7zm64-896H896V0h128v384zM896 1536h128v384H896v-384zm1024-640v128h-384V896h384zM384 1024H0V896h384v128zm123-426L236 326l90-90l272 271l-91 91zm906 724l271 272l-90 90l-272-271l91-91zm0-724l-91-91l272-271l90 90l-271 272zm-906 724l91 91l-272 271l-90-90l271-272z"/>
</svg>: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12.058 20q-3.334 0-5.667-2.333Q4.058 15.333 4.058 12q0-3.038 1.98-5.27Q8.02 4.5 10.942 4.097q.081 0 .159.006t.153.017q-.506.706-.801 1.57q-.295.865-.295 1.811q0 2.667 1.866 4.533q1.867 1.867 4.534 1.867q.952 0 1.813-.295q.862-.295 1.548-.801q.012.075.018.153q.005.078.005.158q-.384 2.923-2.615 4.904T12.057 20Zm0-1q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.075 0-5.238-2.163T9.158 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5.058 12q0 2.9 2.05 4.95t4.95 2.05Zm-.25-6.75Z"/>
</svg>}
        </button>
      </div>
    </header>
  );
};

export default Header;
