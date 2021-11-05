import React from 'react';
import Input from './ui/form-elements/Input';
import Boton from './ui/form-elements/Boton';
import Card from './ui/Card';

const Usuario = () => {
    return (
        <Card title="Crear Usuario"> 
            <form>
                <Input 
                    label='Nombre'
                    type='text'
                    name='first_name'
                    className="form-control"
                />
                <Input 
                    label='Apellido'
                    type='text'
                    name='last_name'
                    className="form-control"
                />
                <Input 
                    label='Rut'
                    type='text'
                    name='rut'
                    className="form-control"
                /> 
                <Input 
                    label='Email'
                    type='email'
                    name='email'
                    className="form-control"
                />
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
