import React from "react";
import ReactMarkdown from "react-markdown";

import Layout from "../../components/Layout";
import { Example } from "../../components/Example";
import { renderer } from "../../presentation/markdownRenderer";

/* Import readme fil with !raw-loader! */
// @ts-ignore
import readmeContents from "!raw-loader!@fremtind/jkl-accordion/README.md";
/* Import code to be rendered as example */
import { accordionExample } from "../../examples/AccordionExample";
/* Import components used in the example, and expose them in an object */
import { Accordion, AccordionItem } from "@fremtind/jkl-accordion-react";
const components = { Accordion, AccordionItem };

export default function Button() {
    return (
        <Layout>
            <h2 className="jkl-h1 portal-content__title">Trekkspilliste</h2>
            <Example exampleComponents={components} exampleCode={accordionExample} />
            <div style={{ margin: "2rem 0" }}>
                <ReactMarkdown renderers={renderer} source={readmeContents} />
            </div>
        </Layout>
    );
}
