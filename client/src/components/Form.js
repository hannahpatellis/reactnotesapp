import React from 'react';

const Form = props => (
  <div>
    <h1>{props.heading}</h1>
    <form>
      <input value={props.val} onChange={props.changeHandler} />
      <button onClick={props.clickHandler}>Submit</button>
    </form>
  </div>
)

export default Form;