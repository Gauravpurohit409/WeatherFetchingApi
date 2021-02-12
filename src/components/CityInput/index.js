import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const CityInput = ({city,setCity,fetchCityWeather}) => {
    const[error,setError] = React.useState("");

    
    const handleInputChange = (event) => {
        setCity(event.target.value);
    }

    const handleClick = ()=>{
        if (!city)
        {
            setError("City field is empty !");

        }else{
            // Make api call
            fetchCityWeather()
        }
       
    }
    return (

        <Container>
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>City</Form.Label>
                <Form.Control 
                type="text"
                value = {city}
                 placeholder="Enter email" 
                 onChange = {handleInputChange}
                 />
            </Form.Group>
            <p className = "text-danger">{error}</p>
            <Button variant="primary" onClick= {handleClick} >
                Submit
            </Button>
        </Form>
        </Container>
    );
};

export default CityInput;