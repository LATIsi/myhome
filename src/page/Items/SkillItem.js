import React from 'react';
import '../../style/Item_style.css';
import styled from "styled-components";

const SkillItemImg = styled.div`
    position: absolute;
    left: 2vw;
    width: 4vw;
    height: 4vh;
    color: black;
    font-size: 8vh;
    text-align: center;
    &:hover {
      color: ${props => props.color};
    }
    @media screen and (max-width: 950px) {
      left: 3vw;
      width: 8vw;
      font-size: 8vh;
    }

    @media screen and (max-width: 750px) {
      left: 2vw;
      width: 5vw;
      font-size: 8vw;
    }
`;

const SkillItemGauge = styled.div`
    position: absolute;
    top: 7vh;
    width: 100%;
    height: 2vh;
    border-radius: 1vw;
    background-color: ${props => props.color};
    z-index:3;
    margin-left: 10px;
    width: ${props => props.gaugePro}%;
    @media screen and (max-width: 950px) {
      top: 9vh;
    }
    @media screen and (max-width: 750px) {
      top: 9vw;
      height: 2vw;
    }
`;

const SkillItemGaugeBg = styled.div`
    position: absolute;
    top: 7vh;
    width: 100%;
    height: 2vh;
    border-radius: 1vw;
    z-index:2;
    margin-left: 10px;
    background-color: #c4c4c4;
    @media screen and (max-width: 950px) {
      top: 9vh;
    }
    @media screen and (max-width: 750px) {
      top: 9vw;
      height: 2vw;
      width: 100%;
    }
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