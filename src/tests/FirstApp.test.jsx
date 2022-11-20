import { FirstApp } from '../FirstApp'
const { render } = require("@testing-library/react")


describe('Test en FirstApp', () => {
  
    // test('Debe hacer match con snapshot ', () => {
      
    //     const title = "Hola, soy River"
    //     const { container } = render(<FirstApp title={title}/>)
    //     expect( container ).toMatchSnapshot();
    // })

    test('Debe mostrar el título en h1 ', () => {
      
        const title = "Hola, soy River"
        const { container, getByText, getByTestId } = render(<FirstApp title={title} subTitle="Este un subtitulo"/>)
        expect( getByText(title) ).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title);

        expect( getByTestId('test-title').innerHTML).toBe(title);

    })

    test('Debe mostrar el subtitulo ', () => {
      
        const title = "Hola, soy River"
        const subTitle = "Hola, soy el subtitulo de ésta página"
        const { getAllByText } = render(
            <FirstApp 
                title={title}
                subTitle={subTitle}
            />
        )
        expect( getAllByText(subTitle).length ).toBe(2);

    })
    

})
