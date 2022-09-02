import { Button, Text, View } from 'react-native';
import { useAppNavigation } from '../types/types';

export function Home() {
  const navigation = useAppNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Users" onPress={() => {
        // navigation.navigate('Users', { name: '123', id: 1, isAdmin: true });
        navigation.navigate('Users');
      }} />
    </View>
  );
}
