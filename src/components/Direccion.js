import React from 'react';
import Input from './ui/form-elements/Input';
import TextArea from './ui/form-elements/TextArea';
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
                    label="Teléfono"
                    name="pre-phone"
                    className="form-select" 
                    div="pre-phone"
                >
                    <option value="+569">+569</option>
                    <option value="+222">+222</option>
                </Select>
                <Input 
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
                    className="form-select"
                    div="full-input"
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
                    className="form-select"
                    onChange={handlerChange}
                    value={comuna}
                >
                    <option value="">Selecciona una Comuna</option>
                    <option value="Santiago">Santiago</option>
                    <option value="Las Condes">Las Condes</option>
                </Select>
                {errors.comuna && errors.comuna}
                <TextArea 
                    label="Observación de la dirección"
                    class="md-textarea form-control" 
                    rows="3"
                />
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
