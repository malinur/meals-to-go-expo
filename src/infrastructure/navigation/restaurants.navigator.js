import React from 'react'

import RestaurantsScreen from '../../features/restaurants/screens/restaurants.screen'
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack'
import { Text } from 'react-native'
import RestaurantDetailScreen from '../../features/restaurants/screens/restaurant-detail.screen'

const RestaurantStack = createStackNavigator()

export default function RestaurantsNavigator(props) {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
      }}
    >
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  )
}
