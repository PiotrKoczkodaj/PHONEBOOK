import React, { Component } from "react";
export class Filter extends Component{

    render() {
        const {filterFnc} = this.props
        return (
            <input onChange={filterFnc}/>
        )
    }
}