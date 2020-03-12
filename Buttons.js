import React, { Component } from "react";
import {    
  View,  
  Text,  
  TouchableOpacity,
} from 'react-native';
import { connect } from "react-redux";
import { buttonPressed } from "./js/actions";
import styles from './css/styles';

export default class Buttons extends Component{
	render(){
			return(
				<View style={styles.btnContainerStyle}>
					<View style={styles.btnColStyle}>
						{[7,4,1,'C'].map((d,i)=><ConnectedButton key={i}>{d}</ConnectedButton>)}
					</View>
					<View style={styles.btnColStyle}>
						{[8,5,2,0].map((d,i)=><ConnectedButton key={i}>{d}</ConnectedButton>)}
					</View>
					<View style={styles.btnColStyle}>
						{[9,6,3,'.'].map((d,i)=><ConnectedButton key={i}>{d}</ConnectedButton>)}
					</View>
					<View style={styles.btnColStyle}>
						{['/','*','+','-','='].map((d,i)=><ConnectedButton key={i}>{d}</ConnectedButton>)}
					</View>
				</View>
		)
	}
}

function mapDispatchToProps(dispatch) {
  return {
    buttonPressed: buttonPayload => dispatch(buttonPressed(buttonPayload))
  };
}

function AButton(props){
	return(		
		<TouchableOpacity style={styles.buttonStyle}
			onPress={()=>props.buttonPressed({sign:props.children})}
		>
			<Text style={styles.btnLabelStyle}>{props.children}</Text>
		</TouchableOpacity>		
	)
}

const ConnectedButton = connect(
  null,
  mapDispatchToProps
)(AButton);