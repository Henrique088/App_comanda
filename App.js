import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/';
import { StatusBar } from 'react-native';
import styles from './style';


function App() {
  return (
    <NavigationContainer>    
        <StatusBar style={styles.Status}/>
        <Routes/>    
    </NavigationContainer>
  );
}

export default App;