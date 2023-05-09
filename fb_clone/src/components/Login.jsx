import React ,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios';

function Login() {
  const { register, formState: { errors }, handleSubmit, } = useForm();
  // const onSubmit = (data) => console.log(data);
  const[Email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  let location = useNavigate()

  const loginEmployee =async (datas) => {
    // datas.preventDefault()
    const body={
      datas
    }
    const result=await axios.post('http://localhost:8200/login',body)
    alert(result.data.message)
    location('/home')
  }




  // const loginEmployee=async (e)=>{
  //   e.preventDefault()
  //   const body={
  //     Email,password
  //   }
  //   const result=await axios.post('http://localhost:8200/login',body)
  //   alert(result.data.message)
  //    location('/home')
  // }

  
  // const loginEmployee=async (e)=>{
  //   e.preventDefault()
  //   const body={
  //     Email,password
  //   }
  //   const result=await axios.post('http://localhost:8200/login',body)
  //   alert(result.data.message)
  //    location('/home')
  // }

  return (
    <div>
      <div className='text-center w-50 container '>
        <div className='row' style={{ width: '35rem' }}>
          <div className="col-lg-12 col-md-12 col-sm-12"></div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <img src="https://i.postimg.cc/QNfr7QRh/facebook-Logo.png" className='bg-light' width={200} height={80} alt="" />
            <Form className='border rounded border-1 mt ms-3 me-3 mb-3 bg-light' onSubmit={handleSubmit(loginEmployee)}>
            {/* <Form className='border rounded border-1 mt ms-3 me-3 mb-3 bg-light' onSubmit={handleSubmit(onSubmit)}> */}

              <h5>Log in to Facebook</h5>

              <div className='ms-2 me-2'>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label className='fw-bold'>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}
                    {...register("emails", { required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })}
                  />
                  <error className="text-danger">
                    {errors.emails?.type === "required" && "email required"}
                    {errors.emails?.type === "pattern" && "email is wrong format"}
                    {/* {errors.emails?.type === "touched" && "please fill the field"} */}

                  </error>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label className='fw-bold'>Password</Form.Label>
                  {/* pattern 8 to 15 , 1-digit 1-lowercase 1-special_character 1-uppercase */}
                  <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}
                    {...register("pass", { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/  })}
                  />
                  <error className="text-danger">
                    {errors.pass?.type === "required" && "password required"}
                    {errors.pass?.type === "pattern" && "password is wrong format"}
                  </error>
                </Form.Group>


                <Button className='border rounded' type='submit' onSubmit={(e)=>loginEmployee(e)} variant="success">Log in</Button>{' '}
                <div>
                  <Button variant="link" href='/register' className='fw-bold' style={{ textDecoration: "none" }}>Sign up for Facebook</Button>

                </div>


              </div>



            </Form>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12"></div>
        </div>
      </div>
    </div>
  )
}

export default Login