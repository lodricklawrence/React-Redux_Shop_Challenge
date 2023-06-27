import { Provider } from 'react-redux'
import store from './redux/store'
// import CakeContainer from './components/cakeContainer'
import './App.css'
import HooksCakeContainer from './components/HooksCakeContainer'
import HooksIceCreamContainer from './components/HooksIceCreamContainer'
function App() {

  return (
    <Provider store={store}>
      <div>
      {/* <CakeContainer/> */}
      <HooksCakeContainer />
      <HooksIceCreamContainer />
      </div>
    </Provider>
  )
   

}

export default App
