import React, {Component} from 'react';
import ReactDisqusThread from 'react-disqus-thread';

export default class DisqusCommentingOne extends Component {
  handleNewComment (comment) {
        console.log(comment.text);
    }

  render() {
    return (
      <ReactDisqusThread
          shortname="nurotansite"
          identifier="nurotansite-one"
          title="Nurotan Website Thread one"
          url="http://46.101.144.160/disquscommentingone"
          onNewComment={this.handleNewComment}/>
    );
  }
}
