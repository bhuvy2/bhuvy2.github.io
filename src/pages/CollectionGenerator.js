import React, { Component } from "react";
import content from '../md';
import _ from 'lodash';
import { Link, } from 'react-router-dom';

const CollectionGenerator = (filterFunc) => class CollectionGeneratorCls extends Component {
    render() {
        const relevant = _.pickBy(content, filterFunc);
        console.log(relevant);
        const keys = [];
        for (let key in relevant) {
            keys.push(key);
        }
        return <div>
                {Object.keys(relevant).map((key, idx) => {
                    return <Link to={'/' + key} key={idx} className='nav-link'>{relevant[key].title}</Link>;
                })}
        </div>;
    }
};

export default CollectionGenerator;
