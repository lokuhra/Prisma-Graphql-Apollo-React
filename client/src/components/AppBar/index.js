import React, { Component } from 'react'

import { observer, inject } from 'mobx-react'

import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarNavigationIcon,
  TopAppBarActionItem,
  TopAppBarTitle,
} from 'rmwc'

@inject('drawerStore')
@observer
class AppBar extends Component {
  render() {
    const { drawerStore } = this.props;
    return (
      <TopAppBar>
        <TopAppBarRow>
          <TopAppBarSection alignStart>
            <TopAppBarNavigationIcon
              icon="menu"
              onClick={() => drawerStore.toggle()}
            />
            <TopAppBarTitle>{drawerStore.name}</TopAppBarTitle>
          </TopAppBarSection>
          <TopAppBarSection alignEnd>
            <TopAppBarActionItem aria-label="Download" alt="Download">
              file_download
            </TopAppBarActionItem>
            <TopAppBarActionItem
              aria-label="Print this page"
              alt="Print this page"
            >
              print
            </TopAppBarActionItem>
            <TopAppBarActionItem
              aria-label="Bookmark this page"
              alt="Bookmark this page"
            >
              bookmark
            </TopAppBarActionItem>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
    )
  }
}
export default AppBar
