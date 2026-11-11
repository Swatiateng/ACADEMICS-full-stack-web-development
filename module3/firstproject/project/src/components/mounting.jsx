import React, { Component } from 'react';

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            seconds: 0
        };
    }

    componentDidMount() {
        console.log("componentDidMount :");
    }
}

componentDidMount() {
    this.timer = setInterval(() => {
        this.setState((prevState) => ({
            seconds: prevState.seconds + 1
        }));
    }, 1000);
}

componentDidUpdate(prevprops,prevstate){
    console.log("component did update");
}

componentWillUnmount(){
    clearInterval
}