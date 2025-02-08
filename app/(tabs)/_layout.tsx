import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { TabBar } from '../../components/TabBar'

const TabLayout = () => {
  return (
   <Tabs tabBar={props => <TabBar {...props} />}>
    <Tabs.Screen name='index' options={{title:"Home"}}/>
    <Tabs.Screen name='explore' options={{title:"Explore"}}/>
    <Tabs.Screen name='saved' options={{title:"Saved"}}/>
    <Tabs.Screen name='settings' options={{title:"Settings"}}/>
   </Tabs>

  )
}

export default TabLayout