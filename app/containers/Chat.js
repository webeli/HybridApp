import React from 'react';
import { connect } from 'react-redux';
import PageRouter, { Route } from '../components/PageRouter';
import PageWithNav from '../components/PageWithNav';
import ChatIndex from './Chat/ChatIndex';
import ChatConversation from './Chat/ChatConversation';

var Chat = React.createClass({
  render() {
    return (
      <PageWithNav style={this.props.style}>
        <PageRouter currentPath={this.props.pageCurrentPath} previousPath={this.props.pagePreviousPath}>
          <Route path="/" handler={ChatIndex} />
          <Route path="/conversations/:cid" handler={ChatConversation} />
        </PageRouter>
      </PageWithNav>
    );
  }
});

export default connect(state => ({
  pageHistory: state.appPage.history[state.appTab.appTabIndex],
  pageCurrentPath: state.appPage.currentPath,
  pagePreviousPath: state.appPage.previousPath
}))(Chat);