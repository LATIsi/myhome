import React from 'react';
import '../../style/Item_style.css';

  function SkillItem({ id, select, img, name, gauge }) {
    return (
      <div className="SkillItem">
      <div className="SkillItem_img"></div>
      <div className="SkillItem_name">{name}</div>
      <div className="SkillItem_pro">{gauge}%</div>
      <div className="SkillItem_Gauge" gaugePro={gauge}></div>
      <div className="SkillItem_Gauge_bg"></div>
  </div>
    );
  }
  
  export default SkillItem;