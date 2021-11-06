import React from 'react';
import Input from './ui/form-elements/Input';
import Boton from './ui/form-elements/Boton';
import Card from './ui/Card';
import Select from './ui/form-elements/Select';
import useValidatorForm from '../custom-hooks/useValidatorForm';

const initState = {
    street: '',
    street_number: '',
    house_number: '',
    phone: '',
    region: '',
    comuna: '',
}
const Direccion = () => {

    const {
        state,
        errors,
        handlerSubmit,
        handlerChange
    } = useValidatorForm(initState, addNewDirections);
    const { street, street_number, house_number, phone, region, comuna } = state;
    function addNewDirections(){
        console.log(comuna, region);
    }

    return ( 
        <Card title="Crear una Dirección"> 
            <form
                onSubmit={handlerSubmit}
            >
                <Input 
                    label="Calle"
                    type="text"
                    name="street"
                    className="form-control"
                    onChange={handlerChange}
                    value={street}
                />
                {errors.street && errors.street}
                <Input 
                    label="Nro Calle"
                    type="text"
                    name="street_number"
                    div="medium medium_mr"
                    className="form-control"
                    onChange={handlerChange}
                    value={street_number}
                />
                {errors.street_number && errors.street_number}
                <Input 
                    label="Dpto/Casa"
                    type="text"
                    name="house_number"
                    div="medium"
                    className="form-control"
                    onChange={handlerChange}
                    value={house_number}
                />
                {errors.house_number && errors.house_number}
                <Select 
                    name="pre-phone" 
                    div="pre-phone"
                >
                    <option value="+569">+569</option>
                    <option value="+222">+222</option>
                </Select>
                <Input 
                    label="Teléfono"
                    type="number"
                    name="phone"
                    div="medium"
                    className="form-control"
                    onChange={handlerChange}
                    value={phone}
                />
                {errors.phone && errors.phone}
                <Select 
                    name="region" 
                    onChange={handlerChange}
                    value={region}
                >
                    <option value="">Selecciona una Región</option>
                    <option value="Metropolitana">Metropolitana</option>
                    <option value="Valparaíso">Valparaíso</option>
                </Select>
                {errors.region && errors.region}
                <Select 
                    name="comuna" 
                    onChange={handlerChange}
                    value={comuna}
                >
                    <option value="">Selecciona una Comuna</option>
                    <option value="Santiago">Santiago</option>
                    <option value="Las Condes">Las Condes</option>
                </Select>
                {errors.comuna && errors.comuna}
                <Boton 
                    title="Agregar una Dirección"
                    type="submit" 
                    className="btn btn-primary btn-block"
                />
            </form>
        </Card>
     );
}
 
export default Direccion;
