import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [selectedSubMenu, setSelectedSubMenu] = useState("");

  const data = {
    category: [
      {
        name: 'Indonesia',
        subCategory: [
          { name: 'Jakarta', link: '/Indonesia/Jakarta' },
          { name: 'Archipelago', link: '/Indonesia/Archipelago' },
          { name: 'Politics', link: '/Indonesia/Politics' },
          { name: 'Society', link: '/Indonesia/Society' },
        ]
      },
      {
        name: 'World',
        subCategory: [
          { name: 'Americas', link: '/World/Americas' },
          { name: 'Asia - Pacific', link: '/World/AsiaPasific' },
          { name: 'Europe', link: '/World/Europe' },
          { name: 'Middle East Africa', link: '/World/MiddleEastAfrica' },
        ]
      },
      {
        name: 'Culture',
        subCategory: [
          { name: 'Arts & Culture', link: '/Culture/ArtsCulture' },
          { name: 'Books', link: '/Culture/Books' },
          { name: 'Entertainment', link: '/Culture/Entertainment' },
          { name: 'Environment', link: '/Culture/Environment' },
          { name: 'Food', link: '/Culture/Food' },
          { name: 'Health', link: '/Culture/Health' },
          { name: 'Lifestyle', link: '/Culture/Lifestyle' },
          { name: 'Parenting', link: '/Culture/Parenting' },
          { name: 'People', link: '/Culture/People' },
          { name: 'Technology', link: '/Culture/Technology' },
        ]
      },
      {
        name: 'Opinion',
        subCategory: [
          { name: 'Academia', link: '/Opinion/Academia' },
          { name: 'Analysis', link: '/Opinion/Analysis' },
          { name: 'Commentary', link: '/Opinion/Commentary' },
          { name: 'Editorial', link: '/Opinion/Editorial' },
          { name: 'Insight', link: '/Opinion/Insight' },
          { name: 'Interview', link: '/Opinion/Interview' },
          { name: 'Podcast', link: '/Opinion/Podcast' },
          { name: 'The Brief', link: '/Opinion/TheBrief' },
        ]
      },
      {
        name: 'DeepDive',
        subCategory: [
          { name: 'Dispatch', link: '/DeepDive/Dispatch' },
          { name: 'Quick', link: '/DeepDive/Quick' },
        ]
      },
      {
        name: 'Business',
        subCategory: [
          { name: 'Business', link: '/Business/Companies' },
          { name: 'Economy', link: '/Business/Economy' },
          { name: 'Markets', link: '/Business/Markets' },
          { name: 'Regulations', link: '/Business/Regulations' },
          { name: 'Tech', link: '/Business/Tech' },
        ]
      }
    ]
  };

  return (
    <div>
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
            <li><Link to="/about" className="text-white">Tentang</Link></li>
            <li><Link to="/contact" className="text-white">Kontak</Link></li>
          </ul>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto mt-8">
        <h1 className="mb-4 text-3xl font-bold">Tentang</h1>
        <p className="text-gray-700">JKTNEWS adalah platform berita daring yang menyediakan berbagai informasi terkini dari dalam dan luar negeri. Kami berkomitmen untuk menyajikan berita-berita yang akurat, berimbang, dan relevan bagi pembaca kami.</p>
        <p className="mt-2 text-gray-700">Kami juga memberikan liputan mendalam dalam berbagai kategori seperti politik, ekonomi, budaya, opini, dan bisnis. JKTNEWS didukung oleh tim jurnalis profesional yang selalu siap memberikan informasi terpercaya kepada masyarakat.</p>
      </div>

      {/* Footer */}
      <footer className="py-4 mt-20 text-center text-white bg-gray-800">
        <div className="container mx-auto">
          <p>&copy; 2024 JKTNEWS. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
