(this.webpackJsonpmyhomepage=this.webpackJsonpmyhomepage||[]).push([[0],{18:function(e,n,t){},27:function(e,n,t){},40:function(e,n,t){},44:function(e,n,t){},45:function(e,n,t){},46:function(e,n,t){},47:function(e,n,t){},48:function(e,n,t){},53:function(e,n,t){"use strict";t.r(n);var i,o,c,a=t(2),r=t(28),s=t.n(r),l=(t(40),t(3)),d=t(10),h=t(4),b=t(12),j=t(13),u=t(15),g=t(14),m=(t(18),t(1)),v=h.b.div(i||(i=Object(l.a)(["\n    position: absolute;\n    left: 1.5vw;\n    width: 4vw;\n    height: 4vh;\n    color: black;\n    font-size: 8vh;\n    text-align: center;\n    &:hover {\n      color: ",";\n    }\n"])),(function(e){return e.color})),O=h.b.div(o||(o=Object(l.a)(["\n    position: absolute;\n    top: 7vh;\n    width: 100%;\n    height: 2vh;\n    border-radius: 1vw;\n    background-color: ",";\n    z-index:2;\n    width: ","%;\n"])),(function(e){return e.color}),(function(e){return e.gaugePro})),x=h.b.div(c||(c=Object(l.a)(["\n    position: absolute;\n    top: 7vh;\n    width: 100%;\n    height: 2vh;\n    border-radius: 1vw;\n    z-index:1;\n    background-color: #c4c4c4;\n"])));var f,p,w,y,k,C,T,S,D=function(e){e.id,e.select;var n=e.img,t=e.name,i=e.gauge,o=e.color;return Object(m.jsxs)("div",{className:"SkillItem",children:[Object(m.jsx)(v,{color:o,children:n}),Object(m.jsxs)("div",{className:"SkillItem_collect",children:[Object(m.jsx)("div",{className:"SkillItem_name",children:t}),Object(m.jsxs)("div",{className:"SkillItem_pro",children:[i,"%"]}),Object(m.jsx)(O,{gaugePro:i,color:o}),Object(m.jsx)(x,{})]})]})},F=t(34),N=t(11),I=t(22),L=t(32),E=t(33),P=[{id:1,select:"DevLanguage",img:Object(m.jsx)(N.f,{}),name:"JAVA",gauge:65},{id:2,select:"DevLanguage",img:Object(m.jsx)(N.g,{}),name:"JavaScript",gauge:65},{id:3,select:"DevLanguage",img:Object(m.jsx)(N.c,{}),name:"HTML / css",gauge:80},{id:4,select:"DevLanguage",img:Object(m.jsx)(I.b,{}),name:"SQL",gauge:70},{id:5,select:"DevLanguage",img:Object(m.jsx)(N.j,{}),name:"React",gauge:40},{id:6,select:"DesignTool",img:Object(m.jsx)(N.b,{}),name:"Photoshop",gauge:85},{id:7,select:"DesignTool",img:Object(m.jsx)(N.a,{}),name:"Illustrator",gauge:60},{id:8,select:"DesignTool",img:Object(m.jsx)(L.a,{}),name:"Zeppelin",gauge:85},{id:9,select:"DesignTool",img:Object(m.jsx)(E.a,{}),name:"Figma",gauge:75},{id:10,select:"DevTool",img:Object(m.jsx)(F.a,{}),name:"Android Studio",gauge:85},{id:11,select:"DevTool",img:Object(m.jsx)(N.d,{}),name:"Eclipse",gauge:60},{id:12,select:"DevTool",img:Object(m.jsx)(I.a,{}),name:"git (github)",gauge:60},{id:13,select:"DevTool",img:Object(m.jsx)(N.k,{}),name:"VSCode",gauge:50},{id:14,select:"DevServer",img:Object(m.jsx)(N.h,{}),name:"Linux / Fedora24",gauge:65},{id:15,select:"DevServer",img:Object(m.jsx)(N.i,{}),name:"phpmyadmin",gauge:70},{id:16,select:"DevServer",img:Object(m.jsx)(N.e,{}),name:"Firebase",gauge:30}],_=h.b.div(f||(f=Object(l.a)(["\n    position: absolute;\n    width: 80%;\n    height: 40vh;\n    bottom : 4vh;\n    float: left;\n    display: grid;\n    left: 50%;\n    grid-column-gap: 30px;\n    transform: translateX(-50%);\n    grid-template-columns:  1fr 1fr;\n"]))),z=function(e){Object(u.a)(t,e);var n=Object(g.a)(t);function t(){return Object(b.a)(this,t),n.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){var e=this.props,n=e.select,t=e.color,i=P.filter((function(e){return"DevLanguage"===e.select})),o=P.filter((function(e){return"DesignTool"===e.select})),c=P.filter((function(e){return"DevTool"===e.select})),a=P.filter((function(e){return"DevServer"===e.select}));return Object(m.jsx)(_,{children:{DevLanguage:i.map((function(e){return Object(m.jsx)(D,{id:e.id,select:e.select,img:e.img,name:e.name,gauge:e.gauge,color:t},e.id)})),DesignTool:o.map((function(e){return Object(m.jsx)(D,{id:e.id,select:e.select,img:e.img,name:e.name,gauge:e.gauge,color:t},e.id)})),DevTool:c.map((function(e){return Object(m.jsx)(D,{id:e.id,select:e.select,img:e.img,name:e.name,gauge:e.gauge,color:t},e.id)})),DevServer:a.map((function(e){return Object(m.jsx)(D,{id:e.id,select:e.select,img:e.img,name:e.name,gauge:e.gauge,color:t},e.id)}))}[n]})}}]),t}(a.Component),B=z,R=(t(44),h.b.div(p||(p=Object(l.a)(["\n      position: absolute;\n      width:100vw;\n      height: 100vh;\n      bottom:0;\n      background: #4BA4F2;\n"])))),A=h.b.text(w||(w=Object(l.a)(["\n      position: absolute;\n      width: auto;\n      height: 10vh;\n      right:15.5vw;\n      Bottom:73vh;\n      font-family: Righteous;\n      font-style: normal;\n      font-weight: normal;\n      font-size: 8vh;\n      line-height: 8vh;\n      color: #FFFFFF;\n      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n\n"]))),J=h.b.text(y||(y=Object(l.a)(["\n    position: absolute;\n    width: 45vw;\n    height: 0.4vh;\n    right:15.5vw;\n    Bottom:73.5vh;\n    background: #FFFFFF;\n    border: none;\n"]))),X=h.b.div(k||(k=Object(l.a)(["\n      position: absolute;\n      width: 70vw;\n      height: 62vh;\n      left: 50%;\n      transform: translateX(-50%);\n      bottom:10vh;\n      background: white;\n      box-sizing: border-box;\n      box-shadow: 1px 5px 4px rgba(0, 0, 0, 0.25);\n      border-radius: 1vw;\n      overflow: hidden;\n"]))),K=h.b.text(C||(C=Object(l.a)(["\n    position: absolute;\n    width: 70vw;\n    height: 10vh;\n    text-align: center;\n    font-family: Righteous;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 5vh;\n    line-height: 10vh;\n    left: 0;\n    color: #7A64FF;\n    top: 0;\n    background: #FFFFFF;\n    box-sizing: border-box;\n    box-shadow: 1px 5px 4px rgba(0, 0, 0, 0.25);\n    border-radius: 1vw;\n    color: ",";\n"])),(function(e){return e.color})),H=h.b.button(T||(T=Object(l.a)(["\n    width: 1vw;\n    height: 1vw;\n    border: none;\n    border-radius: 1vw;\n    background:white;\n\n    ","\n    }\n\n    & + & {\n      margin-left: 3vw;\n    }\n\n    &:hover {\n      "," {\n            background-color: #C4C4C4;\n          }\n      background-color: #C4C4C4;\n    }\n\n"])),(function(e){return e.incheck&&Object(h.a)(S||(S=Object(l.a)(["\n           background-color: #C4C4C4;\n      "])))}),(function(e){return e.incheck}));var M=function(){var e=Object(a.useState)("#7A64FF"),n=Object(d.a)(e,2),t=n[0],i=n[1],o=Object(a.useState)("Dev language"),c=Object(d.a)(o,2),r=c[0],s=c[1],l=Object(a.useState)("DevLanguage"),h=Object(d.a)(l,2),b=h[0],j=h[1],u=Object(a.useState)(!0),g=Object(d.a)(u,2),v=g[0],O=g[1],x=Object(a.useState)(!1),f=Object(d.a)(x,2),p=f[0],w=f[1],y=Object(a.useState)(!1),k=Object(d.a)(y,2),C=k[0],T=k[1],S=Object(a.useState)(!1),D=Object(d.a)(S,2),F=D[0],N=D[1];return Object(m.jsxs)(R,{children:[Object(m.jsx)(A,{children:"TOOL / Language SKILL"}),Object(m.jsx)(J,{}),Object(m.jsxs)(X,{children:[Object(m.jsxs)(K,{color:t,children:[" ",r," "]}),Object(m.jsx)(B,{color:t,select:b})]}),Object(m.jsxs)("div",{className:"SkillButton_div",children:[Object(m.jsx)(H,{className:"SkillButton",onClick:function(){i("#7A64FF"),s("Dev Language"),j("DevLanguage"),O(!0),w(!1),T(!1),N(!1)},incheck:v}),Object(m.jsx)(H,{className:"SkillButton",onClick:function(){i("#1166FF"),s("Design tool"),j("DesignTool"),O(!1),w(!0),T(!1),N(!1)},incheck:p}),Object(m.jsx)(H,{className:"SkillButton",onClick:function(){i("#2EBBA2"),s("Dev Tool"),j("DevTool"),O(!1),w(!1),T(!0),N(!1)},incheck:C}),Object(m.jsx)(H,{className:"SkillButton",onClick:function(){i("#E99C2E"),s("Dev Server"),j("DevServer"),O(!1),w(!1),T(!1),N(!0)},incheck:F})]})]})};t(45);var Q,V,G,Y,Z,q,U,W,$,ee,ne,te,ie,oe=function(e){e.id;var n=e.img,t=e.alt,i=e.day,o=e.desc;return e.select,Object(m.jsxs)("div",{className:"ProjectItem",children:[Object(m.jsx)("img",{className:"ProjectItem_img",alt:t,src:"/myhome"+n}),Object(m.jsx)("div",{className:"ProjectItem_day",children:i}),Object(m.jsx)("div",{className:"ProjectItem_content",children:o})]})},ce=[{id:1,img:"/assets/man_clothes.jpg",alt:"\ub0a8\uc131 \uc758\ub958 \uc1fc\ud551\ubab0",day:"2019.03 - 2019.06",desc:"\ub0a8\uc131 \uc758\ub958 \uc1fc\ud551\ubab0 \ubd84\uc11d, \uacc4\ud68d, DB\uad6c\uc131",select:"team"},{id:2,img:"/assets/dongne.png",alt:"\uc6b0\ub9ac\ub9c8\ud2b8\ub2e4\ubaa8\uc5ec",day:"2019.09 - 2019.12",desc:"\uc6b0\ub9ac\ub9c8\ud2b8\ub2e4\ubaa8\uc5ec / \uc9d1 \uc8fc\ubcc0 \ub3d9\ub124\ub9c8\ud2b8 \uac80\uc0c9, \uc870\ud68c, \ubc30\ub2ec \uc571",select:"team"},{id:3,img:"/assets/themodel.png",alt:"the model",day:"2020.09 - 2020.12",desc:"the model / \ubaa8\ub378 \uad6c\uc778\uad6c\uc9c1 \uc5b4\ud50c ",select:"team"},{id:4,img:"/assets/shingu.png",alt:"\uc2e0\uad6c\ub300 \uc11c\uc810 \uc5b4\ud50c",day:"2020.03 - 2020.06",desc:"\uc2e0\uad6c\ub300 \uc11c\uc810 \uc5b4\ud50c / \uae30\ud68d\uc11c ",select:"personal"},{id:5,img:"/assets/sidedish.png",alt:"side dish",day:"2020.09 - 2020.12",desc:"\ubc18\ucc2c\uac00\uac8c \ubc30\ub2ec \uc5b4\ud50c side dish / \uae30\ud68d\uc11c ",select:"personal"},{id:6,img:"/assets/todo_list.png",alt:"to_do list",day:"2021.10 - 2021.11",desc:"to_do list / react",select:"personal"}],ae=h.b.div(Q||(Q=Object(l.a)(["\n    width: 100%;\n    height: 100%;\n    float: left;\n    display: grid;\n    z-index: 1;\n    grid-template-columns: 1fr 1fr;\n    margin-top: 20px;\n    margin-bottom: 20px;\n"]))),re=function(e){Object(u.a)(t,e);var n=Object(g.a)(t);function t(){return Object(b.a)(this,t),n.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){var e=this.props.select,n=ce.filter((function(e){return"personal"===e.select})),t=ce.filter((function(e){return"team"===e.select}));return Object(m.jsx)(ae,{children:{team:t.map((function(e){return Object(m.jsx)(oe,{id:e.id,img:e.img,alt:e.alt,day:e.day,desc:e.desc,select:e.select},e.id)})),personal:n.map((function(e){return Object(m.jsx)(oe,{id:e.id,img:e.img,alt:e.alt,day:e.day,desc:e.desc,select:e.select},e.id)}))}[e]})}}]),t}(a.Component),se=re,le=h.b.div(V||(V=Object(l.a)(["\n    position: absolute;\n    left:0;\n    width: 100%;\n    height:100%;\n    overflow-y: scroll;\n    overflow-x: hidden;\n    &::-webkit-scrollbar {\n      width: 0.8vw;\n    }\n    &::-webkit-scrollbar-thumb {\n      height: 15%;\n      background-color: #a4b3be;\n      border-radius: 5px;  \n    }\n"]))),de=h.b.div(G||(G=Object(l.a)(["\nposition: absolute;\nwidth: 80%;\nheight:100%;\nleft: 50%;\ntransform: translateX(-50%);\n"]))),he=h.b.text(Y||(Y=Object(l.a)(["\nposition: absolute;\nwidth: auto;\nheight: auto;\nright: 0;\ntop:12vh;\nfont-family: Righteous;\nfont-style: normal;\nfont-weight: normal;\nfont-size: 8vh;\nline-height: 8vh;\n/* identical to box height */\ncolor: #000000;\n"]))),be=h.b.text(Z||(Z=Object(l.a)(["\nposition: relative;\nwidth: 100%;\nheight: auto;\nleft:5%;\nfont-family: 'Noto Sans KR';\nfont-style: normal;\nfont-weight: normal;\nfont-size: 2.5vh;\ntext-align: left;\ncolor: #000000;\n"]))),je=h.b.hr(q||(q=Object(l.a)(["\nposition: absolute;\nwidth: 50vw;\nheight: 3px;\nright:-10px;\ntop:21vh;\nbackground:#E1E1E1;\nborder: none;\n"]))),ue=h.b.hr(U||(U=Object(l.a)(["\nposition: relative;\nwidth: 90%;\nheight: 2px;\nbackground:#E1E1E1;\nborder: none;\nleft: 47%;\ntransform: translateX(-50%);\n"]))),ge=h.b.div(W||(W=Object(l.a)(["\nposition: relative;\nwidth: 85%;\nheight:auto;\nleft: 50%;\ntransform: translateX(-50%);\n"]))),me=h.b.div($||($=Object(l.a)(["\nposition: relative;\nwidth: 85%;\nheight:auto;\npadding-top:50px;\npadding-bottom:30px;\nleft: 50%;\ntransform: translateX(-50%);\n"]))),ve=h.b.div(ee||(ee=Object(l.a)(["\nposition: absolute;\nwidth: 140vw;\nheight:30vh;\nleft:-50%;\nbottom:0;\nbackground: linear-gradient(0deg, rgba(73, 73, 73, 0.08) 17.28%,\nrgba(181, 181, 181, 0.06) 54.77%, rgba(255, 255, 255, 0) 83.18%);\n"]))),Oe=function(e){Object(u.a)(t,e);var n=Object(g.a)(t);function t(){return Object(b.a)(this,t),n.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(le,{children:Object(m.jsxs)(de,{children:[Object(m.jsxs)("div",{className:"ProjectTopDiv",children:[Object(m.jsx)(he,{children:"Project"}),Object(m.jsx)(je,{})]}),Object(m.jsxs)(ge,{children:[Object(m.jsx)("div",{className:"ProjectHeaderText",children:"Team project"}),Object(m.jsx)(be,{children:"\ub300\ud559\uad50 \uc218\uc5c5\uc744 \ub4e4\uc73c\uba70 \uc9c4\ud589 \ud588\ub358 \ud504\ub85c\uc81d\ud2b8\ub4e4 \uc785\ub2c8\ub2e4."}),Object(m.jsx)(se,{select:"team"}),Object(m.jsx)("div",{className:"ProjectLinkText",onClick:function(){return window.open("https://github.com/LATIsi/team_project","_blank")},children:"team pj ReadME PPT file download - github"})]}),Object(m.jsx)(ue,{}),Object(m.jsxs)(me,{children:[Object(m.jsx)("div",{className:"ProjectHeaderText",children:"personal project"}),Object(m.jsx)(se,{select:"personal"}),Object(m.jsx)("div",{className:"ProjectLinkText",onClick:function(){return window.open("https://github.com/LATIsi/personal_project","_blank")},children:"personal pj PPT file download - github"}),Object(m.jsx)(ve,{})]})]})})})}}]),t}(a.Component),xe=Oe,fe=(t(46),h.b.div(ne||(ne=Object(l.a)(["\n      position: absolute;\n      width:60vw;\n      height: 100vh;\n      left:38vw;\n      bottom:0;\n      background: rgba(0, 0, 0, 0.8);\n"])))),pe=h.b.div(te||(te=Object(l.a)(["\n      position: absolute;\n      font-family: Righteous;\n      font-style: normal;\n      top:38vh;\n      left:45vw;\n      font-weight: normal;\n      font-size: 11vh;\n      line-height: 11vh;\n      color:white;\n"]))),we=h.b.div(ie||(ie=Object(l.a)(["\n      position: absolute;\n      top:52vh;\n      left:45vw;\n      font-family: NATS;\n      font-style: normal;\n      font-weight: normal;\n      font-size: 8vh;\n      line-height: 8vh;\n      color:white;\n"]))),ye=function(e){Object(u.a)(t,e);var n=Object(g.a)(t);function t(){return Object(b.a)(this,t),n.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return console.log("Home render"),Object(m.jsxs)("div",{className:"Homeimg",children:[Object(m.jsx)(fe,{}),Object(m.jsx)(pe,{children:"MJ_Portfolio"}),Object(m.jsx)("hr",{className:"home_line"}),Object(m.jsx)(we,{children:"welcome to my portfolio!"})]})}}]),t}(a.Component),ke=ye;t(27),t(47);var Ce,Te,Se,De,Fe,Ne,Ie,Le,Ee,Pe,_e,ze,Be,Re,Ae=function(e){e.id;var n=e.day,t=e.desc;return e.edu,Object(m.jsxs)("div",{className:"IntroItem",children:[Object(m.jsx)("div",{className:"IntroItem_day",children:n}),Object(m.jsx)("div",{className:"IntroItem_content",children:t})]})},Je=[{id:1,day:"2018.03",desc:"\uc131\ubcf4\uacbd\uc601\uace0\ub4f1\ud559\uad50 \uae30\uc5c5\ud64d\ubcf4\ub514\uc790\uc778\uacfc \uc878\uc5c5 \n \uc2e0\uad6c\ub300\ud559\uad50 \ubaa8\ubc14\uc77ci\ud559\uacfc \uc785\ud559",edu:"Edu"},{id:2,day:"2021.03",desc:"\uc2e0\uad6c\ub300\ud559\uad50 \ubaa8\ubc14\uc77cIT\ud559\uacfc 3\ub144 \uc774\uc218\ub4a4 \uc218\uc11d \uc878\uc5c5 \n *\uacfc \ud1b5\ud569\uc73c\ub85c \ud604\uc7ac \uc18c\ud504\ud2b8\uc6e8\uc5b4\ud559\uacfc\ub85c \ubcc0\ub3d9",edu:"Edu"},{id:3,day:"2021.10 - now",desc:"react / JS \ucc45\uc744 \ud65c\uc6a9\ud574 \ud074\ub860 \ucf54\ub529, \n \uac04\ub2e8\ud55c TOY \ud504\ub85c\uc81d\ud2b8\ub97c \ud558\uba70 \uac1c\uc120\uc810\uc744 \ucc3e\uc544\uac00\ub294 \uc911  ",edu:"Edu"},{id:4,day:"2021.12-",desc:"\ud504\ub85c\uc81d\ud2b8 \uc9c4\ud589\uc911 ",edu:"Edu"},{id:5,day:"2015.07",desc:"\ucef4\ud4e8\ud130 \ud65c\uc6a9\ub2a5\ub825(2\uae09)",edu:"Certi"},{id:6,day:"2015.08 - 2016.01",desc:"ITQ \ud55c\uae00, \uc5d1\uc140, PPT",edu:"Certi"},{id:7,day:"2016.02",desc:"GTQ 1\uae09",edu:"Certi"},{id:8,day:"2017.07",desc:"\ucef4\ud4e8\ud130\uadf8\ub798\ud53d\uc2a4\uc6b4\uc6a9\uae30\ub2a5\uc0ac",edu:"Certi"},{id:9,day:"2017.12",desc:"\uc804\uc790\uc0c1\uac70\ub798\uc6b4\uc6a9\uc0ac",edu:"Certi"},{id:10,day:"2021.06",desc:"\uc815\ubcf4\ucc98\ub9ac\uc0b0\uc5c5\uae30\uc0ac",edu:"Certi"}],Xe=h.b.div(Ce||(Ce=Object(l.a)(["\n    width: 100%;\n    height: 65vh;\n    left: 10%;\n    flex: 1;\n    overflow-y: auto;\n    overflow: scroll;\n    overflow-x:hidden; \n    &::-webkit-scrollbar {\n      width: 0.8vw;\n    }\n    &::-webkit-scrollbar-thumb {\n      height: 15%;\n      background-color: #a4b3be;\n      border-radius: 5px;  \n    }\n"]))),Ke=function(e){Object(u.a)(t,e);var n=Object(g.a)(t);function t(){return Object(b.a)(this,t),n.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){var e=this.props.select,n=Je.filter((function(e){return"Edu"===e.edu})),t=Je.filter((function(e){return"Certi"===e.edu}));return Object(m.jsx)(Xe,{children:"Edu"===e?n.map((function(e){return Object(m.jsx)(Ae,{id:e.id,day:e.day,desc:e.desc,edu:e.edu},e.id)})):t.map((function(e){return Object(m.jsx)(Ae,{id:e.id,day:e.day,desc:e.desc,edu:e.edu},e.id)}))})}}]),t}(a.Component),He=Ke,Me=h.b.div(Te||(Te=Object(l.a)(["\n  width: 65vw;\n  height: 100vh;\n  position: absolute;\n  background: #0468bf;\n"]))),Qe=h.b.div(Se||(Se=Object(l.a)(["\n  width: 35vw;\n  height: 100vh;\n  position: absolute;\n  right: 0;\n  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.4);\n  background: #f2f2f2;\n"]))),Ve=h.b.div(De||(De=Object(l.a)(["\n  width: 17vw;\n  height: 18vh;\n  position: absolute;\n  right: 16vw;\n  top: 15%;\n"]))),Ge=h.b.div(Fe||(Fe=Object(l.a)(["\n  width: 28vw;\n  height: 30vh;\n  position: absolute;\n  right: 10%;\n  top: 48%;\n"]))),Ye=h.b.text(Ne||(Ne=Object(l.a)(["\n  position: absolute;\n  width: 20vw;\n  height: auto;\n  right: 0;\n  top: 1vh;\n\n  font-family: Righteous;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 8vh;\n  line-height: 8vh;\n  text-align: right;\n  color: #000000;\n"]))),Ze=h.b.text(Ie||(Ie=Object(l.a)(["\n  position: absolute;\n  width: auto;\n  height: auto;\n  right: 0;\n  top: 10vh;\n  font-family: Noto Sans KR;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 3vh;\n  line-height: 3vh;\n  text-align: right;\n  color: #000000;\n"]))),qe=h.b.hr(Le||(Le=Object(l.a)(["\n  position: absolute;\n  width: 28vw;\n  height: 0.3vh;\n  right: 10%;\n  top: 43vh;\n  background: #C8C8C8;\n  border: none;\n"]))),Ue=h.b.text(Ee||(Ee=Object(l.a)(["\n  position: absolute;\n  width: 28vw;\n  height: 48px;\n  right: 0;\n  top: 0;\n  white-space: pre-wrap;\n  font-family: Noto Sans KR, sans-serif;\n  font-style: 300;\n  font-weight: bord;\n  font-size: 2.5vh;\n  line-height: 3vh;\n  /* or 133% */\n  text-align: right;\n  color: #223440;\n"]))),We=h.b.div(Pe||(Pe=Object(l.a)(["\n  position: absolute;\n  width: 51vw;\n  height: 65vh;\n  left:50%;\n  transform: translateX(-50%);\n  top: 16vh;\n  background: #f2f2f2;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n"]))),$e=h.b.button(_e||(_e=Object(l.a)(['\n    position: absolute;\n    top: 8vh;\n    width: 10vw;\n    height: 15vh;\n    \n    left:18.5%;\n    font-size: 2.5vh;\n    transform: translateX(-50%);\n    border: none;\n    padding-bottom: 8vh;\n    font-family: "Noto Sans KR";\n    border-radius: 1.3vw;\n\n    & + Button {\n      margin-left:10vw;\n    }\n\n    &:hover {\n      background-color:  #223440;\n      color: #f2f2f2;\n    }\n    \n    ',"\n    }\n\n"])),(function(e){return e.oncolor&&Object(h.a)(ze||(ze=Object(l.a)(["\n           background-color: #E4E4E4;\n           color:#929292;\n      "])))})),en=h.b.div(Be||(Be=Object(l.a)(["\n  position: absolute;\n  width: 2vh;\n  height: 1vh;\n  right: 1vw;\n  bottom: 2vh;\n  text-align: right;\n  display: inline;\n"]))),nn=h.b.div(Re||(Re=Object(l.a)(["\n  position: absolute;\n  width: 100%;\n  height: auto;\n  right: 0;\n  bottom: 0;\n  text-align: right;\n  display: inline;\n"])));var tn,on=function(){var e=Object(a.useState)("Edu"),n=Object(d.a)(e,2),t=n[0],i=n[1],o=Object(a.useState)(!1),c=Object(d.a)(o,2),r=c[0],s=c[1],l=Object(a.useState)(!0),h=Object(d.a)(l,2),b=h[0],j=h[1];return Object(m.jsxs)("div",{className:"IntroBg",children:[Object(m.jsxs)(Me,{children:[Object(m.jsx)($e,{selection:"Edu",oncolor:r,change1:!0,onClick:function(){i("Edu"),s(!1),j(!0)},children:"\ud559\ub825"}),Object(m.jsx)($e,{selection:"Certi",oncolor:b,change2:!0,onClick:function(){i("Certi"),s(!0),j(!1)},children:"\uc790\uaca9\uc99d"}),Object(m.jsx)(We,{children:Object(m.jsx)(nn,{selection:t,children:Object(m.jsx)(He,{select:t})})})]}),Object(m.jsxs)(Qe,{children:[Object(m.jsxs)(Ve,{children:[Object(m.jsx)(Ye,{children:"Kim minji"}),Object(m.jsx)(Ze,{children:"1999.11.01"}),Object(m.jsx)(en,{children:Object(m.jsx)("a",{href:"https://github.com/LATIsi",target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)(I.a,{size:"30"})})})]}),Object(m.jsx)("div",{className:"intro_Picture"}),Object(m.jsx)(qe,{}),Object(m.jsx)(Ge,{children:Object(m.jsx)(Ue,{children:"\ub514\uc790\uc778/\uadf8\ub9bc\uc774 \ucde8\ubbf8\uc778 \n \uac1c\ubc1c\uc5d0 \uad00\uc2ec\uc774 \ub9ce\uc740 \uc2e0\uc785 \uac1c\ubc1c\uc790\uc785\ub2c8\ub2e4!!"})})]})]})},cn=(t(48),t(16)),an=t(5),rn=h.b.div(tn||(tn=Object(l.a)(["\noverflow-y:auto;\noverflow-x:hidden;\nheight: 100%;\nwidth: 100%;\n"])));var sn=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(cn.a,{children:[Object(m.jsxs)("nav",{className:"navbar",children:[Object(m.jsx)("div",{className:"nav_Text",children:"MINJI's PORTFOLIO"}),Object(m.jsx)("div",{className:"nav_menu",children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)(cn.b,{to:"/myhome/project",children:"PROJECT"})}),Object(m.jsx)("li",{children:Object(m.jsx)(cn.b,{to:"/myhome/skill",children:"SKILL"})}),Object(m.jsx)("li",{children:Object(m.jsx)(cn.b,{to:"/myhome/intro",children:"INTRO"})}),Object(m.jsx)("li",{children:Object(m.jsx)(cn.b,{to:"/myhome/home",children:"HOME"})})]})})]}),Object(m.jsx)(rn,{children:Object(m.jsxs)(an.c,{children:[Object(m.jsx)(an.a,{path:"/myhome/home",exact:!0,children:Object(m.jsx)(ke,{children:"home"})}),Object(m.jsx)(an.a,{path:"/myhome/intro",children:Object(m.jsx)(on,{children:"intro"})}),Object(m.jsx)(an.a,{path:"/myhome/skill",children:Object(m.jsx)(M,{children:"skill"})}),Object(m.jsx)(an.a,{path:"/myhome/project",children:Object(m.jsx)(xe,{children:"project"})}),Object(m.jsx)(an.a,{path:"/myhome/",children:Object(m.jsx)(ke,{children:"home"})})]})})]})})},ln=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,55)).then((function(n){var t=n.getCLS,i=n.getFID,o=n.getFCP,c=n.getLCP,a=n.getTTFB;t(e),i(e),o(e),c(e),a(e)}))};s.a.render(Object(m.jsx)(cn.a,{children:Object(m.jsx)(an.a,{children:Object(m.jsx)(sn,{})})}),document.getElementById("root")),ln()}},[[53,1,2]]]);
//# sourceMappingURL=main.f1c7ec60.chunk.js.map