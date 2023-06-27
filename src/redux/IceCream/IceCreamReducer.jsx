import { BUY_ICECREAM } from "./IceCreamTypes"

const initialIceCreamState={
    numOfIceCream:20
}

const iceCreamReducer= (state= initialIceCreamState, action)=>{
    switch(action.type){
        case BUY_ICECREAM : return {
            ...state,
            numOfIceCream:state.numOfIceCream - action.payload
        }

        default : return state
    }

}

export default iceCreamReducer