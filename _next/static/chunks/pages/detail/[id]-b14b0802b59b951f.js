(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[903],{2976:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return _},default:function(){return p}});var i=n(9521),o=n(1163),a=n(659),s=n(572),r=n(9308),l=n(6936),c=n(5893),d=void 0,m=function(e){var t=e.data,n=(0,o.useRouter)(),i=function(){n.back()};return(0,c.jsx)(f.Container,{as:"article",className:"Detail",children:(0,c.jsxs)(f.Inner,{children:[(0,c.jsxs)(f.Title.Container,{className:"Detail__title-container",children:[(0,c.jsxs)(f.Title.TextContainer,{className:"Detail__title__text-container",children:[(0,c.jsx)(f.Title.Text,{className:"Detail__title",children:t.title}),(0,c.jsx)(f.Category,{className:"Detail__category",children:t.category}),(0,c.jsx)(f.Tag.List,{className:"Detail__tag-list",children:t.tag.map(function(e){return(0,c.jsx)(a.Z,{className:"Detail__tag-item",children:e},e)})}),(0,c.jsxs)(f.Button.Container,{className:"Detail__button-container",children:[t.link?(0,c.jsx)(f.Button.Button,{onClick:r.a.bind(d,t.link,"_blank"),children:"사이트 바로가기"}):null,t.github?(0,c.jsx)(f.Button.Button,{onClick:r.a.bind(d,t.github,"_blank"),children:"Github 바로가기"}):null]})]}),(0,c.jsx)(f.Image.Container,{className:"Detail__image-container",children:(0,c.jsx)(s.Z,{src:t.thumb,alt:t.title})})]}),(0,c.jsxs)(f.Desc.Container,{className:"Detail__desc-container",children:[(0,c.jsx)(f.Desc.Title,{className:"Detail__desc-title",children:"OverView."}),(0,c.jsx)(f.Desc.Content,{className:"Detail__desc",children:t.desc})]}),(0,c.jsxs)(f.Desc.Container,{className:"Detail__duration-container",children:[(0,c.jsx)(f.Desc.Title,{className:"Detail__duration-title",children:"Work Info."}),(0,c.jsxs)(f.Desc.InfoList,{className:"Detail__InfoList",children:[(0,c.jsxs)(f.Desc.Content,{as:"li",className:"Detail__InfoList-item",children:[(0,c.jsx)(f.Desc.Label,{children:"제작 기간"}),t.duration]}),(0,c.jsxs)(f.Desc.Content,{as:"li",className:"Detail__InfoList-item",children:[(0,c.jsx)(f.Desc.Label,{children:"제작 영역"}),t.section]}),(0,c.jsxs)(f.Desc.Content,{as:"li",className:"Detail__InfoList-item",children:[(0,c.jsx)(f.Desc.Label,{children:"사용 툴"}),t.tool]})]})]}),(0,c.jsx)(f.Button.Container,{className:"Detail__button-container",children:(0,c.jsx)(f.Button.Button,{onClick:i,children:"목록으로"})})]})})},f={Container:(0,i.ZP)(l.W2).withConfig({displayName:"DetailView__Container",componentId:"sc-1pykkob-0"})(["margin:0 auto;padding-bottom:7.2rem;height:auto;.Detail__InfoList-item{margin-top:0.8rem;display:flex;}"]),Inner:i.ZP.div.withConfig({displayName:"DetailView__Inner",componentId:"sc-1pykkob-1"})(["width:80rem;opacity:0;@keyframes fadeInAni{from{opacity:0;}to{opacity:1;}}transition:width 0.3s,padding 0.3s;animation:fadeInAni 0.3s 0.3s ease-in-out both;@media (max-width:800px){width:100%;padding:0 6rem;}@media (","){padding:0 3rem;}"],function(e){return e.theme.windowSize["mb-m"]}),Title:{Text:i.ZP.h2.withConfig({displayName:"DetailView__Text",componentId:"sc-1pykkob-2"})(["font-size:",";font-weight:700;color:",";transition:font-size 0.3s;word-break:keep-all;@media (","){font-size:",";}@media (","){font-size:",";}"],function(e){return e.theme.fontSize.head.xl},function(e){return e.theme.color.text_head},function(e){return e.theme.windowSize["lt-s"]},function(e){return e.theme.fontSize.head.md},function(e){return e.theme.windowSize["mb-m"]},function(e){return e.theme.fontSize.head.rg}),Container:i.ZP.div.withConfig({displayName:"DetailView__Container",componentId:"sc-1pykkob-3"})(["gap:5.6rem;"]),TextContainer:i.ZP.div.withConfig({displayName:"DetailView__TextContainer",componentId:"sc-1pykkob-4"})(["padding-top:3.2rem;display:flex;flex-direction:column;align-self:stretch;text-align:left;"])},Category:i.ZP.div.withConfig({displayName:"DetailView__Category",componentId:"sc-1pykkob-5"})(["font-size:",";color:",";font-weight:400;margin-top:0.8rem;transition:font-size 0.3s;@media (","){font-size:",";}"],function(e){return e.theme.fontSize.body.lg},function(e){return e.theme.color.text_2},function(e){return e.theme.windowSize["mb-m"]},function(e){return e.theme.fontSize.body.md}),Desc:{Container:i.ZP.div.withConfig({displayName:"DetailView__Container",componentId:"sc-1pykkob-6"})(["margin-top:7.2rem;"]),Content:i.ZP.p.withConfig({displayName:"DetailView__Content",componentId:"sc-1pykkob-7"})(["font-size:",";color:",";line-height:2;word-break:keep-all;display:flex;white-space:pre-line;@media (","){font-size:",";line-height:2;}@media (","){font-size:",";}"],function(e){return e.theme.fontSize.body.rg},function(e){return e.theme.color.text_4},function(e){return e.theme.windowSize["lt-s"]},function(e){return e.theme.fontSize.body.md},function(e){return e.theme.windowSize["mb-m"]},function(e){return e.theme.fontSize.body.rg}),Title:i.ZP.h3.withConfig({displayName:"DetailView__Title",componentId:"sc-1pykkob-8"})(["color:",";font-size:",";font-weight:600;transition:font-size 0.3s;margin-bottom:1.6rem;@media (","){font-size:",";}"],function(e){return e.theme.color.text_3},function(e){return e.theme.fontSize.head.sm},function(e){return e.theme.windowSize["mb-m"]},function(e){return e.theme.fontSize.head.xs}),Label:i.ZP.span.withConfig({displayName:"DetailView__Label",componentId:"sc-1pykkob-9"})(["font-weight:600;width:8rem;display:inline-block;color:",";"],function(e){return e.theme.color.point}),InfoList:i.ZP.ul.withConfig({displayName:"DetailView__InfoList",componentId:"sc-1pykkob-10"})(["margin-top:0;"])},Tag:{List:i.ZP.ul.withConfig({displayName:"DetailView__List",componentId:"sc-1pykkob-11"})(["display:flex;margin-top:3.2rem;flex-wrap:wrap;gap:0.8rem;justify-content:flex-start;"])},Image:{Container:i.ZP.div.withConfig({displayName:"DetailView__Container",componentId:"sc-1pykkob-12"})(["position:relative;width:100%;border-radius:0.8rem;overflow:hidden;margin:0 auto;margin-top:7.2rem;"])},Button:{Container:i.ZP.div.withConfig({displayName:"DetailView__Container",componentId:"sc-1pykkob-13"})(["display:flex;justify-content:center;margin-top:5.6rem;gap:1.6rem;flex-grow:1;align-items:self-end;"]),Button:(0,i.ZP)(l.zx).withConfig({displayName:"DetailView__Button",componentId:"sc-1pykkob-14"})(["transition:all 0.3s,width 0.3s;@media (","){width:auto;}"],function(e){return e.theme.windowSize["mb-l"]})}},u=n(5472),h=n(2262),_=!0,p=function(e){var t=e.data;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(u.Z,{}),(0,c.jsx)(m,{data:t}),(0,c.jsx)(h.Z,{})]})}},90:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/detail/[id]",function(){return n(2976)}])}},function(e){e.O(0,[976,948,249,393,774,888,179],function(){return e(e.s=90)}),_N_E=e.O()}]);