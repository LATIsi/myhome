import React, { Component } from 'react';
import '../../style/Item_style.css';
import SkillItem from '../Items/SkillItem';
import styled from "styled-components";

//select는 분야설명
//team이 true인것은 팀프로젝트, 아닌것들은 (혼자 제작한 프로젝트는) false
const SKillCotent = [
  {
    id: 1,
    select:'DevLanguage',
    img: '/assets/man_clothes.jpg',
    name: 'JAVA',
    gauge: 85
  },
  {
    id: 2,
    select:'DevLanguage',
    img: '/assets/man_clothes.jpg',
    name: 'JavaScript',
    gauge: 60
  },
  {
    id: 3,
    select:'DevLanguage',
    img: '/assets/man_clothes.jpg',
    name: 'HTML / css',
    gauge: 70
  },
  {
    id: 4,
    select:'DevLanguage',
    img: '/assets/man_clothes.jpg',
    name: 'SQL',
    gauge: 70
  },
  {
    id: 5,
    select:'DevLanguage',
    img: '/assets/man_clothes.jpg',
    name: 'react',
    gauge: 40
  },
  {
    id: 6,
    select:'DesignTool',
    img: '/assets/man_clothes.jpg',
    name: 'photoshop',
    gauge: 85
  },
  {
    id: 7,
    select:'DesignTool',
    img: '/assets/man_clothes.jpg',
    name: 'Illustrator',
    gauge: 60
  },
  {
    id: 8,
    select:'DesignTool',
    img: '/assets/man_clothes.jpg',
    name: 'zeplin',
    gauge: 85
  },
  {
    id: 9,
    select:'DesignTool',
    img: '/assets/man_clothes.jpg',
    name: 'figma',
    gauge: 75
  },
  {
    id: 10,
    select:'DevTool',
    img: '/assets/man_clothes.jpg',
    name: 'androidStudio',
    gauge: 85
  },
  {
    id: 11,
    select:'DevTool',
    img: '/assets/man_clothes.jpg',
    name: 'eclips',
    gauge: 60
  },
  {
    id: 12,
    select:'DevTool',
    img: '/assets/man_clothes.jpg',
    name: 'git (github)',
    gauge: 70
  },
  {
    id: 13,
    select:'DevTool',
    img: '/assets/man_clothes.jpg',
    name: 'Visual Studio Code',
    gauge: 50
  },
  {
    id: 14,
    select:'DevServer',
    img: '/assets/man_clothes.jpg',
    name: 'Linux (db, virtual machine server)',
    gauge: 85
  },
  {
    id: 15,
    select:'DevServer',
    img: '/assets/man_clothes.jpg',
    name: 'phpmyadmin',
    gauge: 70
  },
  {
    id: 16,
    select:'DevServer',
    img: '/assets/man_clothes.jpg',
    name: 'Firebase',
    gauge: 30
  },
  
];

const SkilllistBlock = styled.div`
    width: 50%;
    height: 10%;
    float: left;
    display: grid;
    grid-template-columns: 2fr 1fr;
    margin-top: 10px;
    margin-left: 20px;
    margin-Right: 20px;
    margin-bottom: 10px;
    background-color:red;
`;

class SkillList extends Component{
     render(){
       const {select} = this.props;
       const DevLanguageContent =  SKillCotent.filter(Item => ('DevLanguage' === Item.select));
       const DesignToolContent =  SKillCotent.filter(Item => ('DesignTool' === Item.select));
       const DevToolContent =  SKillCotent.filter(Item => ('DevTool' === Item.select));
       const DevServerContent =  SKillCotent.filter(Item => ('DevServer' === Item.select));
       
      console.log(DevLanguageContent);
      console.log(DesignToolContent);
      console.log(DevToolContent);
      console.log(DevServerContent);
      console.log(select);

      return(
        <SkilllistBlock>
        {(() => {
        switch({select}){
          case 'DevLanguage':
            DevLanguageContent.map(Item => (
              <SkillItem
              key={Item.id}
              id={Item.id}
              select={Item.select}
              img={Item.img}
              name={Item.name}
              gauge={Item.gauge}
              />
           ))
          break;
          case 'DesignTool':
            DesignToolContent.map(Item => (
              <SkillItem
              key={Item.id}
              id={Item.id}
              select={Item.select}
              img={Item.img}
              name={Item.name}
              gauge={Item.gage}
              />
           ))
          break;
          case 'DevTool':
            DevToolContent.map(Item => (
              <SkillItem
              key={Item.id}
              id={Item.id}
              select={Item.select}
              img={Item.img}
              name={Item.name}
              gauge={Item.gage}
              />
           ))
          break;
          default :
          DevServerContent.map(Item => (
                <SkillItem
                key={Item.id}
                id={Item.id}
                select={Item.select}
                img={Item.img}
                name={Item.name}
                gauge={Item.gage}
                />
            ))
          break;
        }
      })()}
        </SkilllistBlock>
      );
    }
  }

  export default SkillList;