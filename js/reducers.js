import { BUTTON_PRESSED } from "./constants";

const initialState = {  
  display: '0', 
};

function rootReducer(state = initialState, action) {
  if (action.type === BUTTON_PRESSED) {
	let displayVal = state.display + '';
	const theSign = action.payload.sign + '';
	let signRegex = /(\+|-|\*|\/|\.)$/;
	if(theSign==='+'||theSign==='-'||theSign==='*'||theSign==='/'){
		if(displayVal!=='0'){						
			if(signRegex.test(displayVal)){
				displayVal = displayVal.substring(0, displayVal.length-1)+ action.payload.sign;
			}else{
				displayVal=(displayVal + '').concat(action.payload.sign);
			}
		}
	}else if(theSign==='.'){
		const lastDigitNumRegex = /([0-9]+\.[0-9]+)$/;
		if(!lastDigitNumRegex.test(displayVal)){
			displayVal = displayVal.concat('.');
		}
	}else if(theSign==='='){
		if(signRegex.test(displayVal)){
			displayVal = displayVal.substring(0, displayVal.length-1);
		}
		displayVal = eval(displayVal);
	}else if(theSign==='C'){
		displayVal = '0'
	}else{
		displayVal=((displayVal +'')==='0'?action.payload.sign:(displayVal + '').concat(action.payload.sign));	
	}	
	return Object.assign({}, state, {
      display: displayVal + ''
    });
  }
  return state;
};

export default rootReducer;