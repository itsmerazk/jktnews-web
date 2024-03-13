import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import World from '../screen/category/World';

export default function Berita() {
  const [data, setData] = useState({ status: 0, category: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [selectedSubMenu, setSelectedSubMenu] = useState("");
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await fetch('https://jakpost.vercel.app/api/category');
        const jsonData = await resp.json();
        setData(jsonData);
        setIsLoading(false);
       
        setTimeout(() => {
          setIsContentVisible(true);
        }, 300); 
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className={`opacity-${isContentVisible ? '100' : '0'} transition-opacity duration-500`}>
      {/* Navbar */}
      <nav className="p-4 bg-gray-800">
        <div className="container flex items-center justify-between mx-auto">
          <a href="#" className="text-xl font-bold text-white">JKTNEWS</a>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-white">Beranda</Link></li>
            <li className="relative group">
              <div className="text-white cursor-pointer" onClick={() => setShowSubMenu(!showSubMenu)}>
                Kategori
              </div>
              {showSubMenu && (
                <ul className="absolute px-4 py-4 ml-10 space-y-3 text-lg text-white transition duration-300 bg-gray-800 rounded-md">
                  {data.category.map((category, index) => (
                    <li key={index}>
                      <div
                        className="cursor-pointer group"
                        onClick={() => setSelectedSubMenu(category.name)}
                      >
                        {category.name}
                        {category.subCategory && (
                          <ul className={`absolute top-0 ${selectedSubMenu === category.name ? 'block' : 'hidden'} right-0 mt-10 bg-gray-800 text-white rounded-md mr-4 transition duration-300`}>
                            {category.subCategory.map((sub, subIndex) => (
                              <li key={subIndex}><Link to={sub.link}>{sub.name}</Link></li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li><Link to="/" className="text-white">Tentang</Link></li>
            <li><Link to="/" className="text-white">Kontak</Link></li>
          </ul>
        </div>
      </nav>

      {/* Content */}
      <World/>

      {/* Footer */}
      <footer className="py-4 mt-10 text-center text-white bg-gray-800">
        <div className="container mx-auto">
          <p>&copy; 2024 JKTNEWS. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
