import React from 'react'
import 'react-native-gesture-handler'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components/native'
import firebase from 'firebase/compat'

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald'
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato'

import { theme } from './src/infrastructure/theme'
import Navigation from './src/infrastructure/navigation'
import { AuthContextProvider } from './src/services/auth/auth.context'

const firebaseConfig = {
  apiKey: 'AIzaSyDC3MQB86MDW1TXUrOKxxEMhpfHuxUOuho',
  authDomain: 'mealstogo-c0f84.firebaseapp.com',
  projectId: 'mealstogo-c0f84',
  storageBucket: 'mealstogo-c0f84.appspot.com',
  messagingSenderId: '107111008336',
  appId: '1:107111008336:web:5d7f56c7dd3d7147072955',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

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
        <AuthContextProvider>
          <Navigation />
        </AuthContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  )
}
