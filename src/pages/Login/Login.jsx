import { Link, useNavigate} from "react-router-dom"
import "./Login.css"
import { z } from "zod";
import { useDispatch } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { buyerLogin } from "../../store/Slice";
import { toast } from "react-toastify";



const Login = () => {
  const dispatch = useDispatch()
const navigate = useNavigate()

 const user =z.object({
  email:z.string().email(),
  password:z.string({message :"must be up to 5 characters"}).min(5,{message :"must be more than 5 character"}).regex( /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/, {message: "must contain special characters"}),

 })
 const {register,handleSubmit,formState: { errors }} = useForm({

  resolver: zodResolver(user), // Apply the zodResolver
});

 const onSubmit = async(data) => {
  try{
    dispatch(buyerLogin(data))
    navigate("/app/home")
    toast.success("Welcome to La Curve 🥳🥳");
  }catch(err){
    toast.warn(err.message);
  }
  
  
 }
 
 

  return (
    <div className="Login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        
        <input placeholder="email" name="email" type="email" required={true} {...register ("email")}/>
        {errors.email && <span style={{color: "red", background: "white"}}>{errors.email.message}</span>}
        
        <input placeholder="password" name="email" type="password" required={true} {...register ("password")}/>
        {errors.password && <span style={{color: "red", background: "white"}}>{errors.password.message}</span>}
        <button type="submit" >Login</button>
        <p>Don`t have an account? <span><Link to="/signup">Sign Up</Link></span></p>
      </form>
    </div>
  )
}

export default Login