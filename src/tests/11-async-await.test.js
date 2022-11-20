import {getImagen} from "../base-pruebas/11-async-await"

describe('Pruebas de async await', () => {
  test('getImagen ',async () => {
    
    const resp = await getImagen();
    expect(typeof resp).toBe('string');

  })

  // test('getImagen falla',async () => {
    
  //   const resp = await getImagen();
  //   expect(resp).toBe('No encontrado');

  // })
  
})
