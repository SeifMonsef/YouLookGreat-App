import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ReduxToastr from 'react-redux-toastr';
import PropTypes from 'prop-types';
import { Sidebar } from 'semantic-ui-react';
import { closeMenu } from './components/Bar/actions';
import { isMenuVisible } from './components/Bar/reducer';
import SideMenu from './views/SideMenu/index';
import Bar from './components/Bar/Bar.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.hideSidebar = this.hideSidebar.bind(this);
    this.getBar = this.getBar.bind(this);
  }
  getBar(){
    if(this.props.location.pathname ==='/cart'){
   return(   <div>
        {this.props.children}
        </div>
   )
    }
    else
    {
  return(    <div>
        <Bar />
        {this.props.children}
      </div>
  )
    }
  }
  hideSidebar() {
    if (this.props.sideMenuVisible) {
      this.props.closeMenu();
    }
  }

  render() {
    return (
      <div className="bigger" >
        <ReduxToastr
          timeOut={4000}
          newestOnTop
          preventDuplicates
          position="top-center"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
        />
        <SideMenu isVisible={this.props.sideMenuVisible} closeMenu={this.props.closeMenu} />
        <Sidebar.Pusher dimmed={this.props.sideMenuVisible} onClick={this.hideSidebar} >
        {this.getBar()}
        </Sidebar.Pusher>
      </div>
    );
  }
}

App.propTypes = {
  sideMenuVisible: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
const mapStateToProps = state => ({
  sideMenuVisible: isMenuVisible(state.navbar),
});
App.defaultProps = {
  children: null,
};
export default withRouter(connect(
  mapStateToProps,
  { closeMenu },
)(App));
