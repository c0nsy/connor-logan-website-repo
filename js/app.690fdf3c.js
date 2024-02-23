(function(){"use strict";var e={232:function(e,a,t){var n=t(963),o=t(252);const i={id:"app"};function s(e,a,t,n,s,r){const c=(0,o.up)("PageShell");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(c)])}const r={class:"one"},c={class:"section-wrapper"};function l(e,a,t,n,i,s){const l=(0,o.up)("NavBar"),d=(0,o.up)("ProfileHeader"),u=(0,o.up)("AboutSection"),p=(0,o.up)("WorkSection"),v=(0,o.up)("ProjectsSection"),h=(0,o.up)("ContactSection");return(0,o.wg)(),(0,o.iD)("div",r,[(0,o.Wm)(l,{onScrollToSection:s.scrollToSection},null,8,["onScrollToSection"]),(0,o._)("div",c,[(0,o.Wm)(d,{ref:"profileSection"},null,512),(0,o.Wm)(u,{ref:"aboutSection"},null,512),(0,o.Wm)(p,{ref:"workSection"},null,512),(0,o.Wm)(v,{ref:"projectsSection"},null,512),(0,o.Wm)(h,{ref:"contactSection"},null,512)])])}const d=e=>((0,o.dD)("data-v-43473bd5"),e=e(),(0,o.Cn)(),e),u={class:"navbar"},p=d((()=>(0,o._)("span",{class:"link-number"},"01.",-1))),v=d((()=>(0,o._)("span",{class:"link-number"},"02.",-1))),h=d((()=>(0,o._)("span",{class:"link-number"},"03.",-1))),m=d((()=>(0,o._)("span",{class:"link-number"},"04.",-1))),f=d((()=>(0,o._)("a",{href:"/resources/connor_resume_swe.pdf",style:{"--link-number-color":"#71a4d6"},target:"_blank",class:"resume-button"},[(0,o._)("span",{class:"link-number"},"05."),(0,o.Uk)(" Resume ")],-1)));function g(e,a,t,n,i,s){return(0,o.wg)(),(0,o.iD)("div",u,[(0,o._)("a",{onClick:a[0]||(a[0]=a=>e.$emit("scroll-to-section","aboutSection")),style:{"--link-number-color":"#71a4d6"}},[p,(0,o.Uk)(" About ")]),(0,o._)("a",{onClick:a[1]||(a[1]=a=>e.$emit("scroll-to-section","workSection")),style:{"--link-number-color":"#71a4d6"}},[v,(0,o.Uk)(" Work ")]),(0,o._)("a",{onClick:a[2]||(a[2]=a=>e.$emit("scroll-to-section","projectsSection")),style:{"--link-number-color":"#71a4d6"}},[h,(0,o.Uk)(" Projects ")]),(0,o._)("a",{onClick:a[3]||(a[3]=a=>e.$emit("scroll-to-section","contactSection")),style:{"--link-number-color":"#71a4d6"}},[m,(0,o.Uk)(" Contact ")]),f])}var b={name:"NavBar",methods:{scrollToSection(e){const a=this.$parent.$refs[e];if(a){const e=a.$el.offsetTop;window.scrollTo({top:e,behavior:"smooth"})}}}},_=t(744);const w=(0,_.Z)(b,[["render",g],["__scopeId","data-v-43473bd5"]]);var k=w;const y={class:"profile-header-wrapper"},S=(0,o.uE)('<h1 class="header-one" data-v-d6904ec8>Hello, my name is</h1><h2 class="header-two" data-v-d6904ec8>Connor Logan.</h2><h3 class="header-three" data-v-d6904ec8>I develop solutions to your problems.</h3><p class="header-description" data-v-d6904ec8> I&#39;m a software engineer based in Toronto, Canada. I specialize in developing innovative solutions to complex problems. Currently I am focused on improving analyst workflow at <a href="https://www.morningstar.ca/ca/" class="header-link" data-v-d6904ec8>Morningstar.</a></p>',4),j=[S];function I(e,a,t,n,i,s){return(0,o.wg)(),(0,o.iD)("div",y,j)}var C={name:"ProfileHeader"};const D=(0,_.Z)(C,[["render",I],["__scopeId","data-v-d6904ec8"]]);var A=D;const x={class:"about-section-wrapper"},P=(0,o.uE)('<h1 data-v-6a7b03c6><span class="header-number" data-v-6a7b03c6>01.</span> About <hr class="section-divider" data-v-6a7b03c6></h1><div class="about-section-text" data-v-6a7b03c6><p data-v-6a7b03c6> Hey, my name is Connor, and I am passionate about creating scalable solutions for business professionals. My interest in software engineering sprouted from my highschool experience, where I discovered my love for problem solving and creating innovative products. </p><p data-v-6a7b03c6> Today, I am a software professional who has worked on numerous projects. Such as <span class="about-section-text__highlight" data-v-6a7b03c6>developing an in-house solution to replace a third party data management system</span>, <span class="about-section-text__highlight" data-v-6a7b03c6> Google Maps clone that is specific to my university</span>, <span class="about-section-text__highlight" data-v-6a7b03c6>Sentiment analysis machine learning models</span>, <span class="about-section-text__highlight" data-v-6a7b03c6>Data processing using ETLs (Extract, Transform, Load)</span>, and <span class="about-section-text__highlight" data-v-6a7b03c6>Automated Sports Arbitraging web application</span>. </p><p data-v-6a7b03c6> Here are a <span class="about-section-text__emphasis" data-v-6a7b03c6>few</span> technologies/tools I&#39;ve been working with recently: </p><div class="about-section-text__lists" data-v-6a7b03c6><ul data-v-6a7b03c6><li data-v-6a7b03c6>Python</li><li data-v-6a7b03c6>JavaScript (ES6+)</li><li data-v-6a7b03c6>Vue</li><li data-v-6a7b03c6>NextJS</li><li data-v-6a7b03c6>MySQL</li></ul><ul data-v-6a7b03c6><li data-v-6a7b03c6>AWS</li><li data-v-6a7b03c6>Git</li><li data-v-6a7b03c6>Docker</li><li data-v-6a7b03c6>Harness</li></ul></div></div>',2),W=[P];function T(e,a,t,n,i,s){return(0,o.wg)(),(0,o.iD)("div",x,W)}var O={name:"AboutSection"};const U=(0,_.Z)(O,[["render",T],["__scopeId","data-v-6a7b03c6"]]);var M=U;const E=e=>((0,o.dD)("data-v-9dba595c"),e=e(),(0,o.Cn)(),e),H={class:"work-section-wrapper"},Z=E((()=>(0,o._)("h1",null,[(0,o._)("span",{class:"header-number"},"02."),(0,o.Uk)(" Work Experience "),(0,o._)("hr",{class:"section-divider"})],-1))),L={class:"work-section-nav"};function $(e,a,t,n,i,s){const r=(0,o.up)("WorkNav");return(0,o.wg)(),(0,o.iD)("div",H,[Z,(0,o._)("div",L,[(0,o.Wm)(r)])])}var B=t(577);const q=e=>((0,o.dD)("data-v-ef45c704"),e=e(),(0,o.Cn)(),e),V={class:"nav-bar"},z={class:"nav-bar__options"},N=["onClick"],F={class:"nav-bar__list"},J={key:0},G=q((()=>(0,o._)("h2",null,[(0,o.Uk)(" Software Engineer "),(0,o._)("span",{class:"nav-bar__list-header"},"@ Morningstar")],-1))),K=q((()=>(0,o._)("p",{class:"nav-bar__list-date"},"June 2023 - Present",-1))),Q=q((()=>(0,o._)("ul",{class:"nav-bar__list-accomplishments"},[(0,o._)("li",null," Contributed Significantly to the transition from Quickbase to an in-house software solution, resulting in a cost savings of $250,000 annually for the company "),(0,o._)("li",null," Implemented robust ETL pipelines to AWS S3 buckets, optimising data collection for the anomaly detection program, a critical machine learning component of the team's project. "),(0,o._)("li",null," Successfully refactored the main routing system of the application, creating a dynamic and enduring solution that handles both authentication and entitlements-based routing. "),(0,o._)("li",null," Utilised tools and languages including Vue, Python, SQL, and AWS to develop and maintain the product (user management, feature implementation, performance monitoring, and solving support issues clients have with the application) ")],-1))),Y=[G,K,Q],R={key:1},X=q((()=>(0,o._)("h2",null,[(0,o.Uk)(" Product Manager "),(0,o._)("span",{class:"nav-bar__list-header"},"@ TD Synnex")],-1))),ee=q((()=>(0,o._)("p",{class:"nav-bar__list-date"},"April 2022 - September 2022",-1))),ae=q((()=>(0,o._)("ul",{class:"nav-bar__list-accomplishments"},[(0,o._)("li",null," Managed vendor lines for a multitude of clients (Best Buy, Staples, Walmart). "),(0,o._)("li",null," Increased multiple vendor portfolios by a minimum of 25% over two quarters "),(0,o._)("li",null," Used analysis to accurately suggest to vendors which products they should stock allowing vendors to maximise their revenue ")],-1))),te=[X,ee,ae],ne={key:2},oe=q((()=>(0,o._)("h2",null,[(0,o.Uk)(" Media Analyst "),(0,o._)("span",{class:"nav-bar__list-header"},"@ Canipre")],-1))),ie=q((()=>(0,o._)("p",{class:"nav-bar__list-date"},"September 2017 - April 2020",-1))),se=q((()=>(0,o._)("ul",{class:"nav-bar__list-accomplishments"},[(0,o._)("li",null," Participated in the enforcement of copyright laws in various countries which has led to a 40% decrease in the overall availability of pirated material. "),(0,o._)("li",null," Represented the company internationally by attending the 2018 Berlinale Film Festival, was allowed to attend due to out performing all other interns during the 2018 business cycle. "),(0,o._)("li",null," Developed a more efficient way to analyse material using personalised VBA script ")],-1))),re=[oe,ie,se],ce={key:3};function le(e,a,t,n,i,s){return(0,o.wg)(),(0,o.iD)("div",V,[(0,o._)("ul",z,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.navItems,(e=>((0,o.wg)(),(0,o.iD)("li",{key:e.id,class:(0,B.C_)({active:e.id===i.activeItemId}),onClick:a=>s.setActiveItem(e.id)},(0,B.zw)(e.name),11,N)))),128))]),(0,o._)("div",F,[1===i.activeItemId?((0,o.wg)(),(0,o.iD)("div",J,Y)):(0,o.kq)("",!0),2===i.activeItemId?((0,o.wg)(),(0,o.iD)("div",R,te)):(0,o.kq)("",!0),3===i.activeItemId?((0,o.wg)(),(0,o.iD)("div",ne,re)):(0,o.kq)("",!0),3===i.activeItemId?((0,o.wg)(),(0,o.iD)("p",ce,"Canipre: Fake description for Canipre")):(0,o.kq)("",!0)])])}var de={data(){return{navItems:[{id:1,name:"Morningstar"},{id:2,name:"TD Synnex"},{id:3,name:"Canipre"}],activeItemId:1}},methods:{setActiveItem(e){this.activeItemId=e}}};const ue=(0,_.Z)(de,[["render",le],["__scopeId","data-v-ef45c704"]]);var pe=ue,ve={name:"WorkSection",components:{WorkNav:pe}};const he=(0,_.Z)(ve,[["render",$],["__scopeId","data-v-9dba595c"]]);var me=he;const fe=e=>((0,o.dD)("data-v-270a9ae2"),e=e(),(0,o.Cn)(),e),ge={class:"projects-section-wrapper"},be=fe((()=>(0,o._)("h1",null,[(0,o._)("span",{class:"header-number"},"03."),(0,o.Uk)(" Projects "),(0,o._)("hr",{class:"section-divider"})],-1))),_e={class:"project-cards"};function we(e,a,t,n,i,s){const r=(0,o.up)("ProjectCards");return(0,o.wg)(),(0,o.iD)("div",ge,[be,(0,o._)("div",_e,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.projects,((e,a)=>((0,o.wg)(),(0,o.j4)(r,{key:a,project:e},null,8,["project"])))),128))])])}const ke=e=>((0,o.dD)("data-v-4fad9d96"),e=e(),(0,o.Cn)(),e),ye={class:"project-cards-wrapper"},Se=ke((()=>(0,o._)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 250 24","stroke-width":"1",stroke:"#71a4d6",class:"w-1 h-1"},[(0,o._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"})],-1))),je={class:"project-cards-title"},Ie={class:"project-cards-description"};function Ce(e,a,t,n,i,s){return(0,o.wg)(),(0,o.iD)("div",ye,[Se,(0,o._)("h1",je,(0,B.zw)(t.project.title),1),(0,o._)("p",Ie,(0,B.zw)(t.project.description),1),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.project.languages,((e,a)=>((0,o.wg)(),(0,o.iD)("p",{key:"language-"+a,class:"project-cards-languages"},(0,B.zw)(e),1)))),128))])}var De={name:"ProjectCards",props:{project:{type:Object,required:!0}}};const Ae=(0,_.Z)(De,[["render",Ce],["__scopeId","data-v-4fad9d96"]]);var xe=Ae,Pe={projects:[{title:"Tzarbing",description:"Web application for client management and automation of SportsArbing.",languages:["Vue","Python","C++"]},{title:"Google Maps For Laurier",description:"A program that shows you the quickest route from your current location to any building at Wilfrid Laurier University.",languages:["JavaScript","Python","C++"]},{title:"Invoice Auotmation",description:"Client side software that would take in data, generate an invoice, and send it to the client.",languages:["C++","VBA"]}]},We={name:"ProjectsSection",components:{ProjectCards:xe},data(){return{projects:Pe.projects}}};const Te=(0,_.Z)(We,[["render",we],["__scopeId","data-v-270a9ae2"]]);var Oe=Te;const Ue={class:"contact-section-wrapper"},Me=(0,o.uE)('<h1 data-v-355cf228><span class="header-number" data-v-355cf228>04.</span> Contact <hr class="section-divider" data-v-355cf228></h1><h1 class="center-text" data-v-355cf228>Message me!</h1><h2 class="contact-text" data-v-355cf228><a href="https://www.linkedin.com/in/connorlogancs/" class="linkedin-link" data-v-355cf228>Linkedin </a>is the best way to contact me. Would be happy to discuss any ongoing projects, future opportunities, or even a simple hi :) </h2>',3),Ee=[Me];function He(e,a,t,n,i,s){return(0,o.wg)(),(0,o.iD)("div",Ue,Ee)}var Ze={name:"ContactSection"};const Le=(0,_.Z)(Ze,[["render",He],["__scopeId","data-v-355cf228"]]);var $e=Le,Be={name:"PageShell",components:{NavBar:k,ProfileHeader:A,AboutSection:M,WorkSection:me,ProjectsSection:Oe,ContactSection:$e},methods:{scrollToSection(e){const a=this.$refs[e];if(a){const e=a.$el.offsetTop;window.scrollTo({top:e,behavior:"smooth"})}}}};const qe=(0,_.Z)(Be,[["render",l],["__scopeId","data-v-093e70d1"]]);var Ve=qe,ze={name:"App",components:{PageShell:Ve},mounted(){document.title="Connor Logan | SWE"}};const Ne=(0,_.Z)(ze,[["render",s]]);var Fe=Ne,Je=t(201);const Ge=[{path:"/",redirect:"/home"}];function Ke(){return(0,Je.p7)({history:(0,Je.PO)(""),routes:Ge})}var Qe=Ke;const Ye=(0,n.ri)(Fe),Re=Qe();Ye.use(Re),Ye.mount("#app")}},a={};function t(n){var o=a[n];if(void 0!==o)return o.exports;var i=a[n]={exports:{}};return e[n](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(a,n,o,i){if(!n){var s=1/0;for(d=0;d<e.length;d++){n=e[d][0],o=e[d][1],i=e[d][2];for(var r=!0,c=0;c<n.length;c++)(!1&i||s>=i)&&Object.keys(t.O).every((function(e){return t.O[e](n[c])}))?n.splice(c--,1):(r=!1,i<s&&(s=i));if(r){e.splice(d--,1);var l=o();void 0!==l&&(a=l)}}return a}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,o,i]}}(),function(){t.d=function(e,a){for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,n){var o,i,s=n[0],r=n[1],c=n[2],l=0;if(s.some((function(a){return 0!==e[a]}))){for(o in r)t.o(r,o)&&(t.m[o]=r[o]);if(c)var d=c(t)}for(a&&a(n);l<s.length;l++)i=s[l],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(d)},n=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(232)}));n=t.O(n)})();