import React from 'react'

const Form =()=>{
  
      return(
           <div className="container">
               <form>
  <div className="form-group">
    <label for="name">Full Name</label>
    <input name="name" type="input" className="form-control" id="name"  placeholder="Enter Name" />
  </div>
  <div className="form-group">
    <label for="email">Email</label>
    <input name="email" type="input" className="form-control" id="email" placeholder="enter email"/>
  </div>
  <div className="form-group">
    <label for="password">Password</label>
    <input name="password" type="input" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group">
    <label for="password2">Confirm passwod</label>
    <input name="password" type="input" className="form-control" id="exampleInputPassword1" placeholder="confirm password"/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>     
           </div>
      )

}
export default Form;