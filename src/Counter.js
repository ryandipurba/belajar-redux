import React from "react";
import { connect } from "react-redux";


function Counter(props) {
    return (
        <div className="App">
            <h1>Saya Mesin Penghitung</h1>
            <p>Count : {props.count} </p>
            <button onClick={props.onIncrementClick}>Increment</button>
        </div>
    )
}

function mapStateProps(state) {
    console.log('mapStateProps', state);
    return {
        count: state.count
    }
}

function mapDispatchProps(dispatch) {
    return {
        onIncrementClick: () => {
            const action = { type: 'INCREMENT' };
            dispatch(action)
        }
    }
}

export default connect(mapStateProps, mapDispatchProps)(Counter);