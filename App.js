import React from 'react'
import 'react-native-gesture-handler'

import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald'
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato'
import { ThemeProvider } from 'styled-components/native'

import { theme } from './src/infrastructure/theme'
import { RestaurantContextProvider } from './src/services/restaurants/mock/restaurants.context'
import { LocationContextProvider } from './src/services/location/location.context'
import Navigation from './src/infrastructure/navigation'
import { FavoritesContextProvider } from './src/services/favorites/favorites.context'

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  })

  const [latoLoaded] = useLato({
    Lato_400Regular,
  })

  if (!oswaldLoaded || !latoLoaded) return null

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavoritesContextProvider>
          <LocationContextProvider>
            <RestaurantContextProvider>
              <Navigation />
            </RestaurantContextProvider>
          </LocationContextProvider>
        </FavoritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  )
}
