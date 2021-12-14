import React, { Component } from 'react';
import '../../style/Item_style.css';
import SkillItem from '../Items/SkillItem';
import styled from "styled-components";
import { GrJava, GrAndroid } from 'react-icons/gr';
import { SiJavascript , SiCss3 , SiReact, SiAdobephotoshop, SiAdobeillustrator,
   SiPhpmyadmin,SiFirebase, SiLinux, SiEclipseide, SiVisualstudiocode} from 'react-icons/si';
import { AiOutlineConsoleSql ,AiFillGithub} from 'react-icons/ai';
import { GiZeppelin } from 'react-icons/gi';
import { FiFigma } from 'react-icons/fi';

//select는 다룰수있는 분야설명
//DevLanguage는 개발언어,   DesignTool은 디자인툴,  DevTool는 개발 툴, DevServer는 서버
const SKillCotent = [
  {
    id: 1,
    select:'DevLanguage',
    img: <GrJava/>,
    name: 'JAVA',
    gauge: 85
  },
  {
    id: 2,
    select:'DevLanguage',
    img: <SiJavascript/>,
    name: 'JavaScript',
    gauge: 60
  },
  {
    id: 3,
    select:'DevLanguage',
    img: <SiCss3/>,
    name: 'HTML / css',
    gauge: 70
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
    name: 'react',
    gauge: 40
  },
  {
    id: 6,
    select:'DesignTool',
    img: <SiAdobephotoshop/>,
    name: 'photoshop',
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
    name: 'zeppelin',
    gauge: 85
  },
  {
    id: 9,
    select:'DesignTool',
    img: <FiFigma/>,
    name: 'figma',
    gauge: 75
  },
  {
    id: 10,
    select:'DevTool',
    img: <GrAndroid/>,
    name: 'androidStudio',
    gauge: 85
  },
  {
    id: 11,
    select:'DevTool',
    img: <SiEclipseide/>,
    name: 'eclipse',
    gauge: 60
  },
  {
    id: 12,
    select:'DevTool',
    img: <AiFillGithub/>,
    name: 'git (github)',
    gauge: 70
  },
  {
    id: 13,
    select:'DevTool',
    img: <SiVisualstudiocode/>,
    name: 'Visual Studio Code',
    gauge: 50
  },
  {
    id: 14,
    select:'DevServer',
    img: <SiLinux/>,
    name: 'Linux (db, virtual machine server)',
    gauge: 85
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
    width: 100%;
    height: 83%;
    margin-top:10vh;
    float: left;
    display: grid;
    padding : 10px;
    grid-template-columns: 2fr 1fr;
    background-color:red;
`;

class SkillList extends Component{
     render(){
       const {select} = this.props;
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
              />))
          }[select]
        }
       </SkilllistBlock>
      )
  }
}

  export default SkillList;