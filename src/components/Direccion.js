import React from 'react';
import Input from './ui/form-elements/Input';
import Boton from './ui/form-elements/Boton';
import Card from './ui/Card';
import Select from './ui/form-elements/Select';

const Direccion = () => {
    return ( 
        <Card title="Crear una Dirección"> 
            <form>
                <Input 
                    label="Calle"
                    type="text"
                    name="street"
                    className="form-control"
                />
                <Input 
                    label="Nro Calle"
                    type="text"
                    name="street_number"
                    div="medium medium_mr"
                    className="form-control"
                />
                <Input 
                    label="Dpto/Casa"
                    type="text"
                    name="house_number"
                    div="medium"
                    className="form-control"
                />
                <Select name="pre-phone" div="pre-phone">
                    <option value="+569">+569</option>
                    <option value="+222">+222</option>
                </Select>
                <Input 
                    label="Teléfono"
                    type="number"
                    name="phone"
                    div="medium"
                    className="form-control"
                />
                <Select name="region">
                    <option value="">Selecciona una Región</option>
                    <option value="Metropolitana">Metropolitana</option>
                    <option value="Valparaíso">Valparaíso</option>
                </Select>
                <Select name="comuna">
                    <option value="">Selecciona una Comuna</option>
                    <option value="Santiago">Santiago</option>
                    <option value="Las Condes">Las Condes</option>
                </Select>
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
