import { Link, useNavigate } from "react-router-dom"
import "./SignUp.css"
import {signUp} from "../../store/Slice.js"
import { z } from "zod";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(useNavigate())
  const User = z.object({
    email: z.string().email({message: "must be a valid email"}),
    name: z.string(),
    role: z.string(),
    password: z.string({message: "must be a string"}).min(5, {message: "must be more than 5 characters"}).regex(/^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/, {message: "must contain number and special character"}),
  });

  const {register,handleSubmit,formState: { errors }} = useForm({
    resolver: zodResolver(User), // Apply the zodResolver
  });

  const onSubmit =async(data) => {
    try{
      dispatch(signUp(data));
      navigate("/");
      toast.success(`😊🥳 Great! now Login`,{
        position: "top-center"
      });
    }catch{
      toast.error("😕 Something went wrong")
    }
  }


  return (
    <div className="SignUp">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>SignUp</h1>
        
        <input placeholder="email" name="email" type="email" required={true} {...register("email")}/>
        {errors.email && <span style={{color: "red", background: "white"}}>{errors.email.message}</span>}
        <input placeholder="name" name="name" type="text" required={true} {...register("name")}/>
        <select {...register("role")}>
          <option value="">--vendor/buyer---</option>
          <option value="vendor">Vendor</option>
          <option value="buyer">Buyer</option>
        </select>
        <input placeholder="password" name="email" type="password" required={true} {...register("password")}/>
        {errors.password && <span style={{color: "red", background: "white"}}>{errors.password.message}</span>}
        <button type="submit">Sign Up</button>
        <p>Already have an account? <span><Link to="/">login</Link></span></p>
      </form>
    </div>
  )
}

export default SignUp