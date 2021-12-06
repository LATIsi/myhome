import React from 'react';
import '../../style/Item_style.css';
import '../../style/Intro_style.css';

function IntroItem({ id, day, desc, edu }) {
  return (
    <div className="IntroItem">
    <div className="IntroItem_day">{day}</div>
    <div className="IntroItem_content">{desc}</div>
    </div>
  );
}

export default IntroItem;