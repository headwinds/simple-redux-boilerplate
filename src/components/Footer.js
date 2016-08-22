import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <span id="footer-text-wrap">
        <a href="https://github.com/tsaiDavid/simple-redux-boilerplate">original</a> || <a href="https://github.com/headwinds/simple-redux-boilerplate">fork</a>
        </span>
      </footer>
    );
  }
}
