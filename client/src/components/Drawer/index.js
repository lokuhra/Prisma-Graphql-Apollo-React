import React, { Component } from 'react'

import { observer, inject } from 'mobx-react'

import {
  Drawer,
  DrawerHeader,
  DrawerContent,
  DrawerTitle,
  DrawerSubtitle,
  ListItem,
  List,
} from 'rmwc'

@inject('drawerStore')
@observer
class _Drawer extends Component {
  render() {
    const { drawerStore } = this.props
    return (
      <Drawer
        modal
        open={drawerStore.isOpen}
        onClose={() => drawerStore.toggle()}
      >
        <DrawerHeader>
          <DrawerTitle>DrawerHeader</DrawerTitle>
          <DrawerSubtitle>Subtitle</DrawerSubtitle>
        </DrawerHeader>
        <DrawerContent>
          <List>
            <ListItem>Cookies</ListItem>
            <ListItem>Pizza</ListItem>
            <ListItem>Icecream</ListItem>
          </List>
        </DrawerContent>
      </Drawer>
    )
  }
}
export default _Drawer
