
const marked = require("marked");
const renderer = new marked.Renderer();
const JSON5 = require('json5');
const _ = require('lodash');
const enums = require('../src/enums');
const BLOCK_ELEMENTS = enums.BLOCK_ELEMENTS;
const INLINE_ELEMENTS = enums.INLINE_ELEMENTS;

const jsonFactory = (type, ...builder) => (...vargs) => {
    const obj = {type: type};
    for (let [name, param] of _.zip(builder, vargs)) {
        obj[name] = param;
    }
    return JSON5.stringify(obj) + ',';
};


renderer.code = jsonFactory(BLOCK_ELEMENTS.CODE, 'code', 'language', 'escaped');
renderer.blockquote = jsonFactory(BLOCK_ELEMENTS.BLOCKQUOTE, 'quote');
renderer.html = jsonFactory(BLOCK_ELEMENTS.HTML, 'html');
renderer.heading = jsonFactory(BLOCK_ELEMENTS.HEADING, 'text', 'level', 'rawtext');
renderer.hr = jsonFactory(BLOCK_ELEMENTS.HR, );
renderer.list = jsonFactory(BLOCK_ELEMENTS.LIST, 'body', 'ordered', 'start');
renderer.listitem = jsonFactory(BLOCK_ELEMENTS.LISTITEM, 'text');
renderer.paragraph = jsonFactory(BLOCK_ELEMENTS.PARAGRAPH, 'text');
renderer.table = jsonFactory(BLOCK_ELEMENTS.TABLE, 'header', 'body');
renderer.tablerow = jsonFactory(BLOCK_ELEMENTS.TABLEROW, 'content');
renderer.tablecell = jsonFactory(BLOCK_ELEMENTS.TABLECELL, 'content', 'flags');

/*
renderer.strong = jsonFactory(INLINE_ELEMENTS.STRONG, 'text');
renderer.em = jsonFactory(INLINE_ELEMENTS.EM, 'text');
renderer.codespan = jsonFactory(INLINE_ELEMENTS.CODESPAN, 'code');
renderer.br = jsonFactory(INLINE_ELEMENTS.BR, );
renderer.del = jsonFactory(INLINE_ELEMENTS.DEL, 'text');
renderer.link = jsonFactory(INLINE_ELEMENTS.LINK, 'href', 'title', 'text');
renderer.image = jsonFactory(INLINE_ELEMENTS.IMAGE, 'href', 'title', 'text');
renderer.text = jsonFactory(INLINE_ELEMENTS.TEXT, 'text');
*/
module.exports = renderer;
