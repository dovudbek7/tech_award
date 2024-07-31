import React, { useEffect, useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./SmsChat.css";
import { useNavigate } from 'react-router-dom';
import ip from "../Components/Config";

function LeftMenu() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://${ip}/api/categories/`)
      .then(response => response.json())
      .then((data) => {
        const lang = localStorage.getItem('i18nextLng');
        setCategories(data.map((book) => ({
          ...book,
          name_uz: book.name,
          name: lang === 'uz' ? book.name : lang === 'ru' ? book.name_ru : book.name_en,
        })));
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleCategoryClick = (categoryName) => {
    navigate(`/leftfilter/${categoryName}`);
  };

  return (
    <div className='LeftMenu relative h-[93vh] overflow-hidden mt-4 mr-4 cursor-pointer'>
      <ul className='absolute inset-0 overflow-y-auto max-h-full scrollbar-thumb-gray-600 scrollbar-thumb-hover-gray-400'>
        {categories.map((category, index) => (
          <li
            key={index}
            className='left-menu border p-4 hover:bg-sky-200 flex justify-between text-sm'
            onClick={() => handleCategoryClick(category.name_uz)}
          >
            {category.name} <ArrowForwardIosIcon />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LeftMenu;
