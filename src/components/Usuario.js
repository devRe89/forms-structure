import React from 'react';
import Input from './ui/form-elements/Input';
import Boton from './ui/form-elements/Boton';
import Card from './ui/Card';
import useValidatorForm from '../custom-hooks/useValidatorForm';

const initState = {
    first_name: '',
    last_name: '',
    rut: '',
    email: ''
}
const Usuario = () => {
    const {
        state,
        errors,
        handlerSubmit,
        handlerChange
    } = useValidatorForm(initState, addNewUser);
    const { first_name, last_name, rut, email } = state;

    function addNewUser() {
        console.log(first_name, email);
    }

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
