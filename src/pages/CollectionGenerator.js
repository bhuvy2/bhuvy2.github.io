import React, { Component } from "react";
import content from '../md';
import {BLOCK_ELEMENTS} from '../enums';

const renderElem = (e, key) => {
    //TODO refactor the possible XSS
    switch(e.type) {
    case BLOCK_ELEMENTS.CODE:
        const codeHTML = {__html: e.code};
        return <code key={key} dangerouslySetInnerHTML={codeHTML}></code>;
    case BLOCK_ELEMENTS.BLOCKQUOTE:
        const code2 = {__html: e.text};
        return <div key={key} className='blockquote' dangerouslySetInnerHTML={code2}></div>;
    case BLOCK_ELEMENTS.HTML:
        const html = {__html: e.html};
        return <div key={key} dangerouslySetInnerHTML={html}></div>;
    case BLOCK_ELEMENTS.HEADING:
        return <h2 key={key}>{e.text}</h2>;
    case BLOCK_ELEMENTS.HR:
        return <div key={key} ></div>;
    case BLOCK_ELEMENTS.LIST:
        return <div key={key} ></div>;
    case BLOCK_ELEMENTS.LISTITEM:
        return <div key={key} ></div>;
    case BLOCK_ELEMENTS.PARAGRAPH:
        const para = {__html: e.text};
        return <p dangerouslySetInnerHTML={para}></p>;
    case BLOCK_ELEMENTS.TABLE:
        return <div key={key} ></div>;
    case BLOCK_ELEMENTS.TABLEROW:
        return <div key={key} ></div>;
    case BLOCK_ELEMENTS.TABLECELL:
        return <div key={key} ></div>;
    default:
        return <div key={key} ></div>;
    }
};


class MarkdownCard extends Component {
    render() {
        const card = this.props.card;
        if (card.length === 0) {
            return <div></div>;
        }
        return <div className='markdown-card'>{
            card.map(renderElem)
        }</div>;
    }
}

const MarkdownGenerator = (name) => class MarkdownGeneratorCls extends Component {
    render() {
        const page = content[name];
        return (
                <div>
                {
                    page.title !== null &&
                        <h1>
                        {page.title}
                    </h1>
                }
            {
                page.content.map((card, idx) =>
                                    (<MarkdownCard card={card} key={idx} />))
            }
            </div>
        );
    }
};

export default MarkdownGenerator;
