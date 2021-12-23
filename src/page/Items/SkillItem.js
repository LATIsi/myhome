import React from 'react';
import '../../style/Item_style.css';
import styled from "styled-components";

const SkillItemImg = styled.div`
    position: absolute;
    left: 1.5vw;
    width: 4vw;
    height: 4vh;
    color: black;
    font-size: 8vh;
    text-align: center;
    &:hover {
      color: ${props => props.color};
    }
`;

const SkillItemGauge = styled.div`
    position: absolute;
    top: 7vh;
    width: 100%;
    height: 2vh;
    border-radius: 1vw;
    background-color: ${props => props.color};
    z-index:2;
    width: ${props => props.gaugePro}%;
`;

const SkillItemGaugeBg = styled.div`
    position: absolute;
    top: 7vh;
    width: 100%;
    height: 2vh;
    border-radius: 1vw;
    z-index:1;
    background-color: #c4c4c4;
`;

  function SkillItem({ id, select, img, name, gauge, color}) {

    return (
      <div className="SkillItem">
            <SkillItemImg color={color}>{img}</SkillItemImg>
            <div className='SkillItem_collect'>
            <div className="SkillItem_name">{name}</div>
            <div className="SkillItem_pro">{gauge}%</div>
            <SkillItemGauge gaugePro={gauge} color={color}></SkillItemGauge>
            <SkillItemGaugeBg/>
        </div>
      </div>
    );
  }
  
  export default SkillItem;