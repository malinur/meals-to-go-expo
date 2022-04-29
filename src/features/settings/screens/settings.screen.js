import React, { useContext } from 'react'
import { AuthContext } from '../../../services/auth/auth.context'
import { SafeArea } from '../../../components/utils/safe-area.component'
import { Avatar, List } from 'react-native-paper'
import styled from 'styled-components/native'
import { Spacer } from '../../../components/spacer/spacer.component'
import { Text } from '../../../components/typography/text.component'

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`
const AvatarContainer = styled.View`
  align-items: center;
`

export default function SettingsScreen({ navigation }) {
  const { onLogout, user } = useContext(AuthContext)

  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={180} icon="human" backgroundColor="#2182bd" />
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
