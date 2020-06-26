/**
 * @format
 */
import React from 'react'
import { AppRegistry, StatusBar } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Root } from 'native-base';
const Myapp = () => (
    <Root>
        <StatusBar backgroundColor={"tomato"} />
        <App />
    </Root>
)
AppRegistry.registerComponent(appName, () => Myapp);
