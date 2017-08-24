import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Grid } from 'semantic-ui-react';
import ImageAvatar from './ImageAvatar';
import ClientName from './ClientName';
import ImageUpload from './ImageUpload';

const overlayStyle = {
  position: 'absolute',
};

@inject('roadmapElements', 'headerStore')@observer
class ClientHeader extends Component {
  componentWillMount() {
    const { avatarUrl } = this.props.headerStore;
    if (avatarUrl) {
      this.props.roadmapElements.updateClientAvatar(avatarUrl);
    }
  }
  render() {
    return (
      <Grid.Row>
        <div style={overlayStyle}>
          <ImageAvatar avatar={this.props.roadmapElements.currentClientAvatar} />
          <ClientName name={this.props.value} />
        </div>
        <ImageUpload />
      </Grid.Row>
    );
  }
}

export default ClientHeader;