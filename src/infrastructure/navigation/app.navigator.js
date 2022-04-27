import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import { SafeArea } from '../../components/utils/safe-area.component'
import RestaurantsNavigator from './restaurants.navigator'
import MapScreen from '../../features/map/screens/map.screen'

export default function AppNavigator(props) {
  const Tab = createBottomTabNavigator()

  const TAB_ICON = {
    Restaurants: 'md-restaurant',
    Map: 'md-map',
    Settings: 'md-settings',
  }

  //ANOTHER WAY FOR tapBarIcon
  // const tapBarIcon =
  //   (iconName) =>
  //   ({ size, color }) =>
  //     <Ionicons name={iconName} size={size} color={color} />

  const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name]
    return {
      tabBarIcon: ({ color, size }) => (
        <Ionicons name={iconName} color={color} size={size} />
      ),
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    }
  }

  const Settings = () => (
    <SafeArea>
      <Text>Settings</Text>
    </SafeArea>
  )

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
        <Tab.Screen
          name="Map"
          options={{ headerShown: false }}
          component={MapScreen}
        />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
