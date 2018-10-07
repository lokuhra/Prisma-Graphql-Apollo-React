import React, { Component } from 'react'

import { observer, inject } from 'mobx-react'

import routes from '../../utils/routes'
import { Link } from 'buttermilk'

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
      const LinkItems = () =>(
          routes.map((item, i)=>
              <Link key={i} href={item.path} className={"no-underline"}>
                  <ListItem>{item.name}</ListItem>
              </Link>
          )
      )
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
              <LinkItems />
          </List>
        </DrawerContent>
      </Drawer>
    )
  }
}
export default _Drawer
