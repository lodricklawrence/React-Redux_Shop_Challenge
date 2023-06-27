import { useSelector,useDispatch } from "react-redux"
import { buyCake } from "../redux/cake/cakeActions"
import { useState } from "react"

function HooksCakeContainer(){
    const [number, setNumber] = useState(1)
    const numOfCakes = useSelector((state)=>state.cake.numOfCakes)
    const dispatch =useDispatch()
    return(
        <div>
            <h2>Number Of Cakes - {numOfCakes}</h2>
            <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} />
            <button onClick={()=>dispatch(buyCake(number))}>Buy {number} Cake</button>
        </div>
    )
}

export default HooksCakeContainer