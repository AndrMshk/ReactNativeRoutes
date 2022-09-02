import { FlatList, ListRenderItem, Text, TouchableOpacity, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainDetailPropsType, NestedStack, useAppNavigation } from '../../types/types';
import { arr, objType } from '../../../data/data';

const Stack = createNativeStackNavigator<NestedStack>();

export function Main2() {

  const navigation = useAppNavigation();



  const render: ListRenderItem<objType> = ({ item }) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Users2', { screen: 'MainDetails', params: { id: item.id } });
          }}
        >
          <Text>{item.name}</Text>
          <Text>{item.age}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        data={arr}
        renderItem={render}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}
