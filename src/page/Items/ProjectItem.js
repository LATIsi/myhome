import React, { Component } from 'react';
import '../../style/Item_style.css';

class ProjectItem extends Component{
     render(){
      return(
        <div className="SkillItem">
            <div className="SkillItem_img">
                aa
            </div>
            <div className="SkillItem_bg"></div>
            <div className="SkillItem_projectDay">
                2019.09~2019,12
            </div>
            <div className="SkillItem_projectName">
                프로젝트 이름
            </div>
        </div>
      );
    }
  }

  export default ProjectItem;