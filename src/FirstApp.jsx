import PropTypes from 'prop-types';

const cuadrado = (n)=>{
    return n*n;
}

export const FirstApp = ({title, subTitle, name})=>{ 

    if (!title){
        throw new Error('Debe enviar el título.');
    }

    return (
        <>
            <h1 data-testid="test-title">{ title }</h1>
            <p>{ subTitle }</p>
            <p>{ subTitle }</p>
            <p> { name }</p>
        </>
    );
}

FirstApp.propTypes={
   title: PropTypes.string.isRequired,
   subtitle: PropTypes.string
}