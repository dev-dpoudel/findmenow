/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Button} from 'react-native-elements/dist/buttons/Button';
import {ThemeProvider} from 'react-native-elements';

const HomeScreen = ({navigation}: any) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
    />
  );
};
const ProfileScreen = ({navigation, route}: any) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

const App = () => {
  const isDarkMode = useColorScheme() !== 'dark';
  const Stack = createStackNavigator();

  return (
    // <NavigationContainer>
      <SafeAreaProvider>
        <ThemeProvider useDark={isDarkMode}>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{title: 'Welcome'}}
            />
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </Stack.Navigator>
        </ThemeProvider>
      </SafeAreaProvider>
    // </NavigationContainer>
  );
};

export default App;
