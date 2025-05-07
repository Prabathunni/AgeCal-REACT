import { useState } from 'react'
import './App.css'
import Age from './Components/Age'

function App() {

  const [dob,setDob] = useState('')
  const [age,setAge] = useState('')

  const getAge =() =>{

    const userBirthdate = new Date(dob)
    console.log(userBirthdate);
    
    const today = new Date();
    console.log(today);


    const Years = today.getFullYear() - userBirthdate.getFullYear()
    const months = today.getMonth() - userBirthdate.getMonth()
    const days = today.getDay() - userBirthdate.getDay()


    setAge(`You are : ${Years} Years,${months} months , ${days} days`)
      
    
  }



  return (
    <>

      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >

        <div className="bg-light text-dark w-50 p-4 rounded shadow">
            <h2 className='text-center '>Age Calculator</h2>
            <hr />
            <div className='m-5'>
                <input type="date" className='form-control' onChange={e=>setDob(e.target.value)}/>
                <button className='btn btn-primary mt-3' onClick={()=>getAge()}>check Age</button>
            </div>

            <Age age={age}/>


        </div>

      </div>




    </>
  )
}

export default App
