const { render, screen } = require("@testing-library/react")
import {CounterApp} from "../CounterApp";

describe('Prueba del counterApp', () => {

    const value = 20;
    test('Debe hacer match con el snapshot ', () => {
        const { container } = render(<CounterApp value={value}/>)
        expect( container ).toMatchSnapshot();
    })
    

    test('Debe mostrar el valor inicial de 20', () => {
        const { container } = render(<CounterApp value={value}/>)
        expect( container ).toMatchSnapshot();
        expect( screen.getByText(value)).toBeTruthy();
    })
  
})
