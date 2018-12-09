import React, { Component } from "react";
import content from '../md';

const MarkdownGenerator = (name) => class MarkdownGeneratorCls extends Component {
    render() {
        return (
                <div>
                {JSON.stringify(content[name])}
            </div>
        );
    }
};

export default MarkdownGenerator;
