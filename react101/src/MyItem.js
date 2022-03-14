import React from 'react';

class Item extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            clicks:0
        }
    }

    clickMe() {
        this.setState({
            clicks:this.state.clicks + 1
        })
    }

    render() {
      return(
          <div>
              <h1 onClick={() => this.clickMe()}>Hello from {this.props.name}</h1>
              <span> {this.state.clicks} is the number of clicks</span>
          </div>
      )
    }
  }




  export default Item;