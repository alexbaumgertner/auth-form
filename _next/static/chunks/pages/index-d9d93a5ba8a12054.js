(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3958:function(t,r,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(8929)}])},1724:function(t,r,e){"use strict";e.d(r,{IU:function(){return s},mc:function(){return a},x4:function(){return n}});let n=async t=>{try{let r=await fetch("/api/auth/signin",{method:"post",body:JSON.stringify(t)});if(200===r.status)return r.json();return{error:"Error in login"}}catch(t){return t}},s=async t=>{try{let r=await fetch("/api/auth/signup",{method:"post",body:JSON.stringify(t)});if(200===r.status)return r.json();return{error:"Error in signup"}}catch(t){return t}},a=async t=>{try{let r=await fetch("/api/auth/reset",{method:"post",body:JSON.stringify(t)});if(200===r.status)return r.json();return{error:"Error in reset"}}catch(t){return t}}},8929:function(t,r,e){"use strict";e.r(r);var n=e(1527),s=e(959),a=e(9447),i=e(1724),o=e(2082),u=e.n(o);let c=()=>{let[t,r]=(0,s.useState)("default"),[e,o]=(0,s.useState)({email:"",password:""}),[c,f]=(0,s.useState)(void 0);return(0,s.useEffect)(()=>{(async function(){if(e.email&&e.password){r("loading");try{let t=await (0,i.x4)(e);f(t)}catch(t){console.error(t),r("error")}finally{r("default")}}})()},[e]),(0,n.jsxs)("div",{className:u().page,children:[(0,n.jsx)(a.U0,{state:t,onSubmit:t=>{console.log(t),o(t)},className:u().form}),(0,n.jsx)(a.vM,{logData:c})]})};r.default=c},2082:function(t){t.exports={page:"index_page__Goa_Q",form:"index_form__hWxuI"}}},function(t){t.O(0,[774,888,179],function(){return t(t.s=3958)}),_N_E=t.O()}]);