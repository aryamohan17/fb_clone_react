import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios';


function Register() {
  const { register, formState: { errors }, handleSubmit, } = useForm();
   const [firstname,SetFirstname]=useState('')
  const [lastname,setLastname]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[dob,setDob]=useState('')
  const[profilepic,setProfilepic]=useState('')

  let location = useNavigate()

  const registerUser =async (datas) => {
      const body=
        datas
    
         const result=await axios.post('http://localhost:8200/register',body)
         console.log(result);
         alert(result.data.message)
         location('/')
  }

  // const registerUser = (data) => console.log(data);

  // const [firstname,SetFirstname]=useState('')
  // const [lastname,setLastname]=useState('')
  // const[email,setEmail]=useState('')
  // const[password,setPassword]=useState('')
  // const[dob,setDob]=useState('')
  // const[profilepic,setProfilepic]=useState('')

  // let location = useNavigate()


  // const registerUser=async (e)=>{
  //   e.preventDefault()
  //   const body={
  //     firstname,lastname,email,password,dob,profilepic
  //   }
  //     const result=await axios.post('http://localhost:8200/register',body)
  //        console.log(result);
  //        alert(result.data.message)
  //        location('/')
  //   }
  return (
    <div className=''>
{/* onSubmit={handleSubmit(onSubmit)} */}
    <div className='text-center w-50 container '>
      <div className='row'  style={{ width: '35rem' }}>
        <div className="col-lg-12 col-md-12 col-sm-12"></div>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <img src="https://i.postimg.cc/QNfr7QRh/facebook-Logo.png" className='bg-light' width={200} height={80} alt="" />
          <Form className='border rounded border-1 mt ms-3 me-3 mb-3 bg-light' onSubmit={handleSubmit(registerUser)}>
            <h3 className='fw-bold'>Create a new account</h3>
            <p>It's quick and easy</p>
            <hr />
            <Row className='ms-1 me-1 mb-2'>
        <Col>
        <Form.Label className='fw-bold'>First Name</Form.Label>

          <Form.Control placeholder="First name" onChange={(datas)=>SetFirstname(datas.target.value)}
          {...register("firstname", { required: true ,pattern:/^[a-zA-Z ]{2,40}$/ })}
          />
          <p className="text-danger">
            {errors.firstname?.type === "required" && "first name required"}
            {errors.firstname?.type === "pattern" && "please enter letters"}

          </p>
        </Col>
        <Col>
        <Form.Label className='fw-bold'>Last Name</Form.Label>

          <Form.Control placeholder="Last name" onChange={(datas)=>setLastname(datas.target.value)}

            {...register("lastname", { required: true ,pattern:/^[a-zA-Z ]{2,40}$/ })}
            />
            <p className="text-danger">
              {errors.lastname?.type === "required" && "last name required"}
              {errors.lastname?.type === "pattern" && "please enter letters"}
  
            </p>
        </Col>
      </Row>
      <div className='ms-2 me-2'>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label className='fw-bold'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(datas)=>setEmail(datas.target.value)}
 
         {...register("email", { required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })}
         />
         <p className="text-danger">
           {errors.email?.type === "required" && "email required"}
           {errors.email?.type === "pattern" && "email is wrong format"}
         </p>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label className='fw-bold'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(datas)=>setPassword(datas.target.value)}

          {...register("password", { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/  })}
          />
          <p className="text-danger">
            {errors.password?.type === "required" && "password required"}
            {errors.password?.type === "pattern" && "password is wrong format"}
          </p>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label className='fw-bold'>Date of birth</Form.Label>
        <Form.Control type="date" placeholder="Enter your date of birth" onChange={(datas)=>setDob(datas.target.value)}

            {...register("dob", { required: true  })}
            />
            <p className="text-danger">
              {errors.dob?.type === "required" && "date of birth required"}
            </p>
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label className='fw-bold'>Gender</Form.Label><br/>
        <Form.Control type="radio" className='' value="Male" name="gender" onChange={(e)=>setGender(e.target.value)} /> Male
        <Form.Control type="radio" className='ms-1' value="Female" name="gender" onChange={(e)=>setGender(e.target.value)}/> Female
        <Form.Control type="radio" className='ms-1' value="Other" name="gender" onChange={(e)=>setGender(e.target.value)}/> Other
      </Form.Group> */}
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label className='fw-bold'>Profile pic</Form.Label>
        <Form.Control type="text" placeholder="paste your image url" onChange={(datas)=>setProfilepic(datas.target.value)}

        {...register("profilepic", { required: true  })}
        />
        <p className="text-danger">
          {errors.profilepic?.type === "required" && "file required"}
        </p>
      </Form.Group>
      <Button className='border rounded' type='submit'  onSubmit={(datas)=>registerUser(datas)} variant="success" >Sign up</Button>{' '}
      <div>
      <Button variant="link" href='/' className='fw-bold' style={{textDecoration:"none"}}>Alraedy have an account?</Button>

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

export default Register;


