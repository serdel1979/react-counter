const { render, screen, fireEvent } = require("@testing-library/react")
import {CounterApp} from "../CounterApp";

describe('Prueba del counterApp', () => {

    const value = 20;
    test('Debe hacer match con el snapshot ', () => {
        const { container } = render(<CounterApp value={value}/>)
        expect( container ).toMatchSnapshot();
    })
    

    test('Debe mostrar el valor inicial de 20', () => {
        const { container } = render(<CounterApp value={100}/>)
        expect( screen.getByText(100)).toBeTruthy();
    });


    test('Debe incrementar al dar click en boton +1 ', () => {
      
        render(<CounterApp value={value}/>)
        fireEvent.click( screen.getByText('+1'))
        expect(screen.getByText('21')).toBeTruthy();

    });

    test('Debe decrementar al dar click en boton -1 ', () => {
        render(<CounterApp value={value}/>)
        fireEvent.click( screen.getByText('-1'))
        screen.debug();
        expect(screen.getByText('19')).toBeTruthy();
    });
    
    test('Debe resetear el contador a 20 ', () => {
        render(<CounterApp value={value}/>)
        fireEvent.click( screen.getByText('+1'));
        fireEvent.click( screen.getByText('+1'));
        fireEvent.click( screen.getByText('+1'));
        //fireEvent.click( screen.getByText('Reset'))
        //expect(screen.getByText('20')).toBeTruthy();
        fireEvent.click(screen.getByRole('button',{name: 'btn-reset'}));
        expect(screen.getByText('20')).toBeTruthy();

    });
    
  
})
