import { BUY_ICECREAM } from "./IceCreamTypes"
const buyIceCream = (number)=>{
    return {
        type:BUY_ICECREAM,
        payload:number
    }
}

export default buyIceCream