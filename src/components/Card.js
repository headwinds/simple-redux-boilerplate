import React, { Component, PropTypes } from 'react';

export default class Card extends Component {
  
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount(){

  }

  componentWillUpdate(nextProps, nextState){
    
  }
  
  componentDidUpdate(prevProps, prevState){
    
  }

  render() {

    // To use a file path like this, you could use the webpack copy plugin and move the asset from the src directory to the dist 
    // const notWebpackImg = "screenshot.png";

    const images = [require("../images/githubEven2.png"), 
                  require("../images/githubOdd0.png"), 
                  require("../images/githubOdd2.png"), 
                  require("../images/githubOdd1.png"), 
                  require("../images/githubEven1.png"), 
                  require("../images/githubOdd2.png")];

    /*
      Note: it's not possible to pass in a variable into require to loop and build up an array of images by incrementing a number.
      good article: http://www.davidmeents.com/how-to-set-up-webpack-image-loader/

      This demonstrates the difference between packing your images versus serving them from a static directory.

      see devServer - app.use(express.static('static')); - this line configures the server to serve images
      see this artice: http://www.davidmeents.com/how-to-set-up-webpack-image-loader/
         
    */

    const imgIndex = this.props.counter < 5 && this.props.counter > -1  ? this.props.counter : 0;
    const requireImgPath = images[ imgIndex ];
   
    return (
      <div className="card-container">
        <div className="card">
          <img width="200" src={requireImgPath} />
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  counter: PropTypes.number.isRequired,
};
