export default function (state=null, action) {

	switch(action.type) {
		case "USER_SELECTED": 
			return action.payload;
			break;
	}
	return state;
}



// export default function (state=null, action) {
// {/*reducer takes in state, action*/}

// 	switch(action.type) {
// 	/*switch statement based on action.type*/
// 		case "USER_SELECTED": /*if action.type === "USER_SELECTED"*/
// 			return action.payload; /*return the payload*/
// 			break;
// 		}

// 		/*
// 		case "ADD_PROJECT": {
// 			const nextState = [
// 				...currentState, 
// 				{
// 					id: 3, 
// 					project: action.project, 
// 					payload: action.payload
// 				}
// 			];
// 			return nextState;
// 			break;

// 			default:
// 				return: currentState
// 		}
// 		*/
// 	}
// 	return state;
// }