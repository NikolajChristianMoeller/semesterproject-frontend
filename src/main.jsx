import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./index.css"
import { BrowserRouter } from 'react-router-dom'
import Router from './components/Router'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
)
