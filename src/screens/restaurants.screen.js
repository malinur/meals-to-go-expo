import React, { useContext, useState } from 'react'
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { Searchbar } from 'react-native-paper'
import styled from 'styled-components/native'
import RestaurantInfo from '../features/restaurants/restaurant-info.component'
import { Spacer } from '../components/spacer/spacer.component'
import { SafeArea } from '../components/utils/safe-area.component'
import { RestaurantsContext } from '../services/restaurants/mock/restaurants.context'

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``

const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const onChangeSearch = (query) => setSearchQuery(query)

  const { restaurants, isLoading, error } = useContext(RestaurantsContext)

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          console.log(item)
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfo restaurant={item} />
            </Spacer>
          )
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  )
}

export default RestaurantsScreen
