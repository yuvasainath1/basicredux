import './App.css'
import actioncre from './states/actioncreators/index.js'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {useState} from 'react'

function App() {
  // const [count, setCount] = useState(0)
  const sss=useSelector(state=>state.amount);
  const dispat=useDispatch();
  const[vv,setvv]=useState(100);
  
  const chan=(e)=>{
    setvv(e.target.value);
  }
  return (
    <> 
      <h1>Balance Enquiry</h1>
      Change to be incurred &nbsp;
      <input id='Inputbox' style={{padding:'1.5% 1.5% 1.5% 1.5%'}} value={vv} onChange={chan}/>
      <div className="card">
        {sss>0 ? <button  onClick={()=>{dispat(actioncre.withdrawmoney(vv))}}> decrease
        </button>:<button disabled={true}>decrease</button>}
       
        <p>
          Your Balance is {sss}
      </p>
          <button  onClick={()=>{dispat(actioncre.depositmoney(vv))}}>
          increase
        </button>
          
        </div>
    </>
  )
}

export default App
