import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchCase, deleteCase } from '../actions/index.js'
import VolunteerCase from './Dashboard/VolunteerCase.js'
import {axiosWithAuth} from '../utils/axiosWithAuth.js'



const VolunteerCases = (props) => {
    // console.log(props, "p")
    useEffect(() => {
        props.fetchCase();
    }, [])

    // if (props.loading) {
    //     return <h1>Loading...</h1>
    // }
    const deleteCase = id => {
        axiosWithAuth()
        .delete(`https://lindseyacason-miraclemessages.herokuapp.com/socialCases/socialCases/${id}`)
        .then (response => console.log(response))
        //   .then(() => {
        //     //We also want to remove the now deleted card from our state
        //     setSocialCases(socialCases.filter(socialCase => socialCase.socialCaseId !== id));
        //   })
        //   .catch(err => console.log(err));
      }

    return (

        <div>
          
            {/* {props.error && <p>{props.error}</p>} */}


            {props.cases.map(cases => (
                <VolunteerCase key={cases.id} cases={cases}   deleteCase={deleteCase} />

            ))}


        </div>
    )
}



const mapStateToProps = state => {
    return {
        cases: state.cases,
        loading: state.loading,
        error: state.error
    }
}


export default connect(mapStateToProps, { fetchCase, deleteCase })(VolunteerCases);