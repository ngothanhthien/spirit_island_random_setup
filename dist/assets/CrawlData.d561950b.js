import{f as w,w as d,o as n,c as l,g as k,v as y,a as o,h as u,F as _,b as v,t as c}from"./index.e5ed7baa.js";const g=m=>new Promise(t=>setTimeout(t,m)),x={class:"w-full md:w-1/2 lg:w-1/3 mt-2 m-auto"},V={key:0,class:"text-gray-400 text-sm"},D={key:1,class:"text-red-400"},B={class:"m-1 border inline-block"},L=["href"],S={name:"CrawlData",setup(m){const t=w({link:"",error:!1,result:"",final:[]}),p=new RegExp("(?<=boardgamegeek\\.com\\/boardgame\\/)[0-9]*");return d(()=>t.link,a=>{const r=a.match(p);r&&a!==""?(t.error=!1,t.result=r[0]):a===""?(t.error=!1,t.result=""):(t.error=!0,t.result="")}),d(()=>t.result,async a=>{if(a!==""){console.log(1);const r={game_id:a,page:1};for(;;){let e=await fetch("http://localhost:8000/php/crawl_geek.php",{method:"POST",body:JSON.stringify(r)});if(e=await e.json(),e.errors!=null){console.log(e.errors),await g(6e4);continue}if(e.items.length==0){console.log("done");break}for(let s=0;s<e.items.length;s++){const i=e.items[s].user;if(i.country=="Vietnam"){const f=e.items[s].rating,h=e.items[s].textfield.comment,b={country:i.country==""?"Kh\xF4ng r\xF5":i.country,name:i.username,comment:h.rendered,rating:f};t.final.push(b)}}await g(5e3),r.page++,console.log(r.page)}}}),(a,r)=>(n(),l("div",x,[k(o("input",{"onUpdate:modelValue":r[0]||(r[0]=e=>t.link=e),class:"mb-1 rounded-lg border-transparent appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent",placeholder:"Link game..."},null,512),[[y,t.link,void 0,{trim:!0}]]),t.link===""?(n(),l("div",V," VD: https://boardgamegeek.com/boardgame/162886/spirit-island ")):u("",!0),t.error?(n(),l("div",D,"Link kh\xF4ng h\u1EE3p l\u1EC7")):u("",!0),o("div",null,[(n(!0),l(_,null,v(t.final,e=>(n(),l("div",B,[o("div",null,c(e.country),1),o("a",{target:"_blank",class:"text-lime-500",href:"https://boardgamegeek.com/user/"+e.name},c(e.name),9,L),o("div",null,c(e.comment),1),o("div",null,c(e.rating),1)]))),256))])]))}};export{S as default};
