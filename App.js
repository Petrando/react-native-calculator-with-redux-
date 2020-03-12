import React, {Component} from 'react';
import { Provider } from 'react-redux';
import {
  View,    
} from 'react-native';
import styles from './css/styles';

import { createStore } from "redux";
import rootReducer from "./js/reducers";
import DisplayScreen from './DisplayScreen';
import Buttons from './Buttons';

class App extends Component{
	render(){
		return(
			<View style={styles.viewStyle}>	
				<DisplayScreen />
				<Buttons />
			</View>
		)
	}
}

const centerMe = {alignItems:'center', justifyContent:'center'}

const RNRedux = () => (
  <Provider store = { createStore(rootReducer) }>
    <App />
  </Provider>
)

export default RNRedux;