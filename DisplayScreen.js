import React, {Component} from 'react';
import { Text, View} from 'react-native';
import { connect } from "react-redux";
import styles from './css/styles';

const mapStateToProps = state => {
  return { display: state.display };
};

class Screen extends Component{
	render(){
			return(
				<View style={styles.viewStyle}>
					<Text style={styles.textStyle}>{this.props.display}</Text>
				</View>
		)
	}	
}

const DisplayScreen = connect(mapStateToProps)(Screen);

export default DisplayScreen;