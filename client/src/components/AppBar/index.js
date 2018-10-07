import React, { Component } from 'react'

import { observer, inject } from 'mobx-react'

import {
    SimpleTopAppBar
} from 'rmwc'

@inject('drawerStore')
@observer
class AppBar extends Component {
  render() {
    const { drawerStore } = this.props;
    return (
        <SimpleTopAppBar
            title={drawerStore.name}
            navigationIcon={{ onClick: () => drawerStore.toggle() }}
            actionItems={[
                { onClick: () => console.log('Do Something'), use: 'file_download' },
                { onClick: () => console.log('Do Something'), use: 'print' },
                { onClick: () => console.log('Do Something'), use: 'bookmark' }
            ]}
        />
    )
  }
}
export default AppBar
