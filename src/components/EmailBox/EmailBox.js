import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import * as authActions from 'redux/modules/auth';

@connect(state => ({}))
export default class EmailBox extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired
  }

  handleSubmit = (event) => {
    const th = this;
    event.preventDefault();
    console.log(event);
  }

  render() {
    return (
      <form className="login-form form-inline" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <div>
            <input type="text" ref="email" placeholder="Email" className="form-control"/>
          </div>
          <div>
            <input type="password" ref="password" placeholder="Password" className="form-control"/>
            <input type="submit" style={{width: '0px', height: '0px', opacity: '0'}}/>
          </div>
        </div>
      </form>
    );
  }
}
