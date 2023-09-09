import { Switch } from '@mui/material';
import './App.css';
import SelectCopm from './Components/SelectCopm';
import BtnComp from './Components/BtnComp';
import Input  from './Components/Input';
import DatePick from './Components/DatePick';
import Buttonicon from './Components/Buttonicon';
import Table from './Components/Table';
import SwitchComp from './Components/SwitchComp';
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
<SelectCopm />
<BtnComp />
<Input/>
<Buttonicon />
<SwitchComp />
<DatePick />
<Table />
    </div>
  );
}

export default App;
