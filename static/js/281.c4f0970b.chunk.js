"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[281],{281:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var r=n(2791),a=n(9434),i=n(6907),s=n(5861),c=n(7757),o=n.n(c),l=n(9657),u=n(7840),p={display:"flex",flexDirection:"column",rowGap:"30px",marginLeft:"80px"},d={display:"flex",flexDirection:"column",rowGap:"10px",fontWeight:"500",fontSize:"20px",width:"400px"},f={height:"44px",width:"400px",fontSize:"22px",padding:"0px 10px"},x={width:"189px",padding:"5px",fontWeight:"500",fontSize:"20px"},h={fontSize:"16px",padding:"1px 15px",marginLeft:"120px",marginRight:"0"},m={fontSize:"22px",borderBottom:"2px solid white",paddingLeft:"0",paddingBottom:"5px"},y={marginLeft:"80px",paddingTop:"30px"},g={textTransform:"capitalize"},v={listStyle:"none",paddingLeft:"0px",width:"450px"},j=n(184),w=function(){var e=(0,a.I0)();return(0,j.jsxs)("label",{style:d,children:["Find contacts by name",(0,j.jsx)("input",{type:"text",name:"filter",onChange:function(t){var n=t.target.value;e((0,u.T)(n))},style:f})]})},b=function(e){var t=e.contact,n=(0,a.I0)(),r=function(){var e=(0,s.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{n((0,l.GK)(t.id)),console.log("\u0412\u0418\u0414\u0410\u041b\u0415\u041d\u041d\u042f",t,t.id)}catch(r){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430",r)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,j.jsxs)("li",{style:m,children:[(0,j.jsxs)("p",{style:g,children:[t.name," :"]}),t.number,(0,j.jsx)("button",{onClick:r,style:h,children:"Delete"})]})},k=function(){var e=(0,a.v9)((function(e){return e.contacts.items})),t=(0,a.v9)((function(e){return e.filter})),n=(0,a.I0)();(0,r.useEffect)((function(){n((0,l.yF)())}),[n]);var i=e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})),c=function(){var e=(0,s.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{n((0,l.GK)(t))}catch(r){console.log(r)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,j.jsxs)("div",{style:y,children:[(0,j.jsx)("h2",{children:"Contacts"}),(0,j.jsx)(w,{filter:t,handleChange:c}),0===i.length?(0,j.jsx)("p",{children:"The contact list will be displayed here"}):(0,j.jsx)("ul",{style:v,children:i.map((function(e){return(0,j.jsx)(b,{contact:e},e.id)}))})]})},z=function(){var e=(0,a.I0)(),t=function(){var t=(0,s.Z)(o().mark((function t(n){var r,a,i,s;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),r=n.target.elements,a=r.name,i=r.number,s={name:a.value,number:i.value};try{e((0,l.uK)(s))}catch(c){console.log(c)}a.value="",i.value="";case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,j.jsxs)("form",{onSubmit:t,style:p,children:[(0,j.jsxs)("label",{style:d,children:["Name",(0,j.jsx)("input",{style:f,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' :][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash, space, or colon. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,j.jsxs)("label",{style:d,children:["Number",(0,j.jsx)("input",{style:f,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,j.jsx)("button",{type:"submit",style:x,children:"Add contact"})]})},C=function(e){return e.contacts.loading};function L(){var e=(0,a.I0)(),t=(0,a.v9)(C);return(0,r.useEffect)((function(){e((0,l.yF)())}),[e]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(i.ql,{children:(0,j.jsx)("title",{children:"Your contacts"})}),(0,j.jsx)(z,{}),(0,j.jsx)("div",{children:t&&"Request in progress..."}),(0,j.jsx)(k,{})]})}}}]);
//# sourceMappingURL=281.c4f0970b.chunk.js.map