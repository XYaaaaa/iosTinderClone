import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import StackNavigator from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './hooks/useAuth';


export default function App() {
  return(
    <NavigationContainer>
      {/* higher order component */}
    <AuthProvider>
      {/* passes down the cool auth stuff to children.. */}
      <StackNavigator />
    </AuthProvider>
  </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
