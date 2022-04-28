import React, { useContext } from 'react'
import { Text, Button } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import { SafeArea } from '../../components/utils/safe-area.component'
import RestaurantsNavigator from './restaurants.navigator'
import MapScreen from '../../features/map/screens/map.screen'
import { AuthContext } from '../../services/auth/auth.context'
import { FavoritesContextProvider } from '../../services/favorites/favorites.context'
import { LocationContextProvider } from '../../services/location/location.context'
import { RestaurantContextProvider } from '../../services/restaurants/restaurants.context'

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
    headerShown: false,
  }
}

const Settings = () => {
  const { onLogout } = useContext(AuthContext)

  return (
    <SafeArea>
      <Text>Settings</Text>
      <Button title="logout" onPress={() => onLogout()} />
    </SafeArea>
  )
}

export default function AppNavigator(props) {
  return (
    <FavoritesContextProvider>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen
              name="Map"
              options={{ headerShown: false }}
              component={MapScreen}
            />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </RestaurantContextProvider>
      </LocationContextProvider>
    </FavoritesContextProvider>
  )
}
