import { Button, Text, View } from 'react-native';
import { useAppNavigation, UsersPropsType } from '../types/types';

// export function Users({ route }: UsersPropsType) {


export function Users() {

  const navigation = useAppNavigation();

  // const params = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Users</Text>
      <Button title="Users" onPress={() => {
        navigation.navigate('Users2');
      }} />
      {/*{params && <>*/}
      {/*  <Text>{params.name}</Text>*/}
      {/*  <Text>{params.id}</Text>*/}
      {/*  <Text>{params.isAdmin ? 'da' : 'net'}</Text>*/}
      {/*</>}*/}
    </View>
  );
}


//сложная типизация пропсов
//нельзя навигацию выполнять через кнопку на экране
