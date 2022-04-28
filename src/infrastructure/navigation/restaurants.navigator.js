import React from 'react'
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack'

import RestaurantsScreen from '../../features/restaurants/screens/restaurants.screen'
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
        name="Restaurants1"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  )
}
