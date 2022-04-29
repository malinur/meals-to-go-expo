import React from 'react'
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'
import SettingsScreen from '../../features/settings/screens/settings.screen'
import FavoritesScreen from '../../features/settings/screens/favorites.screen'

const SettingsStack = createStackNavigator()

export default function SettingsNavigator({ route, navigation }) {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerMode: 'screen',
      }}
    >
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="Settings1"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="Favorites" component={FavoritesScreen} />
    </SettingsStack.Navigator>
  )
}
