import PropTypes from 'prop-types';

const cuadrado = (n)=>{
    return n*n;
}

export const FirstApp = ({title,num=2})=>{ 

    if (!title){
        throw new Error('Debe enviar el título.');
    }

    return (
        <>
            <h1>Sergio App!!!</h1>
            <p>El cuadrado es: {cuadrado(num)}</p>
        </>
    );
}

FirstApp.propTypes={
   title: PropTypes.string.isRequired,
   num: PropTypes.number.isRequired,
}

FirstApp.defaultPropes={
    title: "No hay título",
    num: 2,
}