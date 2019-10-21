import React , {useState} from 'react'
import {registerUser}  from '../api/api';



const Form =()=> {
   
  const [formData , setFormData] =  useState({
      name:"",
      email:"",
      password:"",
      password2:"",
      correct:false
  });
  const {name,email,password,password2} = formData
  const  onChange = (e) => {
      setFormData({...formData,[e.target.name]:e.target.value})
  }
  
  const onSubmit = (e)=>{
     e.preventDefault()
     console.log("heree",name, email)
    if(password === password2){

     const  data  ={
          name:name,
          email:email,
          password:password
      }
     registerUser(data)
    }
    else{
      
       alert("Passwords must match")

    }

 
    }
      return(
           <div className="container">
               <form onSubmit={e=> onSubmit(e)} >
  <div className="form-group">
    <label for="name">Full Name</label>
    <input   onChange={e=> onChange(e)} name="name" type="input" className="form-control" id="name"  placeholder="Enter Name" />
  </div>
  <div className="form-group">
    <label for="email">Email</label>
    <input   onChange={e=> onChange(e)} name="email" type="input" className="form-control" id="email" placeholder="enter email"/>
  </div>
  <div className="form-group">
    <label for="password">Password</label>
    <input  onChange={e=> onChange(e)} name="password" type="input" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group">
    <label for="password2">Confirm passwod</label>
    <input  onChange={e=>  onChange(e)} name="password2" type="input" className="form-control" id="exampleInputPassword1" placeholder="confirm password"/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>     
           </div>
      )

}


export default Form;