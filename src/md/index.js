import indexContent from './index.md';
import yearnSeaContent from './yearn_sea.md';
import * as JSON5 from 'json5';
import {BLOCK_ELEMENTS} from '../enums';
import * as _ from 'lodash';

const keysToUnpack = (e) => {
    switch(e.type) {
    case BLOCK_ELEMENTS.CODE:
        return ['code'];
    case BLOCK_ELEMENTS.BLOCKQUOTE:
        return ['quote'];
    case BLOCK_ELEMENTS.HTML:
        return [];
    case BLOCK_ELEMENTS.HEADING:
        return ['text'];
    case BLOCK_ELEMENTS.HR:
        return [];
    case BLOCK_ELEMENTS.LIST:
        return ['body'];
    case BLOCK_ELEMENTS.LISTITEM:
        return ['text'];
    case BLOCK_ELEMENTS.PARAGRAPH:
        return ['text'];
    case BLOCK_ELEMENTS.TABLE:
        return ['header', 'body'];
    case BLOCK_ELEMENTS.TABLEROW:
        return ['content'];
    case BLOCK_ELEMENTS.TABLECELL:
        return ['content'];
    default:
        return [];
    }
};

// Configuration as code
const processFile = (file, content) => {
    let firstLevel = JSON5.parse(`[${content}]`);
    for (let e of firstLevel) {
        const keys = keysToUnpack(e);
        for (let k of keys) {
            try {
                e[k] = JSON5.parse(`[${e[k]}]`);
            } catch (err) {
            }
        }
    }
    const headerFunctor = (e) => e.type !== BLOCK_ELEMENTS.HEADING;
    const mainHeading = (e) => !headerFunctor(e) && e.level === 1;
    const idx = _.findIndex(firstLevel, mainHeading);
    let title = null;
    if (idx !== -1) {
        title = firstLevel[idx].rawtext;
        firstLevel = _.filter(firstLevel, (e) => !mainHeading(e));
    }

    const cumHeader = _.reduce(firstLevel, (acc, n) => {
        acc.push(
            (acc.length === 0 ? 0 :
             (acc[acc.length-1] + (headerFunctor(n) ? 1 : 0))));
        return acc;
    }, []);

    const bodyPartition = _.partition(_.zip(firstLevel, cumHeader),
                            (e, l) => l).map(
                                e => e.map(j => j[0])).filter(
                                    e => e.length !== 0);

    return {content: bodyPartition, title: title};
};

const addTagsToFile = (fname, contentInQ, args) => {
    const ret = processFile(fname, contentInQ);
    for (let key in args) {
        ret[key] = args[key];
    }
    const ret2 = {};
    ret2[fname] = ret;
    return ret2;
};

const exports = {
    ...addTagsToFile('index', indexContent, {type: 'misc'}),
//    ...addTagsToFile('yearn_sea', yearnSeaContent, {type: 'writing'})
};

export default exports;
