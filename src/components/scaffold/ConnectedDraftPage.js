import React, { Component } from 'react';
import { connect } from 'react-redux';
import DraftPageScaffold from './DraftPageScaffold';

class ConnectedDraftPage extends Component {
    render() {
        return(
            <DraftPageScaffold structure={this.props.structure} title={this.props.title} />
        );
    }
}

const mapStateToProps = ({ structure, title }) => ({ structure, title });

export default connect(mapStateToProps, null)(ConnectedDraftPage);