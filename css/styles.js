import {StyleSheet} from 'react-native';

const centerMe = {alignItems:'center', justifyContent:'center'}

const styles = StyleSheet.create({
	viewStyle : {flex:1, alignItems:'center', justifyContent:'flex-end'},
	textStyle : {marginBottom:10, fontWeight:'bold', fontSize:40, textAlign:'right', marginRight:10},
	buttonStyle : { flex:1, marginBottom:3, marginTop:3, paddingLeft:'37.5%', paddingRight:'37.5%', ...centerMe, backgroundColor: '#e3e3e3', borderRadius:10},
	btnLabelStyle : {fontWeight:'bold', fontSize:22},
	btnContainerStyle : {flex:1, ...centerMe, flexDirection:'row'},
	btnColStyle : {flex:1, ...centerMe}
});

export default styles;