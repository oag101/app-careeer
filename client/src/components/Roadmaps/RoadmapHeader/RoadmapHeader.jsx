/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Grid } from 'semantic-ui-react';
import ImageAvatar from './ImageAvatar';
import ClientName from './ClientName';
import ImageUpload from './ImageUpload';
import StatisticsLabel from './StatisticsLabel';
import { overlayStyle, columnStyle, nameVisionColumnStyle, statisticColumnStyle } from '../../Constants/RoadmapHeaderStyles';

@inject('roadmapElements', 'headerStore')@observer
class RoadmapHeader extends Component {
  state = {
    openInputForm: false,
  }

  handleAvatarSave = (avatarUrl) => {
    this.saveAvatar(avatarUrl);
  };

  saveAvatar = (avatarUrl) => {
    this.props.roadmapElements.updateClientAvatar(avatarUrl);
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.props.roadmapElements.updateClientVision();
      this.toggleVisionInput();
    }
  }

  handleLabelClick = (event) => {
    this.toggleVisionInput();
  }

  toggleVisionInput = () => {
    this.setState({
      openInputForm: !this.state.openInputForm,
    });
    this.props.roadmapElements.toggleCreateForm();
    this.props.roadmapElements.togglePlusButton();
  }

  render() {
    return (
      <Grid
        stackable
        doubling
      >
        <Grid.Column style={columnStyle}>
          <div style={overlayStyle}>
            <ImageAvatar
              avatar={this.props.roadmapElements.currentClientAvatar}
            />
          </div>
          <ImageUpload saveAvatarUrl={this.handleAvatarSave} />
        </Grid.Column>
        <Grid.Column
          style={nameVisionColumnStyle}
        >
          <ClientName
            vision={this.props.roadmapElements.currentClientVision}
            changeVision={this.props.roadmapElements.handleClientVisionChange}
            handleKeyPress={this.handleKeyPress}
            name={this.props.clientName}
            handleLabelClick={this.handleLabelClick}
            openInputForm={this.state.openInputForm}
          />
        </Grid.Column>

        <Grid.Column
          floated="right"
          style={statisticColumnStyle}
        >
          <StatisticsLabel
            numberCompleted={this.props.roadmapElements.completedElements.length}
            currentActions={this.props.roadmapElements.incompleteElements.length}
            numberOfNonEmpty={this.props.roadmapElements.nonEmptyStateRoadmaps}
            bannerVisible={this.props.roadmapElements.isBannerVisible}
          />
        </Grid.Column>

      </Grid>
    );
  }
}

export default RoadmapHeader;
