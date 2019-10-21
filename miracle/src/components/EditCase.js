import React, { useState, useEffect } from 'react';
import axios from 'axios';


const initialCase = {
    id: '',
    name: '',
    hometown: '',
    current_city: '',
    current_state: '',
    contact:''
}

 

//Make API call in app.js, pass down here as props
// const [caseInfo, setCaseInfo] = useState([]);
// useEffect (() => {
//   axios
//   .get("")
//   .then(response => setCaseInfo(response.data))
//   .catch(err => console.log(err.response));

// }, []);



// Route in app.js
//   <Route
//         path="/update-case/:id"
//         render={props => {
//           return <UpdateForm {...props} caseInfo={caseInfo} setCaseInfo={setCaseInfo} />
//         }}
//       />



const UpdateForm = props => {
    console.log(props, 'props in update')
    const [info, setInfo] = useState(initialCase);


    useEffect(() => {
        const caseToEdit = props.caseInfo.find(
            data => `${data.id}` === props.match.params.id
        );
        if (caseToEdit) setInfo(caseToEdit);
    }, [props.caseInfo, props.match.params.id])

    const changeHandler = event => {
        event.persist();
        setInfo({
            ...info,
            [event.target.name]: event.target.value

        })
    }

    const handleSubmit = event => {
        event.preventDefault();

        axios
            .put(`${movie.id}`, info)
            .then(response => {
                props.setCaseInfo([...props.caseInfo, response.data])
                props.history.push('/')
            })
            .catch(err => console.log(err))


    }

    return (
        <form  className="login-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                onChange={changeHandler}
                placeholder="Name"
                value={info.name}
            />
            <input
                type="text"
                name="hometown"
                onChange={changeHandler}
                placeholder="Hometown"
                value={info.hometown}
            />
            <input
                type="text"
                name="current_city"
                onChange={changeHandler}
                placeholder="Current city"
                value={info.current_city}
            />
            <input
                type="text"
                name="current_state"
                onChange={changeHandler}
                placeholder="Current State"
                value={info.current_state}
            />
               <input
                type="text"
                name="contact"
                onChange={changeHandler}
                placeholder="Contact"
                value={info.contact}
            />
            <button type='submit'>Edit</button>

        </form>
    )
}

export default UpdateForm;