import {Outlet} from 'react-router-dom';
import Navigation from './components/navigation/Navigation';


function Root() {
  return (
    <>
    <Navigation/>
    <Outlet/>
    
    </>
  )
}

export default Root