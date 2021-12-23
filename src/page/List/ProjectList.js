import React, { Component } from 'react';
import '../../style/Item_style.css';
import ProjectItem from '../Items/ProjectItem';
import styled from "styled-components";

//alt는 사진 설명
//team이 true인것은 팀프로젝트, 아닌것들은 (혼자 제작한 프로젝트는) false
const ProjectCotent = [
  {
    id: 1,
    img: '/assets/man_clothes.jpg',
    alt:'남성 의류 쇼핑몰',
    day: '2019.03 - 2019.06',
    desc: '남성 의류 쇼핑몰 분석, 계획, DB구성',
    select: 'team'
  },
  {
    id: 2,
    img: '/assets/dongne.png',
    alt:'우리마트다모여',
    day: '2019.09 - 2019.12',
    desc: '우리마트다모여 / 집 주변 동네마트 검색, 조회, 배달 앱',
    select: 'team'
  },
  {
    id: 3,
    img: '/assets/themodel.png',
    alt:'the model',
    day: '2020.09 - 2020.12',
    desc: 'the model / 모델 구인구직 어플 ',
    select: 'team'
  },
  {
    id: 4,
    img: '/assets/shingu.png',
    alt:'신구대 서점 어플',
    day: '2020.03 - 2020.06',
    desc: '신구대 서점 어플 / 기획서 ',
    select: 'personal'
  },
  {
    id: 5,
    img: '/assets/sidedish.png',
    alt:'side dish',
    day: '2020.09 - 2020.12',
    desc: '반찬가게 배달 어플 side dish / 기획서 ',
    select: 'personal'
  },
  {
    id: 6,
    img: '/assets/todo_list.png',
    alt:'to_do list',
    day: '2021.10 - 2021.11',
    desc: 'to_do list / react',
    select: 'personal'
  }
];

const ProjectlistBlock = styled.div`
    width: 100%;
    height: 100%;
    float: left;
    display: grid;
    z-index: 1;
    grid-template-columns: 1fr 1fr;
    margin-top: 20px;
    margin-bottom: 20px;
`;

class ProjectList extends Component{
     render(){
       const {select} = this.props;
       const PersonalContent =  ProjectCotent.filter(Item => ('personal' === Item.select));
       const TeamContent =  ProjectCotent.filter(Item => ('team' === Item.select));

      return(
        <ProjectlistBlock>
        {
          { 
            team : TeamContent.map(Item => (
              <ProjectItem
              key={Item.id}
              id={Item.id}
              img={Item.img}
              alt={Item.alt}
              day={Item.day}
              desc={Item.desc}
              select={Item.select}/>
           ))
            ,
            personal :  PersonalContent.map(Item => (
              <ProjectItem
              key={Item.id}
              id={Item.id}
              img={Item.img}
              alt={Item.alt}
              day={Item.day}
              desc={Item.desc}
              select={Item.select}/>
           )) 
          }[select]
        }

     </ProjectlistBlock>
      );
    }
  }

  export default ProjectList;