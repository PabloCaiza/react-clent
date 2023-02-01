import axios from "axios";
import React, {  useState } from "react";
import { Button,Form } from "react-bootstrap";
import { useNavigate  } from "react-router-dom";
const Add=({setUsers})=>{
    const [name,setName]=useState();
    const [age,setAge]=useState();
    const history=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        const user={
            name,age
        }
        axios.post('http://localhost:8080/api/v1/users',user)
        .then(res=>{
            setUsers(us=>[...us,user])
            history("/")
            

        })
      



    }

    return (
        <div>
            <Form>
                <Form.Group>
                
                    <Form.Control type="text" placeholder="Enter Name" required={true}
                     onChange={(e)=>setName(e.target.value)}

                    ></Form.Control>
                    <Form.Control type="number" placeholder="Enter age" required={true}
                     onChange={(e)=>setAge(e.target.value)}
                    >

                    </Form.Control>

                    <Button type="submit" onClick={(e)=>handleSubmit(e)} >
                        Create

                    </Button>


        
                </Form.Group>

            </Form>

        </div>
    )
}
export default Add