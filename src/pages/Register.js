import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "../App.css";
import { storage } from "../firebase";
import {ref, uploadBytes} from 'firebase/storage';
import {useDispatch} from 'react-redux'
import { showLoading,hideLoading } from '../redux/features/alertSlice';
import {v4} from 'uuid';
import {useNavigate} from 'react-router-dom'
function Register() {
  const [data,setData]=useState({Name: "",Reg: "",Branch: "", Year: "",Email: "", Phone: "", Hackerrank: "", Github: "", LinkedIn: "", CP: "", skills: "", why: ""});
  const [resume,setResume]=useState(null);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  let name,value;
  const changeUserData=(event)=>{
    name=event.target.name;
    value=event.target.value;
    setData({...data, [name]: value})
  }

  const submitForm=async (event)=>{
    console.log(event);
    event.preventDefault();
    dispatch(showLoading());
    const {Name,Reg,Branch, Year,Email, Phone, Hackerrank, Github, LinkedIn, CP, skills, why}=data;
    
    const res=await fetch("https://ssdc-recruitment-24-default-rtdb.firebaseio.com/applicants.json",{
    method: "POST",
    Headers: {
      "Content-Type": "application/json",
    },
  body: JSON.stringify({
    Name,Reg,Branch, Year, Email, Phone, Hackerrank, Github, LinkedIn, CP, skills, why
  }),
  });
  if(res){
    if(resume!=null){
      const resRef=ref(storage,`resume/${resume.name+v4()}`);
      await uploadBytes(resRef,resume);
    }
    setData({Name: "",Reg: "",Branch: "", Year: "",Email: "", Phone: "", Hackerrank: "", Github: "", LinkedIn: "", CP: "", skills: "", why: "" });
    dispatch(hideLoading());
    navigate('/success');
  }
  else{
    dispatch(hideLoading());
    alert("Try Again");
  }
  }

  return (
    <div>
      <div className="bg-image">
      <div className="form-container">
        <h2 style={{ marginBottom: "1rem" }}>
          Welcome to SLIET Software Development Club 
        </h2>
        <h2 style={{ marginBottom: "3rem" }}>Registration Portal</h2>
        <form class="row g-3" onSubmit={submitForm}>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Name*</label>
    <input type="text" class="form-control" id="inputEmail4" name="Name" placeholder="eg. Harsh Sonkar" value={data.Name} onChange={changeUserData} required/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label" >Registration No.*</label>
    <input type="text" class="form-control" id="inputPassword4" name="Reg" placeholder="eg. 2140154" value={data.Reg} onChange={changeUserData} required/>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Branch*</label>
    <input type="text" class="form-control" id="inputEmail4" name="Branch" placeholder="eg. GCS" value={data.Branch} onChange={changeUserData} required/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Year*</label>
    <input type="text" class="form-control" id="inputPassword4" name="Year" placeholder="eg. 3rd" value={data.Year} onChange={changeUserData} required/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Email*</label>
    <input type="email" class="form-control" id="inputPassword4" name="Email" placeholder="eg. 2140154@sliet.ac.in" value={data.Email} onChange={changeUserData} required/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Phone No.*</label>
    <input type="text" class="form-control" id="inputPassword4" name="Phone" placeholder="eg. 9888982877" value={data.Phone} onChange={changeUserData} required/>
  </div>
  
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">HackerRank I'D*</label>
    <input type="text" class="form-control" id="inputEmail4" name="Hackerrank" placeholder="eg. https://www.hackerrank.com/username" value={data.Hackerrank} onChange={changeUserData} required/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">GitHub</label>
    <input type="text" class="form-control" id="inputPassword4" name="Github" value={data.Github} onChange={changeUserData}/>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Linkedin</label>
    <input type="text" class="form-control" id="inputEmail4" name="LinkedIn" placeholder="eg. https://www.linkedin.com/ssdc" value={data.LinkedIn} onChange={changeUserData}/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label"> CodeForces / CodeChef </label>
    <input type="text" class="form-control" id="inputPassword4" name="CP" value={data.CP} onChange={changeUserData}/>
  </div>
  <div class="col-md-12">
    <label for="inputPassword4" class="form-label"> Skills </label>
    <input type="text" class="form-control" id="inputPassword4" name="skills" value={data.skills} onChange={changeUserData}/>
  </div>
  <div class="col-md-12">
    <label for="inputPassword4" class="form-label"> Resume </label>
    <input type="file" class="form-control" id="inputPassword4" name='resume' onChange={(event)=>{setResume(event.target.files[0]);}}/>
  </div>
  <div class="col-md-12">
    <label for="inputPassword4" class="form-label"> What makes you unique and ideal for SSDC ? </label>
    <input type="text" class="form-control" id="inputPassword4" name="why" value={data.why} onChange={changeUserData}/>
  </div>
  <div class="col-12" style={{textAlign: "center", padding: "5px"}}>
    <button type="submit"  class="btn btn-primary">Register</button>
  </div>
</form>
      </div>
      </div>
      </div>
  );
}

export default Register;
