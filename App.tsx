import { StyleSheet, View } from 'react-native';
import { Main } from './src/Main';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const date = new Date

  console.log(`App  ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`);

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Main />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: '#ffffff' } });
