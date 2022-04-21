import React from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald'
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato'
import { Ionicons } from '@expo/vector-icons'

import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screen'
import { ThemeProvider } from 'styled-components/native'
import { theme } from './src/infrastructure/theme'
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeArea } from './src/components/utils/safe-area.component'
import { RestaurantContextProvider } from './src/services/restaurants/mock/restaurants.context'
import { LocationContextProvider } from './src/services/location/location.context'

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  })

  const [latoLoaded] = useLato({
    Lato_400Regular,
  })

  if (!oswaldLoaded || !latoLoaded) return null

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

  const screenOptions = ({ route }) => {
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
  const Map = () => (
    <SafeArea>
      <Text>Map</Text>
    </SafeArea>
  )

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantContextProvider>
            <NavigationContainer>
              <Tab.Navigator screenOptions={screenOptions}>
                <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
                <Tab.Screen name="Settings" component={Settings} />
                <Tab.Screen name="Map" component={Map} />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  )
}
