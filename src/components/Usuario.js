import React from 'react';
import Input from './ui/form-elements/Input';
import Boton from './ui/form-elements/Boton';
import Card from './ui/Card';
import useValidatorForm from '../custom-hooks/useValidatorForm';

const initState = {
    first_name: '',
    last_name: '',
    rut: '',
    email: '',
    news: false,
    sex: ''
}
const Usuario = () => {
    const {
        state,
        errors,
        handlerSubmit,
        handlerChange
    } = useValidatorForm(initState, addNewUser);
    const { first_name, last_name, rut, email, news, sex } = state;

    function addNewUser() {
        console.log(first_name, email);
    }

    const radioElements = [
        {value:"sro", text:"Señor"},
        {value:"sra", text:"Señora"},
    ];

    return (
        <Card title="Crear Usuario"> 
            <form
                onSubmit={handlerSubmit}
            >
                <Input 
                    label='Nombre'
                    type='text'
                    name='first_name'
                    className="form-control"
                    onChange={handlerChange}
                    value={first_name}
                />
                {errors.first_name && errors.first_name }
                <Input 
                    label='Apellido'
                    type='text'
                    name='last_name'
                    className="form-control"
                    onChange={handlerChange}
                    value={last_name}
                />
                {errors.last_name && errors.last_name}
                <Input 
                    label='Rut'
                    type='text'
                    name='rut'
                    className="form-control"
                    onChange={handlerChange}
                    value={rut}
                /> 
                {errors.rut && errors.rut}
                <Input 
                    label='Email'
                    type='email'
                    name='email'
                    className="form-control"
                    onChange={handlerChange}
                    value={email}
                />
                {errors.email && errors.email }
                <Input 
                    label="Quiero recibir newsletters"
                    type="checkbox"
                    name="news"
                    className="form-check-input"
                    onChange={handlerChange}
                    checked={news}
                
                />
                <Input
                    label="Sexo"
                    type="radio"
                    radioElements={radioElements}
                    name="sex"
                    onChange={handlerChange}
                    className="form-check-input"
                />    
                {errors.sex && errors.sex }
                <Boton 
                    title="Crear Usuario"
                    type="submit" 
                    className="btn btn-primary btn-block"
                />
            </form>
        </Card>
    );
}
 
export default Usuario;
