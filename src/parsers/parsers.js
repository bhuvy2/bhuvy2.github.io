const Component = require('react').Component;
const _ = require('lodash');
const JSON5 = require('json5');
const BLOCK_ELEMENTS = require('../enums').BLOCK_ELEMENTS;
const parserMarkdownFactory = (type, builder, keysToWatch, renderFunc) => {
    const ret = {};
    ret.rendererMarkdown = (...vargs) => {
        const obj = {type: type};
        for (let [name, param] of _.zip(builder, vargs)) {
            obj[name] = param;
        }
        return JSON5.stringify(obj) + ',';
    };

    ret.match = (obj) => {
        if (obj.type == type) {
            return true;
        }
        return false;
    };

    ret.keys = keysToWatch;
    ret.render = renderFunc;
    return ret;
};

const dataMap = {
    codeRenderer: parserMarkdownFactory(
        BLOCK_ELEMENTS.CODE,
        ['code', 'language', 'escaped'],
        ['code']),
    blockquoteRenderer: parserMarkdownFactory(
        BLOCK_ELEMENTS.BLOCKQUOTE,
        ['quote'],
        ['quote']),
    htmlRenderer: parserMarkdownFactory(
        BLOCK_ELEMENTS.HTML,
        ['html'],
        []),
    headingRenderer: parserMarkdownFactory(
        BLOCK_ELEMENTS.HEADING,
        ['text', 'level', 'rawtext']
        ['text']),
    hrRenderer: parserMarkdownFactory(
        BLOCK_ELEMENTS.HR,
        [],
        []),
    listRenderer: parserMarkdownFactory(
        BLOCK_ELEMENTS.LIST,
        ['body', 'ordered', 'start'],
        ['body']),
    listitemRenderer: parserMarkdownFactory(
        BLOCK_ELEMENTS.LISTITEM,
        ['text'],
        ['text']),
    paragraphRenderer: parserMarkdownFactory(
        BLOCK_ELEMENTS.PARAGRAPH,
        ['text'],
        ['text']),
    tableRenderer: parserMarkdownFactory(
        BLOCK_ELEMENTS.TABLE,
        ['header', 'body'],
        ['header', 'body']),
    tablerowRenderer: parserMarkdownFactory(
        BLOCK_ELEMENTS.TABLEROW,
        ['content'],
        ['content']),
    tablecellRenderer: parserMarkdownFactory(
        BLOCK_ELEMENTS.TABLECELL,
        ['content', 'flags'],
        ['content']),
};

const parsers = _.values(dataMap);

const matchToParser = (jsObj) => {
    const idx = _.findIndex(parsers, e => e.match(jsObj));
    if (idx !== -1) {
        return parsers[idx];
    }
    return null;
};

if (module.exports) {
    module.exports.dataMap = dataMap;
    module.exports.matchToParser = matchToParser;
}

module.exports = {
    a: 1,
}
