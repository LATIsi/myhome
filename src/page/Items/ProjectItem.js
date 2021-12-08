import React from 'react';
import '../../style/Item_style.css';

function IntroItem({ id, img, alt, day, desc, team }) {
  return (
    <div className="ProjectItem">
    <img className="ProjectItem_img" alt={alt} src={ process.env.PUBLIC_URL+img}/>
    <div className="ProjectItem_day">{day}</div>
    <div className="ProjectItem_content">{desc}</div>
    </div>
  );
}

export default IntroItem;