import React from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Signup = () => {

    const [input, setInput] = useState({
        fullname:"",
        email:"",
        phoneNumber:"",
        password:"",
        role:"",
        file:""
      })
    
      const changeEventHandler = (e) => {
          setInput({...input, [e.target.name]:e.target.value});
      }
    
      const changeFileHandler = (e) => {
        setInput({...input, file:e.target.files?.[0]});
      }

      const submitHandler = async (e) => {
        e.preventDefault();
        console.log(input);
      }

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-2">
            <Label>Full Name</Label>
            <Input 
                type="text" 
                value={input.fullname} 
                name="fullname"
                onchange={changeEventHandler}
                placeholder="Sanil" 
            />
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input 
                type="email" 
                value={input.email} 
                name="email"
                onchange={changeEventHandler}
                placeholder="Sanil@gmail.com" 
            />
          </div>
          <div className="my-2">
            <Label>Phone Number</Label>
            <Input 
                type="email" 
                value={input.phoneNumber} 
                name="phoneNumber"
                onchange={changeEventHandler}
                placeholder="0774678234" 
            />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input 
                type="password"
                value={input.password} 
                name="password"
                onchange={changeEventHandler} 
                placeholder="Sanil"
            />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role == 'student'}
                  onchange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role == 'recruiter'}
                  onchange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
                <Label>Profile</Label>
                <Input
                    accept="image/*"
                    type="file"
                    onchange={changeFileHandler}
                    className="cursor-pointer"
                />
            </div>
          </div>
          <Button type="submit" className="w-full my-4">Signup</Button>
          <span className="text-sm">Already have an account? <Link to="/login" className="text-blue-600">Login</Link></span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
