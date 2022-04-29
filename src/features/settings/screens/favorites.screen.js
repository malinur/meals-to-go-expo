import React, { useContext, useState } from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { ActivityIndicator, Colors } from 'react-native-paper'
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context'
import { FavoritesContext } from '../../../services/favorites/favorites.context'
import { SafeArea } from '../../../components/utils/safe-area.component'
import { Spacer } from '../../../components/spacer/spacer.component'
import RestaurantInfo from '../../restaurants/components/restaurant-info.component'
import { Text } from '../../../components/typography/text.component'
import { RestaurantList } from '../../restaurants/components/restaurant-list.styles'

const NoFavoritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`

export default function FavoritesScreen({ navigation }) {
  const { favorites } = useContext(FavoritesContext)

  return favorites.length ? (
    <SafeArea>
      <RestaurantList
        data={favorites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RestaurantDetail', { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfo restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          )
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavoritesArea>
      <Text>No favorites yet</Text>
    </NoFavoritesArea>
  )
}
