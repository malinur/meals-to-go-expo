import React, { useContext } from 'react'
import { FavoritesContext } from '../../services/favorites/favorites.context'
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const FavoriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 26px;
  right: 26px;
  z-index: 9;
`

export default function Favorite({ restaurant }) {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext)

  const isFavorite = favorites.find((r) => r.placeId === restaurant.placeId)
  return (
    <FavoriteButton
      onPress={() =>
        !isFavorite
          ? addToFavorites(restaurant)
          : removeFromFavorites(restaurant)
      }
    >
      <AntDesign
        name={isFavorite ? 'heart' : 'hearto'}
        size={24}
        color={isFavorite ? 'red' : 'white'}
      />
    </FavoriteButton>
  )
}
