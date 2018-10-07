import React from 'react'
import { Provider } from 'mobx-react'
import Drawer from './drawer'

const drawerStore = new Drawer()

const stores = {
  drawerStore,
}

const MobXProvider = ({ children }) => (
  <Provider {...stores}>{children}</Provider>
)

export default MobXProvider
