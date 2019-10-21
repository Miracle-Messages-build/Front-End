import React, {useState} from "react";
import axios from 'axios'

const SignUp = (props) => {

    // {
    //     "password": "string",
    //     "primaryemail": "string",
    //     "username": "string"
    //   }

    const credentials = {
        username:'',
        primaryemail:'',
        password:''
    }

const [signUp, setSignUp] = useState(credentials)

const handleChange = event => {
  setSignUp ({
    ...signUp,
    [event.target.name]:event.target.value
  });

}

const handleLogin = event => {
  event.preventDefault();

 axios
      .post('', signUp)
       .then(response => {
          localStorage.setItem('token', response.data.payload);
          props.history.push('/')
      })
      .catch(err => console.log(err.response));



}

  return (
    <>
          <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        name="username"
                        value={signUp.username}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        value={signUp.password}
                        onChange={handleChange}
                    />
                      <input
                        type="text"
                        name="primaryemail"
                        value={signUp.primaryemail}
                        onChange={handleChange}
                    />
                    <button>Log in</button>


                </form>
    </>
  );
};

export default SignUp;
