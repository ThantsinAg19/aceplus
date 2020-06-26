/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import Add from './src/container/app';
import History from './src/container/history';
import { SAVE, HISTORY, SETTING } from './src/util/route';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import RootReducer from './src/module'
const store = createStore(RootReducer, applyMiddleware(thunk))

function Setting() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Setting</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator();

const Pages = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={SAVE} component={Add} />
        <Tab.Screen name={HISTORY} component={History} />
        <Tab.Screen name={SETTING} component={Setting} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={"tomato"} />
      <Pages />
    </Provider>
  )
};


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
