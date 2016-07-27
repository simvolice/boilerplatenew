import React, {Component} from 'react';
import ReactDisqusThread from 'react-disqus-thread';

export default class DisqusCommentingTwo extends Component {
  handleNewComment (comment) {
        console.log(comment.text);
    }

  render() {
    return (
      <ReactDisqusThread
          shortname="nurotansite"
          identifier="nurotansite-two"
          title="Nurotan Website Thread Two"
          url="http://46.101.144.160/disquscommentingtwo"
          onNewComment={this.handleNewComment}/>
    );
  }
}
