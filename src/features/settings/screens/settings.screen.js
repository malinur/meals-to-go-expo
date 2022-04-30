import React, { useContext, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Avatar, List } from 'react-native-paper'
import styled from 'styled-components/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { AuthContext } from '../../../services/auth/auth.context'
import { SafeArea } from '../../../components/utils/safe-area.component'
import { Spacer } from '../../../components/spacer/spacer.component'
import { Text } from '../../../components/typography/text.component'
import { useFocusEffect } from '@react-navigation/native'

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`
const AvatarContainer = styled.View`
  align-items: center;
`

export default function SettingsScreen({ navigation }) {
  const { onLogout, user } = useContext(AuthContext)
  const [photo, setPhoto] = useState(null)

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`)
    setPhoto(photoUri)
  }
  useFocusEffect(
    React.useCallback(() => {
      getProfilePicture(user)
    }, [user])
  )

  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
          {photo ? (
            <Avatar.Image size={180} source={{ uri: photo }} />
          ) : (
            <Avatar.Icon size={180} icon="human" backgroundColor="#2182bd" />
          )}
        </TouchableOpacity>
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favorites"
          description="View your favorites"
          onPress={() => navigation.navigate('Favorites')}
          left={(props) => <List.Icon {...props} icon="heart" color="black" />}
        />
        <SettingsItem
          title="Logout"
          onPress={onLogout}
          left={(props) => <List.Icon {...props} icon="door" color="black" />}
        />
      </List.Section>
    </SafeArea>
  )
}
