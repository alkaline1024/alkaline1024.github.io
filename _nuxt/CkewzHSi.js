import{D as m}from"./CZdxnch8.js";import{f,A as r,B as b,g as w,o as p,h as t,c as v,v as x,a as s,b as c,n as y,d as g,x as C}from"./LJn-TNgC.js";const k=f({__name:"Celebration",emits:["onCompleted"],setup(_,{emit:l}){const o=l,a=r();b(()=>{a.value.getDotLottieInstance().addEventListener("complete",()=>{console.log("Child completed"),o("onCompleted",!0)})});const n=["/chanawat-portfolio/lotties/celebration-01.json","/chanawat-portfolio/lotties/celebration-02.json","/chanawat-portfolio/lotties/celebration-03.json","/chanawat-portfolio/lotties/celebration-04.json"],i=n[Math.floor(Math.random()*n.length)];return(e,d)=>(p(),w(t(m),{src:t(i),loop:!1,speed:1.5,autoplay:"",class:"fixed top-0 right-0 left-0 h-screen w-screen",ref_key:"dotLottieRef",ref:a},null,8,["src"]))}}),B={class:"flex items-center gap-8 pt-12 sm:pt-48"},M={class:"space-y-12"},j={class:"flex items-center gap-8"},N=f({__name:"Home",setup(_){const l=async i=>await new Promise(e=>setTimeout(e,i)),o=r(!1),a=r(!1),n=r(!1);return b(async()=>{a.value=!0,await l(1500),a.value=!1,n.value=!0,await l(600),n.value=!1}),(i,e)=>{const d=k,u=C;return p(),v("div",B,[t(o)?(p(),w(d,{key:0,onOnCompleted:e[0]||(e[0]=h=>o.value=!1)})):x("",!0),s("div",M,[s("button",{class:y(["w-fit cursor-pointer rounded-md border-2 border-yellow-500 bg-yellow-300/5 px-4 py-1 text-xl font-medium text-yellow-500 transition-all hover:scale-115 hover:bg-yellow-400/10",{"animate-bounce":t(a),"scale-115 duration-400":t(n),"!scale-120 !bg-yellow-500 !text-white":t(o)}]),onClick:e[1]||(e[1]=h=>o.value=!0)},e[2]||(e[2]=[g(" Hello Everyone "),s("div",{class:"animate-wave-infinite drop-shadow-primary-xl"},"👋",-1)]),2),e[3]||(e[3]=s("h1",{class:"py-2 !text-6xl font-semibold"},"I'm Chanawat Thuasuphap",-1)),e[4]||(e[4]=s("h3",null," A passionate Full Stack Developer 🚀 with hands-on experience in building Web and Mobile applications using JavaScript, Nuxt, Svelte, FastAPI, Fastify, Flask, and Flutter — focused on building clean and easy-to-use applications with modern tools and frameworks. ",-1)),s("div",j,[c(u,{label:"Contact Me",href:"#contact"}),c(u,{icon:"ic:baseline-download",ui:{leadingIcon:"text-2xl"},label:"My Resume",disabled:"",class:"hover:!bg-primary-700 !bg-primary-700 opacity-90"})])]),c(t(m),{class:"aspect-square h-96 w-96 drop-shadow-[0_25px_25px_rgba(0,0,0,0.075)] dark:drop-shadow-[0_25px_25px_rgba(255,255,255,0.075)]",autoplay:"",loop:"",src:"/chanawat-portfolio/lotties/full-stack-developer.json"})])}}});export{N as default};
