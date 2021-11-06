
export default function validateFormInputs(inputs){
    
    let errors = {};

    if ( ('first_name' in inputs) && inputs.first_name === '' ){
        errors.first_name = 'El Nombre es requerido'
    }
    if ( ('last_name' in inputs) && inputs.last_name === '' ){
        errors.last_name = 'El Apellido es requerido'
    }
    if ( ('rut' in inputs) && inputs.rut === '' ){
        errors.rut = 'El Rut es requerido'
    }
    if( ('email' in inputs) && (inputs.email === '' || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputs.email)) ){
        errors.email = 'El Email es requerido o ingreso un mail no valido';
    } 
    if( ('street' in inputs) && inputs.street === '' ) {
        errors.street = 'EL nombre de la calle es requerido';
    }
    if( ('street_number' in inputs) && inputs.street_number === '' ) {
        errors.street_number = 'EL número de la calle es requerido';
    }
    if( ('house_number' in inputs) && inputs.house_number === '' ) {
        errors.house_number = 'EL número del Dpto/Casa es requerido';
    }
    if( ('phone' in inputs) && inputs.phone === '' ) {
        errors.phone = 'EL número de teléfono es requerido';
    }
    if( ('region' in inputs) && inputs.region === '' ) {
        errors.region = 'Seleccione una Región valida';
    }    
    if( ('comuna' in inputs) && inputs.comuna === '' ) {
        errors.comuna = 'Seleccione una Comuna valida';
    }

    return errors;
}