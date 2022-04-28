import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import AppNavigator from './app.navigator'
import { AuthContext } from '../../services/auth/auth.context'
import AccountNavigator from './account.navigator'

export default function Navigation(props) {
  const { isAuth } = useContext(AuthContext)
  return (
    <NavigationContainer>
      {isAuth ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  )
}
