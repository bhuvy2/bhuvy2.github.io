import React, { Component } from "react";
import AnimatedWrapper from "./AnimatedWrapper";

class WritingComp extends Component {
    render() {
        return (
                <div>
                <h1>Writing</h1>
                <p>Writing</p>
                </div>
        );
    }
}

const Writing = AnimatedWrapper(WritingComp);
export default Writing;
