import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
    // hides the specific screens header. And also modify the name of the tab
    // tabs.screen edits the nav bars
  return (
    <Tabs>
        <Tabs.Screen
            name='index'
            options={{
                title: 'Home',
                headerShown: false
            }}
        />
        <Tabs.Screen
            name='search'
            options={{
                title: 'Search',
                headerShown: false
            }}
        />
        <Tabs.Screen
            name='saved'
            options={{
                title: 'Saved',
                headerShown: false
            }}
        />
        <Tabs.Screen
            name='profile'
            options={{
                title: 'Profile',
                headerShown: false
            }}
        />
    </Tabs>
  )
}

export default _layout