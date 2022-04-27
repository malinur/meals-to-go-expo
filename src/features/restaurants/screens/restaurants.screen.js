import React, { useContext, useState } from 'react'
import { FlatList, Pressable, TouchableOpacity } from 'react-native'
import { ActivityIndicator, Colors } from 'react-native-paper'
import styled from 'styled-components/native'
import RestaurantInfo from '../components/restaurant-info.component'
import { Spacer } from '../../../components/spacer/spacer.component'
import { SafeArea } from '../../../components/utils/safe-area.component'
import { RestaurantsContext } from '../../../services/restaurants/mock/restaurants.context'
import Search from '../components/search.component'
import { FavoritesContext } from '../../../services/favorites/favorites.context'
import FavoritesBar from '../../../components/favorites/favorites-bar.component'

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`

const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext)
  const { favorites } = useContext(FavoritesContext)

  const [isToggled, setIsToggled] = useState(false)
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search
        isFavoritesToggled={isToggled}
        onFavoritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />
      )}
      <RestaurantList
        data={restaurants}
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
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  )
}

export default RestaurantsScreen
