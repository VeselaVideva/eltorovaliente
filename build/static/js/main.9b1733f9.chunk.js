(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,a,t){e.exports=t(50)},38:function(e,a,t){},40:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var l=t(0),i=t.n(l),r=t(28),m=t.n(r),n=(t(38),t(4)),c=t(53),s=t(15),o=t(79),d=(t(40),t(3)),E=t(89),g=t(9),u=t(74),z=t(80),h=t(81),p=t(78),f=t(12),A=t(57),C=t(75),b=t(55),O=t(56);function k(){var e=Object(c.b)(),a=e.colorScheme,t=e.toggleColorScheme,l="dark"===a;return i.a.createElement(C.a,{variant:"outline",color:l?"yellow":"blue",onClick:function(){return t()},title:l?"Switch to Light":"Switch to Dark"},l?i.a.createElement(b.a,{size:"1.1rem"}):i.a.createElement(O.a,{size:"1.1rem"}))}var N=Object(E.a)(function(e){return{inner:Object(d.a)({display:"flex",justifyContent:"space-between",alignItems:"center",height:Object(g.b)(56)},e.fn.smallerThan("sm"),{justifyContent:"flex-start"}),links:Object(d.a)({width:Object(g.b)(290)},e.fn.smallerThan("sm"),{display:"none"}),social:Object(d.a)({width:Object(g.b)(290)},e.fn.smallerThan("sm"),{width:"auto",marginLeft:"auto"}),burger:Object(d.a)({marginRight:e.spacing.md},e.fn.largerThan("sm"),{display:"none"}),link:{display:"block",lineHeight:1,padding:"".concat(Object(g.b)(8)," ").concat(Object(g.b)(12)),borderRadius:e.radius.sm,textDecoration:"none",color:"dark"===e.colorScheme?e.colors.dark[0]:e.colors.gray[7],fontSize:e.fontSizes.sm,fontWeight:500,"&:hover":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0]}},linkActive:{"&, &:hover":{backgroundColor:e.fn.variant({variant:"light",color:e.primaryColor}).background,color:e.fn.variant({variant:"light",color:e.primaryColor}).color}}}});function S(e){var a=e.links,t=Object(A.a)(!1),r=Object(n.a)(t,2),m=r[0],c=r[1].toggle,s=Object(l.useState)(""),o=Object(n.a)(s,2),E=o[0],g=o[1],C=N(),b=C.classes,O=C.cx,S=a.map(function(e){return i.a.createElement("a",{key:e.label,href:e.link,className:O(b.link,Object(d.a)({},b.linkActive,E===e.link)),onClick:function(a){a.preventDefault(),g(e.link),function(e){window.location.href=e}(e.link)}},e.label)});return i.a.createElement(u.a,{height:56,mb:120},i.a.createElement(z.a,{className:b.inner,size:"xl"},i.a.createElement(h.a,{opened:m,onClick:c,size:"sm",className:b.burger}),i.a.createElement(p.a,{className:b.links,spacing:5},S),i.a.createElement(f.a,{fz:"xl",align:"center",className:"logo-title"},"EL TORO VALIENTE"),i.a.createElement(p.a,{spacing:0,className:b.social,position:"right",noWrap:!0},i.a.createElement(k,null))))}var v=t(58),I=t(59),B=t(60),R=t(61),J=t(62),j=Object(E.a)(function(e){return{footer:{marginTop:Object(g.b)(120),borderTop:"".concat(Object(g.b)(1)," solid ").concat("dark"===e.colorScheme?e.colors.dark[5]:e.colors.gray[2])},inner:Object(d.a)({display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:e.spacing.xl,paddingBottom:e.spacing.xl},e.fn.smallerThan("xs"),{flexDirection:"column"}),links:Object(d.a)({},e.fn.smallerThan("xs"),{marginTop:e.spacing.md})}});function x(){var e=j().classes,a="dark"===Object(c.b)().colorScheme;return i.a.createElement("div",{className:e.footer},i.a.createElement(z.a,{className:e.inner,size:"xl"},i.a.createElement(f.a,{fz:"lg",align:"center",className:"logo-title"},"EL TORO VALIENTE"),i.a.createElement(C.a,{variant:"outline",color:a?"yellow":"blue",onClick:function(){window.location.href="#gototop"},title:"Go to Top"},i.a.createElement(v.a,{size:"1.1rem"})),i.a.createElement(p.a,{spacing:"sm",className:e.links,position:"right",noWrap:!0},i.a.createElement(C.a,{title:"OFA Profile",size:"lg",component:"a",href:"https://ofa.org/advanced-search/?appnum=2442877",target:"_blank"},i.a.createElement(I.a,{size:"1.35rem",stroke:1.5})),i.a.createElement(C.a,{title:"Instagram",size:"lg",component:"a",href:"https://www.instagram.com/vesela_5/",target:"_blank"},i.a.createElement(B.a,{size:"1.25rem",stroke:1.5})),i.a.createElement(C.a,{title:"TikTok",size:"lg",component:"a",href:"https://www.tiktok.com/@vesela.videva",target:"_blank"},i.a.createElement(R.a,{size:"1.25rem",stroke:1.5})),i.a.createElement(C.a,{title:"Get in Touch",size:"lg",component:"a",href:"mailto:vesela.videva@gmail.com",target:"_blank"},i.a.createElement(J.a,{size:"1.25rem",stroke:1.5})))))}var y=t(2);function T(){return i.a.createElement(y.a,{sx:{position:"absolute",top:"6rem"}},i.a.createElement(f.a,{className:"vertical-text"},"AMSTAFF"))}var L=t(73),P=t(77);function w(){return i.a.createElement(z.a,{size:"xl",style:{height:"auto",display:"flex"}},i.a.createElement(L.a,{sx:{flex:1},height:"100%",slideSize:"100%",slideGap:"xl",withIndicators:!0,loop:!0,breakpoints:[{maxWidth:"md",slideSize:"100%"},{maxWidth:"sm",slideSize:"100%",slideGap:"xs"}]},i.a.createElement(L.a.Slide,null,i.a.createElement(P.a,{src:"/images/bg_01.jpg"})),i.a.createElement(L.a.Slide,null,i.a.createElement(P.a,{src:"/images/bg_02.jpg"})),i.a.createElement(L.a.Slide,null,i.a.createElement(P.a,{src:"/images/bg_03.jpg"})),i.a.createElement(L.a.Slide,null,i.a.createElement(P.a,{src:"/images/bg_04.jpg"})),i.a.createElement(L.a.Slide,null,i.a.createElement(P.a,{src:"/images/bg_05.jpg"}))))}var M=t(82),D=t(63),G=t(83),H=t(84),K=t(85),F=t(64),U=t(86),W=Object(E.a)(function(e){return{skeleton:{"&::after":{opacity:(e.colorScheme,.1)}}}}),V={display:"none"},_=function(e,a){return 1008/e-a*((e-1)/e)};function Y(){var e=Object(s.e)(),a=W().classes;return i.a.createElement(z.a,{size:"xl"},i.a.createElement(f.a,{id:"pedigree",fz:"xl",align:"center",className:"section-title"},"Pedigree",i.a.createElement(M.a,{href:"#pedigree","aria-hidden":"true"})),i.a.createElement(D.a,{h:"xl"}),i.a.createElement(D.a,{h:"xl"}),i.a.createElement(G.a,{cols:4,breakpoints:[{maxWidth:"xs",cols:1},{maxWidth:"md",cols:3}]},i.a.createElement(H.a,null,i.a.createElement(K.a,{className:a.skeleton,height:_(2,Object(F.a)(e.spacing.md)),radius:"md",animate:!1},i.a.createElement(y.a,{className:"pedigree-name m-1"},i.a.createElement(f.a,{fz:"md"},"Karballido Staffs Mambo Golden Legend"),i.a.createElement(f.a,{fz:"sm"},"LOE 2223368"),i.a.createElement(f.a,{fz:"sm"},"NCL-A Clear"))),i.a.createElement(K.a,{className:a.skeleton,height:_(2,Object(F.a)(e.spacing.md)),radius:"md",animate:!1},i.a.createElement(y.a,{className:"pedigree-name f-1"},i.a.createElement(f.a,{fz:"md"},"Karballido Staffs Queen Of Hearts"),i.a.createElement(f.a,{fz:"sm"},"LOE 2444673"),i.a.createElement(f.a,{fz:"sm"},"NCL-A Carrier")))),i.a.createElement(H.a,null,i.a.createElement(K.a,{className:a.skeleton,height:_(4,Object(F.a)(e.spacing.md)),radius:"md",animate:!1},i.a.createElement(y.a,{className:"pedigree-name m-1-m-2"},i.a.createElement(f.a,{fz:"md"},"Karballido Staffs Pomerland Secret Weapon"),i.a.createElement(f.a,{fz:"sm"},"LOE 2152001"))),i.a.createElement(K.a,{className:a.skeleton,height:_(4,Object(F.a)(e.spacing.md)),radius:"md",animate:!1},i.a.createElement(y.a,{className:"pedigree-name m-1-f-2"},i.a.createElement(f.a,{fz:"md"},"Citadela King Of Ring's"),i.a.createElement(f.a,{fz:"sm"},"LOE 2023370 - JR 7000592 AST"))),i.a.createElement(K.a,{className:a.skeleton,height:_(4,Object(F.a)(e.spacing.md)),radius:"md",animate:!1},i.a.createElement(y.a,{className:"pedigree-name f-1-m-2"},i.a.createElement(f.a,{fz:"md"},"Alpine's LBK Living On The Road"),i.a.createElement(f.a,{fz:"sm"},"AKC RN 29302101"))),i.a.createElement(K.a,{className:a.skeleton,height:_(4,Object(F.a)(e.spacing.md)),radius:"md",animate:!1},i.a.createElement(y.a,{className:"pedigree-name f-1-f-2"},i.a.createElement(f.a,{fz:"md"},"Karballido Staffs Electra Natchios"),i.a.createElement(f.a,{fz:"sm"},"LOE 2029126")))),i.a.createElement(H.a,null,i.a.createElement(K.a,{className:a.skeleton,height:_(8,Object(F.a)(e.spacing.md)),radius:"md",animate:!1},i.a.createElement(y.a,{className:"pedigree-name m-1-m-2-m-3"},i.a.createElement(f.a,{fz:"md"},"Cuda's Playboy"),i.a.createElement(f.a,{fz:"sm"},"ROI 09/51046"))),i.a.createElement(K.a,{className:a.skeleton,height:_(8,Object(F.a)(e.spacing.md)),radius:"md",animate:!1},i.a.createElement(y.a,{className:"pedigree-name m-1-m-2-f-3"},i.a.createElement(f.a,{fz:"md"},'Or Starlight "Red Mist" King Of Ring\'s'),i.a.createElement(f.a,{fz:"sm"},"LOE 2064023 - JR 702392 AST"))),i.a.createElement(K.a,{className:a.skeleton,height:_(8,Object(F.a)(e.spacing.md)),radius:"md",animate:!1},i.a.createElement(y.a,{className:"pedigree-name m-1-f-2-m-3"},i.a.createElement(f.a,{fz:"md"},"Don King Of Ring's"),i.a.createElement(f.a,{fz:"sm"},"JR 76275 AST"))),i.a.createElement(K.a,{className:a.skeleton,height:_(8,Object(F.a)(e.spacing.md)),radius:"md",animate:!1},i.a.createElement(y.a,{className:"pedigree-name m-1-f-2-f-3"},i.a.createElement(f.a,{fz:"md"},"Francesca Of Eagle Blend"),i.a.createElement(f.a,{fz:"sm"},"JR 75920 AST"))),i.a.createElement(K.a,{className:a.skeleton,height:_(8,Object(F.a)(e.spacing.md)),radius:"md",animate:!1},i.a.createElement(y.a,{className:"pedigree-name f-1-m-2-m-3"},i.a.createElement(f.a,{fz:"md"},"Sbigstaff Enuf Is Enuf For LBK"),i.a.createElement(f.a,{fz:"sm"},"AKC RN 20061701"))),i.a.createElement(K.a,{className:a.skeleton,height:_(8,Object(F.a)(e.spacing.md)),radius:"md",animate:!1},i.a.createElement(y.a,{className:"pedigree-name f-1-m-2-f-3"},i.a.createElement(f.a,{fz:"md"},"Alpine's Isn't She Lovely"),i.a.createElement(f.a,{fz:"sm"},"AKC RN 20431405"))),i.a.createElement(K.a,{className:a.skeleton,height:_(8,Object(F.a)(e.spacing.md)),radius:"md",animate:!1},i.a.createElement(y.a,{className:"pedigree-name f-1-f-2-m-3"},i.a.createElement(f.a,{fz:"md"},"Builder's Best Heavenly Rider Long Step"),i.a.createElement(f.a,{fz:"sm"},"JR 77655 AST"))),i.a.createElement(K.a,{className:a.skeleton,height:_(8,Object(F.a)(e.spacing.md)),radius:"md",animate:!1},i.a.createElement(y.a,{className:"pedigree-name f-1-f-2-f-3"},i.a.createElement(f.a,{fz:"md"},"Karballido Staffs Quite Easy"),i.a.createElement(f.a,{fz:"sm"},"LOE 1914498")))),i.a.createElement(U.a,{smallerThan:"md",styles:V},i.a.createElement(H.a,null,i.a.createElement(K.a,{className:a.skeleton,height:_(16,Object(F.a)(e.spacing.md)),radius:"md",animate:!1},i.a.createElement(y.a,{className:"pedigree-name"},i.a.createElement(f.a,{fz:"md"},"Builder's Best Heavenly Rider Long Step"),i.a.createElement(f.a,{fz:"sm",color:"dimmed"},"JR 77655 AST"))),i.a.createElement(K.a,{className:a.skeleton,height:_(16,Object(F.a)(e.spacing.md)),radius:"md",animate:!1},i.a.createElement(y.a,{className:"pedigree-name"},i.a.createElement(f.a,{fz:"md"},"Bloody Merry Of Nimiloxus"),i.a.createElement(f.a,{fz:"sm",color:"dimmed"},"ROI 08/90522 - JR 77090 AST"))),i.a.createElement(K.a,{className:a.skeleton,height:_(16,Object(F.a)(e.spacing.md)),radius:"md",animate:!1},i.a.createElement(y.a,{className:"pedigree-name"},i.a.createElement(f.a,{fz:"md"},"Paton King Of Ring's"),i.a.createElement(f.a,{fz:"sm",color:"dimmed"},"JR 78747 AST"))),i.a.createElement(K.a,{className:a.skeleton,height:_(16,Object(F.a)(e.spacing.md)),radius:"md",animate:!1},i.a.createElement(y.a,{className:"pedigree-name"},i.a.createElement(f.a,{fz:"md"},"Golden Heart Long Step"),i.a.createElement(f.a,{fz:"sm",color:"dimmed"},"JR 78505 AST"))),i.a.createElement(K.a,{className:a.skeleton,height:_(16,Object(F.a)(e.spacing.md)),radius:"md",animate:!1},i.a.createElement(y.a,{className:"pedigree-name"},i.a.createElement(f.a,{fz:"md"},"Lari Long Step"),i.a.createElement(f.a,{fz:"sm",color:"dimmed"},"JR 75834 AST"))),i.a.createElement(K.a,{className:a.skeleton,height:_(16,Object(F.a)(e.spacing.md)),radius:"md",animate:!1},i.a.createElement(y.a,{className:"pedigree-name"},i.a.createElement(f.a,{fz:"md"},"Cool Wind Kennel Tara"),i.a.createElement(f.a,{fz:"sm",color:"dimmed"},"JR 754284 AST"))),i.a.createElement(K.a,{className:a.skeleton,height:_(16,Object(F.a)(e.spacing.md)),radius:"md",animate:!1},i.a.createElement(y.a,{className:"pedigree-name"},i.a.createElement(f.a,{fz:"md"},"Picasso Of Eagle Blend"),i.a.createElement(f.a,{fz:"sm",color:"dimmed"},"JR 75112 AST"))),i.a.createElement(K.a,{className:a.skeleton,height:_(16,Object(F.a)(e.spacing.md)),radius:"md",animate:!1},i.a.createElement(y.a,{className:"pedigree-name"},i.a.createElement(f.a,{fz:"md"},"Srcky's Shady Lady"),i.a.createElement(f.a,{fz:"sm",color:"dimmed"},"JR ... AST"))),i.a.createElement(K.a,{className:a.skeleton,height:_(16,Object(F.a)(e.spacing.md)),radius:"md",animate:!1},i.a.createElement(y.a,{className:"pedigree-name"},i.a.createElement(f.a,{fz:"md"},"Alpine's Rio Grande"),i.a.createElement(f.a,{fz:"sm",color:"dimmed"},"AKC RN 15899501"))),i.a.createElement(K.a,{className:a.skeleton,height:_(16,Object(F.a)(e.spacing.md)),radius:"md",animate:!1},i.a.createElement(y.a,{className:"pedigree-name"},i.a.createElement(f.a,{fz:"md"},"Castle Rocks Precious Gem"),i.a.createElement(f.a,{fz:"sm",color:"dimmed"},"AKC RN 09183405 - MET 738/H/09"))),i.a.createElement(K.a,{className:a.skeleton,height:_(16,Object(F.a)(e.spacing.md)),radius:"md",animate:!1},i.a.createElement(y.a,{className:"pedigree-name"},i.a.createElement(f.a,{fz:"md"},"Alpine's Ring Of Fire"),i.a.createElement(f.a,{fz:"sm",color:"dimmed"},"AKC RN 18739603"))),i.a.createElement(K.a,{className:a.skeleton,height:_(16,Object(F.a)(e.spacing.md)),radius:"md",animate:!1},i.a.createElement(y.a,{className:"pedigree-name"},i.a.createElement(f.a,{fz:"md"},"Sindelar's Sweet Child O Mine"),i.a.createElement(f.a,{fz:"sm",color:"dimmed"},"AKC RN 14023605"))),i.a.createElement(K.a,{className:a.skeleton,height:_(16,Object(F.a)(e.spacing.md)),radius:"md",animate:!1},i.a.createElement(y.a,{className:"pedigree-name"},i.a.createElement(f.a,{fz:"md"},"White Head Long Step"),i.a.createElement(f.a,{fz:"sm",color:"dimmed"},"JR 75805 AST"))),i.a.createElement(K.a,{className:a.skeleton,height:_(16,Object(F.a)(e.spacing.md)),radius:"md",animate:!1},i.a.createElement(y.a,{className:"pedigree-name"},i.a.createElement(f.a,{fz:"md"},"Ko Bo's Europa"),i.a.createElement(f.a,{fz:"sm",color:"dimmed"},"MET 9125/06"))),i.a.createElement(K.a,{className:a.skeleton,height:_(16,Object(F.a)(e.spacing.md)),radius:"md",animate:!1},i.a.createElement(y.a,{className:"pedigree-name"},i.a.createElement(f.a,{fz:"md"},"John Bull Fekete Domino"),i.a.createElement(f.a,{fz:"sm",color:"dimmed"},"MET 9330/06"))),i.a.createElement(K.a,{className:a.skeleton,height:_(16,Object(F.a)(e.spacing.md)),radius:"md",animate:!1},i.a.createElement(y.a,{className:"pedigree-name"},i.a.createElement(f.a,{fz:"md"},"Karballido Staffs Honey Moon"),i.a.createElement(f.a,{fz:"sm",color:"dimmed"},"LOE ...")))))))}var Z=t(65),Q=t(66),X=t(67),q=t(68),$=t(69),ee=t(70),ae=t(71),te=[{icon:I.a,color:"green",title:"Dog Genetic Identification",description:["DNA ISAG 2006","Antagene: 759 218"]},{icon:Z.a,color:"green",title:"Dentition",description:["Full dentition with correct scissor bite.","OFA: STA-DE49/25M-VPI"]},{icon:Q.a,color:"gray",title:"Autoimmune Thyroiditis",description:["Result: pending testing...","OFA: pending registration..."]},{icon:X.a,color:"gray",title:"Hip Dysplasia - HD",description:["Result: pending testing...","OFA: pending registration..."]},{icon:X.a,color:"gray",title:"Elbow Dysplasia - ED",description:["Result: pending testing...","OFA: pending registration..."]},{icon:X.a,color:"green",title:"Osteochondritis Dissecans - OCD",description:["OCD Shoulder Free","OFA: pending registration..."]},{icon:X.a,color:"green",title:"Patellar Luxation - PL",description:["PL N/N","OFA: pending registration..."]},{icon:q.a,color:"gray",title:"Congenital Heart Disease",description:["Result: pending testing...","OFA: pending registration..."]},{icon:Q.a,color:"orange",title:"Neuronal Ceroid Lipofuscinosis - NCL-A",description:["Autosomal recessive","NCL-A Carrier","OFA: STA-NCL789/13M-PI-CAR"]},{icon:Q.a,color:"green",title:"Hyperuricosuria - HUU",description:["Autosomal recessive.","HUU Clear","OFA: STA-HU52/13M-PI"]},{icon:Q.a,color:"green",title:"Degenerative Myelopathy - DM",description:["Autosomal recessive.","DM Clear","OFA: pending registration..."]},{icon:Q.a,color:"green",title:"Juvenile Laryngeal Paralysis + Polyneuropathy - ALPP",description:["Autosomal recessive","ALPP Clear","OFA: pending registration..."]},{icon:Q.a,color:"green",title:"Craniomandibular Osteopathy",description:["Autosomal dominant with incomplete penetrance","CO Clear","OFA: pending registration..."]},{icon:$.a,color:"green",title:"Progressive Retinal Atrophy",description:["Autosomal recessive","PRA-crd1 Clear, PRA-crd2 Clear, PRA-prcd Clear","OFA: pending registration..."]},{icon:Q.a,color:"green",title:"Multidrug Sensitivity - MDR1",description:["Autosomal codominant.","MDR1 Clear","OFA: pending registration..."]},{icon:ee.a,color:"",title:"A Locus - Agouti",description:["Autosomal recessive","a\u02b7/a\u02b7, A\u02b8/A\u02b8 - non-carrier of tricolor"]},{icon:ee.a,color:"",title:"B Locus - Brown",description:["Autosomal recessive","B/B - non-carrier of brown pigmentation"]},{icon:ee.a,color:"",title:"D Locus - Dilution",description:["Autosomal recessive","D/d - carrier of dilution"]},{icon:ee.a,color:"",title:"E Locus - Extension",description:["Autosomal recessive","E\u1d50/E - melanistic mask"]},{icon:ee.a,color:"",title:"K Locus - Dominant Black",description:["Autosomal dominant","k\u02b8/k\u02b8 - not expressed"]},{icon:ae.a,color:"",title:"Shedding - MC5R",description:["Autosomal codominant","Low shedding"]}],le=t(87);function ie(e){var a=e.icon,t=e.color,l=e.title,r=e.description;return i.a.createElement("div",null,i.a.createElement(le.a,{variant:"light",color:t,size:40,radius:40},i.a.createElement(a,{size:"1.3rem",stroke:1})),i.a.createElement(f.a,{mt:"sm",mb:7},l),i.a.createElement(f.a,{size:"sm",color:"dimmed",sx:{lineHeight:1.6}},r.map(function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("span",null,e),i.a.createElement("br",null))})))}function re(){var e=te.map(function(e,a){return i.a.createElement(ie,Object.assign({},e,{key:a}))});return i.a.createElement(z.a,{size:"xl"},i.a.createElement(f.a,{id:"health",fz:"xl",align:"center",className:"section-title"},"Health",i.a.createElement(M.a,{href:"#health","aria-hidden":"true"})),i.a.createElement(G.a,{mt:60,cols:3,spacing:50,breakpoints:[{maxWidth:980,cols:2,spacing:"xl"},{maxWidth:755,cols:1,spacing:"xl"}]},e))}var me=t(76),ne=t(72);function ce(){return i.a.createElement(z.a,{size:"xl"},i.a.createElement(f.a,{id:"shows",fz:"xl",align:"center",className:"section-title"},"Shows",i.a.createElement(M.a,{href:"#shows","aria-hidden":"true"})),i.a.createElement(D.a,{h:"xl"}),i.a.createElement(D.a,{h:"xl"}),i.a.createElement(G.a,{cols:3,breakpoints:[{maxWidth:"sm",cols:1}]},i.a.createElement(me.a,{active:-1,bulletSize:40,lineWidth:1,align:"left"},i.a.createElement(me.a.Item,{bullet:i.a.createElement(le.a,{variant:"light",size:40,radius:40},i.a.createElement(ne.a,{size:"1.3rem",stroke:1})),title:"CAC The DOG Show \u2013 Parvomay, BULGARIA"},i.a.createElement(f.a,{color:"dimmed",size:"md"},"16.10.2021 - Puppy class"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Very Promising, Puppy BOB, R.BIS Puppy"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Judge: George Trevor Hiscock (South Africa)")),i.a.createElement(me.a.Item,{bullet:i.a.createElement(le.a,{variant:"light",size:40,radius:40},i.a.createElement(ne.a,{size:"1.3rem",stroke:1})),title:"CAC The DOG Show \u2013 Parvomay, BULGARIA"},i.a.createElement(f.a,{color:"dimmed",size:"md"},"17.10.2021 - Puppy class"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Very Promising, Puppy BOB, BIS Puppy 4"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Judge: Peter Kujumdjiev (Bulgaria)")),i.a.createElement(me.a.Item,{bullet:i.a.createElement(le.a,{variant:"light",size:40,radius:40},i.a.createElement(ne.a,{size:"1.3rem",stroke:1})),title:"Amstaff Major 2022 - Szilvasvarad, HUNGARY"},i.a.createElement(f.a,{color:"dimmed",size:"md"},"16.04.2022 - Junior class"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Very good"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Judge: Patrik Cederl\xf6f (Sweden)")),i.a.createElement(me.a.Item,{bullet:i.a.createElement(le.a,{variant:"light",size:40,radius:40},i.a.createElement(ne.a,{size:"1.3rem",stroke:1})),title:"Royal Cup AST Speciality - Kraljevo, SERBIA"},i.a.createElement(f.a,{color:"dimmed",size:"md"},"30.04.2022 - Junior class"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Excellent 2, R.JCACS"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Judge: Savvas Shiapanis (Cyprus)")),i.a.createElement(me.a.Item,{bullet:i.a.createElement(le.a,{variant:"light",size:40,radius:40},i.a.createElement(ne.a,{size:"1.3rem",stroke:1})),title:"CAC - Kraljevo, SERBIA"},i.a.createElement(f.a,{color:"dimmed",size:"md"},"30.04.2022 - Junior class"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Excellent 2, R.JCAC"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Judge: Peter Lauber (Switzerland)")),i.a.createElement(me.a.Item,{bullet:i.a.createElement(le.a,{variant:"light",size:40,radius:40},i.a.createElement(ne.a,{size:"1.3rem",stroke:1})),title:"CACIB - Vranje, SERBIA"},i.a.createElement(f.a,{color:"dimmed",size:"md"},"01.05.2022 - Junior class"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Excellent 1, JCAC, JBOB"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Judge: Dejan Gujanicic (Serbia)")),i.a.createElement(me.a.Item,{bullet:i.a.createElement(le.a,{variant:"light",size:40,radius:40},i.a.createElement(ne.a,{size:"1.3rem",stroke:1})),title:"CACIB - Ni\u0161, SERBIA"},i.a.createElement(f.a,{color:"dimmed",size:"md"},"08.05.2022 - Junior class"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Excellent 1, JCAC, JBOB"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Judge: Dragan Krsti\u0107 (Serbia)")),i.a.createElement(me.a.Item,{bullet:i.a.createElement(le.a,{variant:"light",size:40,radius:40},i.a.createElement(ne.a,{size:"1.3rem",stroke:1})),title:"Naissa Terrier Show AST Speciality - Ni\u0161, SERBIA"},i.a.createElement(f.a,{color:"dimmed",size:"md"},"08.05.2022 - Junior class"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Excellent 3"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Judge: Alin Dumitrescu (Romania)")),i.a.createElement(me.a.Item,{bullet:i.a.createElement(le.a,{variant:"light",size:40,radius:40},i.a.createElement(ne.a,{size:"1.3rem",stroke:1})),title:"CACIB - Skopje, NORTH MACEDONIA"},i.a.createElement(f.a,{color:"dimmed",size:"md"},"21.05.2022 - Junior class"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Excellent 1, JCAC, JBOB, R.BIS Junior"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Judge: Livija Zizevske (Lithuania)")),i.a.createElement(me.a.Item,{bullet:i.a.createElement(le.a,{variant:"light",size:40,radius:40},i.a.createElement(ne.a,{size:"1.3rem",stroke:1})),title:"CAC - Skopje, NORTH MACEDONIA"},i.a.createElement(f.a,{color:"dimmed",size:"md"},"22.05.2022 - Junior class"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Excellent 1, JCAC, JBOB"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Judge: Igoris Zizevskis (Lithuania)")),i.a.createElement(me.a.Item,{bullet:i.a.createElement(le.a,{variant:"light",size:40,radius:40},i.a.createElement(ne.a,{size:"1.3rem",stroke:1})),title:"CACIB - Skopje, NORTH MACEDONIA"},i.a.createElement(f.a,{color:"dimmed",size:"md"},"22.05.2022 - Junior class"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Excellent 1, JCAC, JBOB"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Judge: Oliver Simon (Croatia)")),i.a.createElement(me.a.Item,{bullet:i.a.createElement(le.a,{variant:"light",size:40,radius:40},i.a.createElement(ne.a,{size:"1.3rem",stroke:1})),title:"CACIB - Skopje, NORTH MACEDONIA"},i.a.createElement(f.a,{color:"dimmed",size:"md"},"23.05.2022 - Junior class"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Excellent 1, JCAC, JBOB, BIS Junior 3"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Judge: Milivoje Urosevic (Serbia)"))),i.a.createElement(me.a,{active:-1,bulletSize:36,lineWidth:1,align:"left"},i.a.createElement(me.a.Item,{bullet:i.a.createElement(le.a,{variant:"light",size:40,radius:40},i.a.createElement(ne.a,{size:"1.3rem",stroke:1})),title:"CACIB - Thessaloniki, GREECE"},i.a.createElement(f.a,{color:"dimmed",size:"md"},"18.06.2022 - Junior class"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Excellent 1, JCAC, JBOB"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Judge: Antonio Mracevic (Montenegro)")),i.a.createElement(me.a.Item,{bullet:i.a.createElement(le.a,{variant:"light",size:40,radius:40},i.a.createElement(ne.a,{size:"1.3rem",stroke:1})),title:"CACIB - Thessaloniki, GREECE"},i.a.createElement(f.a,{color:"dimmed",size:"md"},"19.06.2022 - Junior class"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Excellent 1, JCAC, JBOB, BOS"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Judge: Calin Mitra Valentin (Romania)")),i.a.createElement(me.a.Item,{bullet:i.a.createElement(le.a,{variant:"light",size:40,radius:40},i.a.createElement(ne.a,{size:"1.3rem",stroke:1})),title:"CAC - Thessaloniki, GREECE"},i.a.createElement(f.a,{color:"dimmed",size:"md"},"19.06.2022 - Junior class"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Excellent 1, JCAC, JBOB, BOS"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Judge: Suncica Lazic (Serbia)")),i.a.createElement(me.a.Item,{bullet:i.a.createElement(le.a,{variant:"light",size:40,radius:40},i.a.createElement(ne.a,{size:"1.3rem",stroke:1})),title:"CAC \u2013 Ploiesti, ROMANIA"},i.a.createElement(f.a,{color:"dimmed",size:"md"},"16.07.2022 - Junior class"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Excellent 2, R.JCAC"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Judge: Jeff Horswell (United Kingdom)")),i.a.createElement(me.a.Item,{bullet:i.a.createElement(le.a,{variant:"light",size:40,radius:40},i.a.createElement(ne.a,{size:"1.3rem",stroke:1})),title:"CACIB \u2013 Ploiesti, ROMANIA"},i.a.createElement(f.a,{color:"dimmed",size:"md"},"16.07.2022 - Junior class"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Excellent 2, R.JCAC"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Judge: Tino Pehar (Croatia)")),i.a.createElement(me.a.Item,{bullet:i.a.createElement(le.a,{variant:"light",size:40,radius:40},i.a.createElement(ne.a,{size:"1.3rem",stroke:1})),title:"CACIB \u2013 Ploiesti, ROMANIA"},i.a.createElement(f.a,{color:"dimmed",size:"md"},"17.07.2022 - Junior class"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Excellent 1, JCAC, BOS"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Judge: George Schogol (Georgia)")),i.a.createElement(me.a.Item,{bullet:i.a.createElement(le.a,{variant:"light",size:40,radius:40},i.a.createElement(ne.a,{size:"1.3rem",stroke:1})),title:"NDS \u2013 Plovdiv, BULGARIA"},i.a.createElement(f.a,{color:"dimmed",size:"md"},"05.11.2022 - Intermedia class"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Excellent 1, CW, BOB, BOG 3"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Judge: Trevor Hiscock (South Africa)")),i.a.createElement(me.a.Item,{bullet:i.a.createElement(le.a,{variant:"light",size:40,radius:40},i.a.createElement(ne.a,{size:"1.3rem",stroke:1})),title:"NDS \u2013 Plovdiv, BULGARIA"},i.a.createElement(f.a,{color:"dimmed",size:"md"},"06.11.2022 - Intermedia class"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Excellent 1, CW, BOB, BOG 3"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Judge: Zlatko Jojkic (Serbia)")),i.a.createElement(me.a.Item,{bullet:i.a.createElement(le.a,{variant:"light",size:40,radius:40},i.a.createElement(ne.a,{size:"1.3rem",stroke:1})),title:"Amstaff Major 14th \u2013 Andrevlje, SERBIA"},i.a.createElement(f.a,{color:"dimmed",size:"md"},"29.04.2023 - Open class"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Very good"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Judge: Olaf Verhorevoort (Netherlands)")),i.a.createElement(me.a.Item,{bullet:i.a.createElement(le.a,{variant:"light",size:40,radius:40},i.a.createElement(ne.a,{size:"1.3rem",stroke:1})),title:"Amstaff Major 15th \u2013 Andrevlje, SERBIA"},i.a.createElement(f.a,{color:"dimmed",size:"md"},"30.04.2023 - Open class"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Excellent 2, R.CACS"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Judge: Bob Busby (USA)")),i.a.createElement(me.a.Item,{bullet:i.a.createElement(le.a,{variant:"light",size:40,radius:40},i.a.createElement(ne.a,{size:"1.3rem",stroke:1})),title:"CACIB - Vranje, SERBIA"},i.a.createElement(f.a,{color:"dimmed",size:"md"},"01.05.2023 - Open class"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Excellent 1, CAC, CACIB"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Judge: Dalibor Anti\u0107 (Serbia)")),i.a.createElement(me.a.Item,{bullet:i.a.createElement(le.a,{variant:"light",size:40,radius:40},i.a.createElement(ne.a,{size:"1.3rem",stroke:1})),title:"XIII DERBY AST Speciality \u2013 Indjija, SERBIA"},i.a.createElement(f.a,{color:"dimmed",size:"md"},"13.05.2023 - Open class"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Excellent 4"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Judge: Piergiorgio Lievore (Italy)"))),i.a.createElement(me.a,{active:-1,bulletSize:36,lineWidth:1,align:"left"},i.a.createElement(me.a.Item,{bullet:i.a.createElement(le.a,{variant:"light",size:40,radius:40},i.a.createElement(ne.a,{size:"1.3rem",stroke:1})),title:"10-breed EDS \u2013 Budapest, HUNGARY"},i.a.createElement(f.a,{color:"dimmed",size:"md"},"03.06.2023 - Open class"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Very good 8 / 13 entries"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Judge: Connie Clark (USA)")),i.a.createElement(me.a.Item,{bullet:i.a.createElement(le.a,{variant:"light",size:40,radius:40},i.a.createElement(ne.a,{size:"1.3rem",stroke:1})),title:"Karakan Club Show \u2013 Budapest, HUNGARY"},i.a.createElement(f.a,{color:"dimmed",size:"md"},"04.06.2023 - Open class"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Excellent 4"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Judge: Billie Kellog Kneale (USA)")),i.a.createElement(me.a.Item,{bullet:i.a.createElement(le.a,{variant:"light",size:40,radius:40},i.a.createElement(ne.a,{size:"1.3rem",stroke:1})),title:"CACIB \u2013 Thessaloniki, GREECE"},i.a.createElement(f.a,{color:"dimmed",size:"md"},"10.06.2023 - Open class"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Excellent 1, R.CAC, R.CACIB"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Judge: Julija Aidietiene (Lithuania)")),i.a.createElement(me.a.Item,{bullet:i.a.createElement(le.a,{variant:"light",size:40,radius:40},i.a.createElement(ne.a,{size:"1.3rem",stroke:1})),title:"CACIB \u2013 Thessaloniki, GREECE"},i.a.createElement(f.a,{color:"dimmed",size:"md"},"11.06.2023 - Open class"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Excellent 1, CAC, CACIB, BOB, BOG"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Judge: Sissi Adramitli (Greece)")),i.a.createElement(me.a.Item,{bullet:i.a.createElement(le.a,{variant:"light",size:40,radius:40},i.a.createElement(ne.a,{size:"1.3rem",stroke:1})),title:"CAC \u2013 Pirot, SERBIA"},i.a.createElement(f.a,{color:"dimmed",size:"md"},"01.07.2023 - Open class"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Excellent 1, CAC, BOB, BOG"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Judge: Olivera Stojanovic (Serbia)")),i.a.createElement(me.a.Item,{bullet:i.a.createElement(le.a,{variant:"light",size:40,radius:40},i.a.createElement(ne.a,{size:"1.3rem",stroke:1})),title:"CAC \u2013 Aleksinac, SERBIA"},i.a.createElement(f.a,{color:"dimmed",size:"md"},"22.07.2023 - Open class"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Excellent 1, CAC, BOS"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Judge: Nenad Matejevic (Serbia)")),i.a.createElement(me.a.Item,{bullet:i.a.createElement(le.a,{variant:"light",size:40,radius:40},i.a.createElement(ne.a,{size:"1.3rem",stroke:1})),title:"CACIB \u2013 Sokobanja, SERBIA"},i.a.createElement(f.a,{color:"dimmed",size:"md"},"22.07.2023 - Open class"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Excellent 2, R.CAC, R.CACIB"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Judge: Marija Radovanovi\u0107 (Serbia)")),i.a.createElement(me.a.Item,{bullet:i.a.createElement(le.a,{variant:"light",size:40,radius:40},i.a.createElement(ne.a,{size:"1.3rem",stroke:1})),title:"CACIB \u2013 Ohrid, NORTH MACEDONIA"},i.a.createElement(f.a,{color:"dimmed",size:"md"},"31.08.2023 - Champion class"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Excellent 1, CAC, R.CACIB"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Judge: Janusz Opara (Poland)")),i.a.createElement(me.a.Item,{bullet:i.a.createElement(le.a,{variant:"light",size:40,radius:40},i.a.createElement(ne.a,{size:"1.3rem",stroke:1})),title:"CACIB \u2013 Ohrid, NORTH MACEDONIA"},i.a.createElement(f.a,{color:"dimmed",size:"md"},"01.09.2023 - Champion class"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Excellent 1, CAC"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Judge: Siret Lepasaar (Estonia)")),i.a.createElement(me.a.Item,{bullet:i.a.createElement(le.a,{variant:"light",size:40,radius:40},i.a.createElement(ne.a,{size:"1.3rem",stroke:1})),title:"NDS \u2013 Plovdiv, BULGARIA"},i.a.createElement(f.a,{color:"dimmed",size:"md"},"23.09.2023 - Champion class"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Excellent 1, CW, BOB, R.BOG"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Judge: Dusko Piljevic (Serbia)")),i.a.createElement(me.a.Item,{bullet:i.a.createElement(le.a,{variant:"light",size:40,radius:40},i.a.createElement(ne.a,{size:"1.3rem",stroke:1})),title:"CACIB \u2013 Thessaloniki, GREECE"},i.a.createElement(f.a,{color:"dimmed",size:"md"},"28.10.2023 - Champion class"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Excellent 1, CAC, CACIB, BOB, BOG 4"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Judge: Tino Pehar (Croatia)")),i.a.createElement(me.a.Item,{bullet:i.a.createElement(le.a,{variant:"light",size:40,radius:40},i.a.createElement(ne.a,{size:"1.3rem",stroke:1})),title:"CACIB \u2013 Thessaloniki, GREECE"},i.a.createElement(f.a,{color:"dimmed",size:"md"},"29.10.2023 - Champion class"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Excellent 1, R.CAC, R.CACIB"),i.a.createElement(f.a,{color:"dimmed",size:"md"},"Judge: Angel Garach Domech (Spain)")))))}var se=[{flag:"/images/serbia.png",title:"JUNIOR CHAMPION SERBIA",number:"0088/22/P / 10.05.2022",finished:!0},{flag:"/images/macedonia.png",title:"JUNIOR CHAMPION MACEDONIA",number:"210-J-SK/2022 / 23.05.2022",finished:!0},{flag:"/images/greece.png",title:"JUNIOR CHAMPION GREECE",number:"2454/2023 / 22.05.2023",finished:!0},{flag:"/images/romania.png",title:"JUNIOR CHAMPION ROMANIA",number:"JCAC 1 of 2 - Not finished",finished:!1},{flag:"/images/serbia.png",title:"CHAMPION SERBIA",number:"0615/23 / 26.07.2023",finished:!0},{flag:"/images/macedonia.png",title:"CHAMPION MACEDONIA",number:"838-OH/2023 / 04.09.2023",finished:!0},{flag:"/images/greece.png",title:"CHAMPION GREECE",number:"CAC 2 of 3 - Not finished",finished:!1},{flag:"/images/europe.png",title:"INTERNATIONAL CHAMPION",number:"CACIB 3 of 4 - Not finished",finished:!1}];function oe(e){var a=e.flag,t=e.title,l=e.number,r=e.finished;return i.a.createElement(p.a,{noWrap:!0},i.a.createElement(le.a,{variant:"light",size:60,radius:60,opacity:r?1:.35},i.a.createElement(P.a,{src:a})),i.a.createElement("div",null,i.a.createElement(f.a,{fz:"lg",fw:500},t),i.a.createElement(f.a,{fz:"xs",tt:"uppercase",fw:700,c:"dimmed"},l)))}function de(){var e=se.map(function(e,a){return i.a.createElement(oe,Object.assign({},e,{key:a}))});return i.a.createElement(z.a,{size:"xl"},i.a.createElement(f.a,{id:"titles",fz:"xl",align:"center",className:"section-title"},"Titles",i.a.createElement(M.a,{href:"#titles","aria-hidden":"true"})),i.a.createElement(G.a,{mt:60,cols:3,spacing:50,breakpoints:[{maxWidth:980,cols:2,spacing:"xl"},{maxWidth:755,cols:1,spacing:"xl"}]},e))}var Ee=t(88);function ge(){return i.a.createElement(z.a,{size:"xl"},i.a.createElement(D.a,{h:"xl"}),i.a.createElement(D.a,{h:"xl"}),i.a.createElement(D.a,{h:"xl"}),i.a.createElement(Ee.a,{my:"sm"}),i.a.createElement(D.a,{h:"xl"}),i.a.createElement(D.a,{h:"xl"}),i.a.createElement(D.a,{h:"xl"}))}function ue(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(T,null),i.a.createElement(w,null),i.a.createElement(ge,null),i.a.createElement(Y,null),i.a.createElement(ge,null),i.a.createElement(re,null),i.a.createElement(ge,null),i.a.createElement(ce,null),i.a.createElement(ge,null),i.a.createElement(de,null))}var ze=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(f.a,{id:"gototop"},i.a.createElement(M.a,{href:"#gototop","aria-hidden":"true"})),i.a.createElement(S,{links:[{link:"#pedigree",label:"Pedigree"},{link:"#health",label:"Health"},{link:"#shows",label:"Shows"},{link:"#titles",label:"Titles"}]}),i.a.createElement(ue,null),i.a.createElement(x,null))};function he(){var e=Object(o.a)({key:"mantine-color-scheme",defaultValue:"light",getInitialValueInEffect:!0}),a=Object(n.a)(e,2),t=a[0],l=a[1];return i.a.createElement(c.a,{colorScheme:t,toggleColorScheme:function(e){return l(e||("dark"===t?"light":"dark"))}},i.a.createElement(s.a,{theme:{colorScheme:t},withGlobalStyles:!0,withNormalizeCSS:!0},i.a.createElement(ze,null)))}m.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(he,null)))}},[[29,2,1]]]);
//# sourceMappingURL=main.9b1733f9.chunk.js.map