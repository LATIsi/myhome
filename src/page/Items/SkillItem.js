import React from 'react';
import '../../style/Item_style.css';

  function SkillItem({ id, day, desc, edu }) {
    return (
      <div className="SkillItem">
      <div className="SkillItem_img">
          aa
      </div>
      <div className="SkillItem_name">
          JAVA
      </div>
      <div className="SkillItem_pro">
          50%
      </div>
      <div className="SkillItem_Gauge"></div>
      <div className="SkillItem_Gauge_bg"></div>
  </div>
    );
  }
  
  export default SkillItem;