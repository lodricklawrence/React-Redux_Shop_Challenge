import { useSelector, useDispatch } from "react-redux"
import buyIceCream from "../redux/IceCream/IceCreamActions"
import { useState } from "react"

function HooksIceCreamContainer(){
    const [number, setNumber] = useState(1)
    const numOfIceCreams= useSelector(state=>state.iceCream.numOfIceCream)
    const dispatch = useDispatch()
    return(
        <div>
            <h2>Number of IceCreams - {numOfIceCreams}</h2>
            <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} />
            <button onClick={()=>dispatch(buyIceCream(number))}>Buy {number} IceCream</button>
        </div>
    )
}

export default HooksIceCreamContainer