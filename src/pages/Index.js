import React, { Component } from "react";
import AnimatedWrapper from "./AnimatedWrapper";

class IndexComp extends Component {
    render() {
        return (
                <div>
                <h1>Index</h1>
                <p>Index</p>
                </div>
        );
    }
}

const Index = AnimatedWrapper(IndexComp);
export default Index;
