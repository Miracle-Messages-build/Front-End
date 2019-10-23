import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchCase, deleteCase } from '../actions/index.js'
import VolunteerCase from './Dashboard/VolunteerCase.js'



const VolunteerCases = (props) => {
    // console.log(props, "p")
    useEffect(() => {
        props.fetchCase();
    }, [])

    // if (props.loading) {
    //     return <h1>Loading...</h1>
    // }

    return (

        <div>
          
            {/* {props.error && <p>{props.error}</p>} */}


            {props.cases.map(cases => (
                <VolunteerCase key={cases.id} cases={cases} deleteCase={props.deleteCase} />

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