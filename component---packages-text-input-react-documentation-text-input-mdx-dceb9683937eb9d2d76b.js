(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{J9Ew:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return j})),n.d(t,"default",(function(){return w}));n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("1c7q");var r=n("mXGw"),l=n.n(r),a=n("/FXl"),o=n("7XvJ"),i=(n("Qvie"),n("8Jek")),s=n.n(i);n("Eb4t"),n("ZJc7");var c=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",n=crypto.getRandomValues(new Uint8Array(e));e--;){var r=63&n[e];t+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return t},u=n("F5Dj");var d=Object(r.forwardRef)((function(e,t){var n=e.id,a=e.variant,o=e.inverted,i=e.label,d=e.className,p=e.helpLabel,m=e.errorLabel,b=e.rows,f=void 0===b?7:b,v=e.placeholder,k=void 0===v?" ":v,j=e.autoExpand,g=void 0!==j&&j,h=e.forceCompact,O=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["id","variant","inverted","label","className","helpLabel","errorLabel","rows","placeholder","autoExpand","forceCompact"]),x=s()("jkl-text-input jkl-text-area",d,{"jkl-text-input--compact":h,"jkl-text-input--inverted":o}),y=Object(r.useState)(n||"jkl-text-area-"+c(8))[0],w=Object(r.useState)("jkl-support-label-"+c(8))[0],E=Object(r.useState)(!1),L=E[0],N=E[1],C=Object(r.useState)(0),M=C[0],V=C[1],F=Object(r.useState)(1),S=F[0],I=F[1],_=Object(r.useRef)(null),T=t||_;return Object(r.useEffect)((function(){var e=T.current;if(g&&e){var t=e.value,n=e.placeholder,r=e.rows;e.value="",e.placeholder="",e.rows=1,V(e.scrollHeight),e.value=t,e.placeholder=n,e.rows=r}}),[T,g]),Object(r.useEffect)((function(){var e=T.current,t=f;if(e){var n=function(e,t){var n=window?window.getComputedStyle(e).lineHeight:"16px",r=parseInt(n.replace("px","")),l=e.rows;e.rows=1;var a=Math.ceil((e.scrollHeight-t)/r)+1;return e.rows=l,a}(e,M);L||O.value?I(Math.max(t,n)):I(n)}}),[T,O.value,L,M,f]),l.a.createElement("div",{"data-testid":"jkl-text-area",className:x},l.a.createElement(u.a,{standAlone:!0,htmlFor:y,variant:a,forceCompact:h},i),l.a.createElement("textarea",Object.assign({id:y,ref:T,className:"jkl-text-input__input jkl-text-input__input--"+f+"-rows",onFocus:function(e){N(!0),O.onFocus&&O.onFocus(e)},onBlur:function(e){N(!1),O.onBlur&&O.onBlur(e)},"aria-invalid":!!m,"aria-describedby":w,placeholder:k,rows:g?S:void 0,style:g?{height:"auto",overflowX:"hidden"}:void 0},O)),l.a.createElement(u.c,{inverted:o,id:w,helpLabel:p,errorLabel:m,forceCompact:h}))}));d.displayName="TextArea";var p=n("nnXn");function m(e,t){if(e)return{width:e};if(t){return{width:"calc("+(Math.min(t,40)+"ch")+" + 24px)"}}}var b=Object(r.forwardRef)((function(e,t){var n=e.id,r=e.describedBy,a=e.invalid,o=e.maxLength,i=e.width,s=e.type,c=void 0===s?"text":s,u=e.className,d=void 0===u?"":u,p=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["id","describedBy","invalid","maxLength","width","type","className"]);return l.a.createElement("input",Object.assign({ref:t,id:n,className:"jkl-text-input__input "+d,style:m(i,o),"aria-describedby":r,"aria-invalid":a,maxLength:o,type:c},p))}));b.displayName="BaseInputField";var f=Object(r.forwardRef)((function(e,t){var n=e.id,a=e.className,o=e.label,i=e.helpLabel,d=e.errorLabel,m=e.variant,f=void 0===m?"medium":m,v=e.inline,k=e.inverted,j=e.forceCompact,g=e.action,h=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["id","className","label","helpLabel","errorLabel","variant","inline","inverted","forceCompact","action"]),O=Object(r.useState)(n||"jkl-text-input-"+c(8))[0],x=Object(r.useState)("jkl-support-label-"+c(8))[0],y=i||d?x:void 0,w=s()({"jkl-text-input":!0,"jkl-text-input--inline":v,"jkl-text-input--inverted":k,"jkl-text-input--compact":j,"jkl-text-input--action":g},a);return l.a.createElement("div",{"data-testid":"jkl-text-input",className:w},l.a.createElement(u.a,{forceCompact:j,standAlone:!0,srOnly:v,htmlFor:O,variant:f},o),l.a.createElement("div",{className:"jkl-text-input__input-wrapper"},l.a.createElement(b,Object.assign({ref:t,id:O,describedBy:y,invalid:!!d},h)),g&&l.a.createElement(p.a,{className:"jkl-text-input__action-button",iconType:g.icon,buttonTitle:g.label,onClick:g.onClick,onFocus:g.onFocus,onBlur:g.onBlur})),l.a.createElement(u.c,{inverted:k,id:x,helpLabel:i,errorLabel:d,srOnly:v}))}));function v(e){var t=e.choiceValues,n=e.boolValues,a=Object(r.useState)(""),o=a[0],i=a[1],s=t&&t.Variant,c=n&&n.Inline,u=n&&n["Med handling"]?{icon:"clear",label:"Nullstill feltet",onClick:function(){return i("")}}:void 0,d=n&&n.Invertert,p=n&&n.Kompakt,m=n&&n["Med hjelpetekst"]?"Help label":void 0,b=n&&n["Med feilmelding"]?"Error label":void 0;return l.a.createElement(f,{variant:s,inline:c,inverted:d,forceCompact:p,action:u,label:"Skriv noe her",helpLabel:m,errorLabel:b,placeholder:"Placeholder",maxLength:35,value:o,onChange:function(e){return i(e.target.value)},onKeyDown:function(){return console.log("onKeyDown event")}})}function k(e){var t=e.choiceValues,n=e.boolValues,a=Object(r.useState)(""),o=a[0],i=a[1],s=t&&t.Variant,c=n&&n.Invertert,u=n&&n.Kompakt,p=n&&n.Ekspanderende,m=n&&n["Med hjelpetekst"]?"Help label":void 0,b=n&&n["Med feilmelding"]?"Error label":void 0;return l.a.createElement(d,{variant:s,inverted:c,forceCompact:u,placeholder:"Placeholder",helpLabel:m,errorLabel:b,className:"jkl-spacing--top-2",label:"Skriv noe her",autoExpand:p,value:o,onChange:function(e){return i(e.target.value)},onKeyDown:function(){return console.log("onKeyDown event")}})}f.displayName="TextInput";var j={},g=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)}},h=g("Ingress"),O=g("ComponentExample"),x={_frontmatter:j},y=o.a;function w(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["components"]);return Object(a.b)(y,Object.assign({},x,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(h,{mdxType:"Ingress"},"Vi bruker tekstfelt når vi vil at brukerne skal legge inn informasjon. Ledeteksten skal fortelle hva brukeren skal oppgi i feltet."),Object(a.b)(O,{component:v,knobs:{boolProps:["Inline","Kompakt","Invertert","Med handling","Med hjelpetekst","Med feilmelding"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:1}]},mdxType:"ComponentExample"}),Object(a.b)("p",null,"Tekstfelt godtar data med fast format eller fritekst. Fast format bruker du for eksempel når du vil at brukeren skal angi fødselsnummer eller et postnummer, mens fritekst passer til felt der brukerne skal fortelle noe med egne ord."),Object(a.b)("p",null,"Velg størrelse på tekstefelt etter typen data brukerne skal legge inn."),Object(a.b)("h2",null,"Typer tekstfelt"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Vanlige tekstfelt:"),"\nFor innhold som ikke overskrider lengden på feltet."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Inline tekstfelt:"),"\nTil spesialtilfeller, hvis vi for eksempel trenger å plassere et tekstfelt i en setning."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Lange tekstfelt:"),"\nNår innholdet blir lengre enn en setning. Høyden på feltet kan justeres."),Object(a.b)(O,{component:k,knobs:{boolProps:["Kompakt","Invertert","Ekspanderende","Med hjelpetekst","Med feilmelding"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:1}]},mdxType:"ComponentExample"}),Object(a.b)("h2",null,"Tekst og validering"),Object(a.b)("p",null,"Velg størrelse på ledetekst etter prinsippene for skjemadesign. Skriv en kort og tydelig ledetekst, som forteller brukerne hva de skal oppgi i feltet. Hvis det trengs, kan vi sette inn en hjelpetekst under feltet, som forklarer mer."),Object(a.b)("p",null,"Hvis tekstfeltet ikke validerer, vises en feilmelding som forteller hva som er galt. Vær oppmerskom på at feilmeldingen erstatter en eventuell hjelpetekst, slik at den feilmeldingen du lager også må fortelle hva hjelpeteksten var."),Object(a.b)("p",null,"Eksempel:\nHjelpetekst for et tekstfelt med fast format: ",Object(a.b)("em",{parentName:"p"},"Fyll ut fødselsnummer, 11 siffer.")," Feilemeldingstekst: ",Object(a.b)("em",{parentName:"p"},"Du må fylle ut fødselsnummer, 11 siffer"),"."))}w.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-text-input-react-documentation-text-input-mdx-dceb9683937eb9d2d76b.js.map