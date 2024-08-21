import {Navigate, Outlet} from "react-router-dom";
import { useSelector } from "react-redux";

const Auth = () => {
  const {isLoggedIn} = useSelector((state)=> state.loginInfo);
  console.log(isLoggedIn)
  return (
    <>
        {isLoggedIn === true ?<Outlet/>: <Navigate to="/" replace={true}/>}
    </>
  )
}

export default Auth