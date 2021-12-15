import React, { Component } from 'react';
import '../../style/Item_style.css';
import SkillItem from '../Items/SkillItem';
import styled from "styled-components";
import {GrAndroid } from 'react-icons/gr';
import { SiJavascript , SiCss3 , SiReact, SiAdobephotoshop, SiAdobeillustrator,
   SiPhpmyadmin,SiFirebase, SiLinux, SiEclipseide, SiJava, SiVisualstudiocode} from 'react-icons/si';
import { AiOutlineConsoleSql ,AiFillGithub} from 'react-icons/ai';
import { GiZeppelin } from 'react-icons/gi';
import { FiFigma } from 'react-icons/fi';

//select는 다룰수있는 분야설명
//DevLanguage는 개발언어,   DesignTool은 디자인툴,  DevTool는 개발 툴, DevServer는 서버
const SKillCotent = [
  {
    id: 1,
    select:'DevLanguage',
    img: <SiJava/>,
    name: 'JAVA',
    gauge: 65
  },
  {
    id: 2,
    select:'DevLanguage',
    img: <SiJavascript/>,
    name: 'JavaScript',
    gauge: 65
  },
  {
    id: 3,
    select:'DevLanguage',
    img: <SiCss3/>,
    name: 'HTML / css',
    gauge: 80
  },
  {
    id: 4,
    select:'DevLanguage',
    img: <AiOutlineConsoleSql/>,
    name: 'SQL',
    gauge: 70
  },
  {
    id: 5,
    select:'DevLanguage',
    img: <SiReact/>,
    name: 'React',
    gauge: 40
  },
  {
    id: 6,
    select:'DesignTool',
    img: <SiAdobephotoshop/>,
    name: 'Photoshop',
    gauge: 85
  },
  {
    id: 7,
    select:'DesignTool',
    img: <SiAdobeillustrator/>,
    name: 'Illustrator',
    gauge: 60
  },
  {
    id: 8,
    select:'DesignTool',
    img: <GiZeppelin/>,
    name: 'Zeppelin',
    gauge: 85
  },
  {
    id: 9,
    select:'DesignTool',
    img: <FiFigma/>,
    name: 'Figma',
    gauge: 75
  },
  {
    id: 10,
    select:'DevTool',
    img: <GrAndroid/>,
    name: 'Android Studio',
    gauge: 85
  },
  {
    id: 11,
    select:'DevTool',
    img: <SiEclipseide/>,
    name: 'Eclipse',
    gauge: 60
  },
  {
    id: 12,
    select:'DevTool',
    img: <AiFillGithub/>,
    name: 'git (github)',
    gauge: 60
  },
  {
    id: 13,
    select:'DevTool',
    img: <SiVisualstudiocode/>,
    name: 'VSCode',
    gauge: 50
  },
  {
    id: 14,
    select:'DevServer',
    img: <SiLinux/>,
    name: 'Linux / Fedora24',
    gauge: 65
  },
  {
    id: 15,
    select:'DevServer',
    img: <SiPhpmyadmin/>,
    name: 'phpmyadmin',
    gauge: 70
  },
  {
    id: 16,
    select:'DevServer',
    img: <SiFirebase/>,
    name: 'Firebase',
    gauge: 30
  },
  
];

const SkilllistBlock = styled.div`
    position: absolute;
    width: 80%;
    height: 40vh;
    bottom : 4vh;
    float: left;
    display: grid;
    left: 50%;
    grid-column-gap: 30px;
    transform: translateX(-50%);
    grid-template-columns:  1fr 1fr;
`;

class SkillList extends Component{
     render(){
       const {select, color} = this.props;
       const DevLanguageContent =  SKillCotent.filter(Item => ('DevLanguage' === Item.select));
       const DesignToolContent =  SKillCotent.filter(Item => ('DesignTool' === Item.select));
       const DevToolContent =  SKillCotent.filter(Item => ('DevTool' === Item.select));
       const DevServerContent =  SKillCotent.filter(Item => ('DevServer' === Item.select));

      return(
        <SkilllistBlock>
        {
          { 
            DevLanguage : DevLanguageContent.map(Item => (
              <SkillItem
              key={Item.id}
              id={Item.id}
              select={Item.select}
              img={Item.img}
              name={Item.name}
              gauge={Item.gauge}
              color={color}
              />))
            ,
            DesignTool : DesignToolContent.map(Item => (
              <SkillItem
              key={Item.id}
              id={Item.id}
              select={Item.select}
              img={Item.img}
              name={Item.name}
              gauge={Item.gauge}
              color={color}
              />))
              ,
            DevTool :DevToolContent.map(Item => (
              <SkillItem
              key={Item.id}
              id={Item.id}
              select={Item.select}
              img={Item.img}
              name={Item.name}
              gauge={Item.gauge}
              color={color}
              />))
              ,
            DevServer : DevServerContent.map(Item => (
              <SkillItem
              key={Item.id}
              id={Item.id}
              select={Item.select}
              img={Item.img}
              name={Item.name}
              gauge={Item.gauge}
              color={color}
              />))
          }[select]
        }
       </SkilllistBlock>
      )
  }
}

  export default SkillList;