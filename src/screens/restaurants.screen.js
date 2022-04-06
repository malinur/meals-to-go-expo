import React, { useState } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { Searchbar } from 'react-native-paper'
import styled from 'styled-components/native'
import RestaurantInfo from '../features/restaurants/restaurant-info.component'

const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const onChangeSearch = (query) => setSearchQuery(query)

  const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  `
  const SearchContainer = styled(View)`
    padding: ${(props) => props.theme.space[3]};
  `
  const RestaurantListContainer = styled(View)`
    flex: 1;
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.primary};
  `

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfo />
      </RestaurantListContainer>
    </SafeArea>
  )
}

export default RestaurantsScreen
