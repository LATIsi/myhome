import React, { Component } from 'react';
import '../../style/Item_style.css';
import IntroItem from '../Items/IntroItem';
import styled from "styled-components";

const IntroEduCotent = [
  {
    id: 1,
    day: '2018.03',
    desc: '성보경영고등학교 기업홍보디자인과 졸업 \n 신구대학교 모바일i학과 입학',
    edu: 'Edu'
  },
  {
    id: 2,
    day: '2021.03',
    desc: '신구대학교 모바일IT학과 3년 이수뒤 수석 졸업 \n *과 통합으로 현재 소프트웨어학과로 변동',
    edu: 'Edu'
  },
  {
    id: 3,
    day: '2021.10 - now',
    desc: 'react / JS 책을 활용해 \n 클론 코딩이나 간단한 TOY 프로젝트를 하고 개선점을 찾아가는 중  ',
    edu: 'Edu'
  },
  {
    id: 4,
    day: '2021.12-',
    desc: '프로젝트 진행중 ',
    edu: 'Edu'
  },
  {
    id: 5,
    day: '2015.07',
    desc: '컴퓨터 활용능력(2급)',
    edu: 'Certi'
  },
  {
    id: 6,
    day: '2015.08 - 2016.01',
    desc: 'ITQ 한글, 엑셀, PPT',
    edu: 'Certi'
  },
  {
    id: 7,
    day: '2016.02',
    desc: 'GTQ 1급',
    edu: 'Certi'
  },
  {
    id: 8,
    day: '2017.07',
    desc: '컴퓨터그래픽스운용기능사',
    edu: 'Certi'
  },
  {
    id: 9,
    day: '2017.12',
    desc: '전자상거래운용사',
    edu: 'Certi'
  },
  {
    id: 10,
    day: '2021.06',
    desc: '정보처리산업기사',
    edu: 'Certi'
  }
];
const IntrolistBlock = styled.div`
    width: 100%;
    height: 65vh;
    left: 10%;
    flex: 1;
    overflow-y: auto;
    overflow: scroll;
    overflow-x:hidden; 
    &::-webkit-scrollbar {
      width: 0.8vw;
    }
    &::-webkit-scrollbar-thumb {
      height: 15%;
      background-color: #a4b3be;
      border-radius: 5px;  
    }
`;

  class IntroList extends Component{
    render(){
      const {select} = this.props;
      const EduContent =  IntroEduCotent.filter(Item => ('Edu' === Item.edu));
      const CertiContent =  IntroEduCotent.filter(Item => ('Certi' === Item.edu));

     return(
              <IntrolistBlock>
              {select === 'Edu' ? EduContent.map(Item => (
                 <IntroItem
                 key={Item.id}
                 id={Item.id}
                 day={Item.day}
                 desc={Item.desc}
                 edu={Item.edu}
               />
               
              )) : CertiContent.map(Item => (
                <IntroItem
                key={Item.id}
                id={Item.id}
                day={Item.day}
                desc={Item.desc}
                edu={Item.edu}
              />
            )) }
          </IntrolistBlock>
     );
   }
 }

  export default IntroList;