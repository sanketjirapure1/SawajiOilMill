
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { store } from './src/store';
import { Provider } from 'react-redux';

const ReduxExample = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxExample);












/**
 * @format
 */
// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
// import 'react-native-gesture-handler';
// AppRegistry.registerComponent(appName, () => App);

// index.js

