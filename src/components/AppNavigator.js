import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreen} from '../screens/HomeScreen';
import {PostScreen} from '../screens/PostScreen';
import {THEME} from '../theme';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: THEME.COLORS.MAIN_LIGHT,
          },
          headerTintColor: THEME.COLORS.WHITE,
        }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{title: 'Главная'}}
        />
        <Stack.Screen
          name="PostScreen"
          component={PostScreen}
          options={{title: 'Пост'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
