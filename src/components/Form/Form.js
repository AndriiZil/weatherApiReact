import React from 'react';
import './Form.css';

const Form = props => (
  <form onSubmit={props.weatherMethod} className="Form">
    <input type="text" name="city" placeholder="Введите город"/>
    <button>Получить погоду</button>
  </form>
);

export default Form;
