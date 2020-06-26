(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{Falt:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return m})),t.d(n,"default",(function(){return c}));t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("1c7q");var r=t("mXGw"),a=t.n(r),i=t("/FXl"),o=t("7XvJ"),s=t("ZMKu"),l=(t("re6i"),function(){return a.a.createElement("div",{className:"wrapper jkl-portal-paragraph"},a.a.createElement("div",{className:"example-container"},a.a.createElement(s.b.div,{whileHover:{scale:1.15},whileTap:{rotate:45,scale:.95}})))});var m={},p={_frontmatter:m},d=o.a;function c(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(i.b)(d,Object.assign({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Bevegelse er et av hovedprinsippene bak profilen til Fremtind. Men animasjon er ikke lett. Frem til nå har vi stort sett basert oss på enkle transformasjoner i ren CSS.\nNår man skal gjøre mer animasjon, på større deler av applikasjonen blir det litt kronglete å gjøre alt for hånd i CSS. Det finnes utallige javascript bibliotek for å forbedre utvikleropplevelsen rundt animasjon.\nEn av de nyere alternativene er ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://www.framer.com/motion/"}),"Framer Motion"),". Det er arvtageren til Pose fra Popmotion, en av de mest populære og likte animasjonsbibilotekene der ute. De fleste animasjonsbibilotekene har en tendens til\nå bli veldig imperative, så det parrer ikke så pent med øvrig React kode. Framer Motion derimot er først og fremst deklarativt, selvom du har muligheten til å være imperativ om du må."),Object(i.b)(l,{mdxType:"Example"}),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"<motion.div\n    whileHover={{ scale: 1.15 }}\n    whileTap={{ rotate: 45, scale: 0.95 }}\n/>\n")),Object(i.b)("p",null,"APIet til Framer Motion er relativt enkelt å sette seg inn i, og gir mange mulighter til å lage interaktive animasjoner. I eksemplet over er det enkle bevelgelser på hover og tap.\nDisse blir oversatt til inline style, og så langt det er mulig blir det performant, gpu akselererte, 60 fps css transisjoner. Bibliotektet baserer seg på noen få kompontenter og noen utility hooks.\nStort sett så kan du gjøre det meste du trenger av enkle animasjoner med ",Object(i.b)("inlineCode",{parentName:"p"},"motion.{htmlElement}"),", og ",Object(i.b)("inlineCode",{parentName:"p"},"AnimatePresence"),". AnimatePresence gir muligheten til å lage exit animasjoner, noe som alltid har vært en\nutfordring i HTML."),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),'<AnimatePresence>\n    {isOpen &&\n        filteredItems.map((item) => (\n            <motion.li\n                key={item.title}\n                initial={{ y: -60, opacity: 0 }}\n                animate={{ y: 0, x: 0, opacity: 1, transition: { duration: 0.25, delay: 0.2 } }}\n                exit={{ x: 10, opacity: 0, transition: { duration: 0.25 } }}\n                className="jkl-portal-full-screen-menu-item"\n            >\n                <FullScreenMenuItem path={item.path} title={item.title} />\n            </motion.li>\n        ))}\n</AnimatePresence>\n')),Object(i.b)("p",null,"Dette er animasjonen til hovedmenyen her i portalen. Initial er ikke overaskende startverdien til animasjonen. Denne kan være false, om du ikke vil at første render skal animere noe.\nAnimate blir overgangen fra intital staten, til elementet er klart. Her er det også spesifisert noe rundt hvor lenge animasjonen skal vare og et lite delay. Exit spesifiserer hvordan\nanimasjonen ut av DOMet skal være. Noen viktige punkter med dette er at ",Object(i.b)("inlineCode",{parentName:"p"},"motion")," må være første child av ",Object(i.b)("inlineCode",{parentName:"p"},"AnimatePresence"),", dette kravet kommer nok til å forsvinne etterhvert, men\nsånn React virker per 16.12.0 må AnimatePresence og motion følge etter hverandre. Det er også viktig med unik key, ikke index, for at Framer Motion skal holde kontroll på elementene."),Object(i.b)("p",null,'Noen ganger så må du programatisk sette igang animasjonen, da må du til med litt imperativitet, men vi kan pakke det inn på en måte som fortsatt gir mening i React-verden. I sidemenyen ønsker vi\nå animere innholdet i menyen ut med det gamle og inn med de nye når du bytter fra feks "Kompontenter" til "Kom i gang".'),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),'const controls = useAnimation();\n\nuseEffect(() => {\n    (async () => {\n        await controls.start({ x: 0, opacity: 0, transition: { duration: 0.1 } });\n        await controls.start({ x: -200, opacity: 0, transition: { duration: 0.2 } });\n        await controls.start({ x: 0, opacity: 1, transition: { duration: 0.2 } });\n    })();\n}, [currentSection, controls]);\n\nreturn (\n    <motion.ul animate={controls} className="jkl-portal-sidebar-menu__items">\n        <Menu items={items} />\n    </motion.ul>\n);\n')),Object(i.b)("p",null,"Så når ",Object(i.b)("inlineCode",{parentName:"p"},"currentSection")," endrer seg, så sparker vi igang en async funksjon som starter animasjonssekvensen med objektet vi får tilbake fra useAnimation hooken.\nVi kobler den til riktig motion element med å sende inn objektet i animate propen. Det gjør at man kan ganske enkelt orkistrere kompliserte animasjoner."),Object(i.b)("p",null,"Så langt jeg holdt på med Framer Motion virker det til å være en lovende løsning for å få på plass bevegelsen som Fremtind profilen trenger. Det er fortsatt mye igjen å sette seg inn i,\nfor å se om dette kan være en god løsning for flere av applikasjonene våre, og om vi skal kunne tilby standardiserte varianter igjenom Jøkul feks. God dokumentasjon, god utvikleropplevelse\nog bra resultat, gjør at jeg syns det er verdt å jobbe videre med Framer Motion."))}c.isMDXComponent=!0},re6i:function(e,n,t){}}]);
//# sourceMappingURL=component---src-texts-blog-framer-motion-framer-motion-mdx-7379dd47c32ed00ddb71.js.map