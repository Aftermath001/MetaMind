import ReactDOM from 'react-dom'
import App from './App';
import './index.css'
import { BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  
)

