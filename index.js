/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/App';
import MainApp from './src/MainApp';
import {name as appName} from './app.json';
import CallApi from './src/CallApi';

AppRegistry.registerComponent(appName, () => MainApp);
