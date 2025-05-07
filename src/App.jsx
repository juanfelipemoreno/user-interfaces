import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from './routes/AppRoutes';
import CloudBackground from './layouts/CloudBackground';
import Home from './pages/home';


function App() {
  return(
    <CloudBackground>
      <div className='w-100 h-100' >
        <AppRoutes/>
      </div>
    </CloudBackground>
  )
};

export default App