import React, { useContext, useEffect, useState } from 'react'
import { Searchbar } from 'react-native-paper'
import styled from 'styled-components/native'
import { View } from 'react-native'
import { LocationContext } from '../../../services/location/location.context'

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`

export default function Search(props) {
  const { keyword, search } = useContext(LocationContext)
  const [searchKeyword, setSearchKeyword] = useState(keyword)

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword)
        }}
        onChangeText={(text) => {
          setSearchKeyword(text)
        }}
      />
    </SearchContainer>
  )
}
