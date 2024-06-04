// import Wrapper from './components/MainContainer';
// import { useAuthContext } from './context/AuthContext';
// import Login from './authPages/login';
// import Signup from './authPages/signup';
// import {Routes, Route, Navigate, BrowserRouter} from 'react-router-dom'
// import Tabs from './components/Tabs';
// import Link from 'next/link'
import { redirect } from 'next/navigation'



export default function Routing() {
    // const {user} = useAuthContext()
    return (
        // <Routes>
        //     <Route path='/' element={user ? <Tabs /> : <Navigate to={"/login"} />} />
        //     <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
        //     <Route path='/signup' element={user ? <Navigate to='/' /> : <Signup />} />
        // </Routes>
        // <Link href="/tabs">Tabs</Link>
        redirect('/timer')
    )
}