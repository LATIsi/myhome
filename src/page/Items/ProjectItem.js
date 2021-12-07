import React from 'react';
import '../../style/Item_style.css';

function IntroItem({ id, img, day, desc, team }) {
  return (
    <div className="ProjectItem">
    <div className="ProjectItem_img">{img}</div>
    <div className="ProjectItem_day">{day}</div>
    <div className="ProjectItem_content">{desc}</div>
    </div>
  );
}

export default IntroItem;