import { Text, View } from 'react-native';
import { MainDetailPropsType, MainDetailPropsType2 } from '../../types/types';



export function MainDetails({ route }: MainDetailPropsType) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>user id: {route.params.id}</Text>
    </View>
  );
}


// написать лошинизацию два инпута и кнопка 123 123
// после пароля экраны с тремя табами
// home users settings
//в сеттингах навигация по другим трем экранам


// сделать загроузку через пропил прелоудер



// react native debugger CHECK
