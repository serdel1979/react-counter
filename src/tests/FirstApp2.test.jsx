import { FirstApp } from '../FirstApp'
const { render, screen } = require("@testing-library/react")


describe('Test en FirstApp', () => {

  const title = 'Hola, soy el título';
  const subTitle ='Soy el subtitulo';

  test('Debe hacer match con el snapshot', () => {
    
    const { container } = render(<FirstApp title={title}/>)
    expect( container ).toMatchSnapshot();
  })
  
  test('Debe mostrar el mensaje "Hola, soy el título" ', () => {
    render(<FirstApp title={title}/>);
    expect( screen.getByText(title)).toBeTruthy();

  })
  
  test('Debe mostrar el titulo en un h1', () => {
    render(<FirstApp title={title}/>);
    expect( screen.getByRole('heading',{level: 1}).innerHTML).toContain(title);
  })

  test('Debe mostrar el subtitulo', () => {
    render(<FirstApp title={title} subTitle = {subTitle}/>);
    expect( screen.getAllByText(subTitle).length).toBe(2);
})
  

})