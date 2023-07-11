import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routes from "./navigation/navigation"
import { BasketProvider } from './context/basketContext';

export default function App() {
  return (
    <View style={styles.container}>
      <BasketProvider>
        <Routes />
      </BasketProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
