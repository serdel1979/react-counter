import {getHeroeByIdAsync} from "../base-pruebas/09-promesas"

describe('Prueba de promesas', () => {
  
    test('Debe retornar un heroe', (done) => {
      
        const id = 1;
        getHeroeByIdAsync(id)
        .then(h=>{
            expect(h).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });
            done();
        })

    });

    test('Debe retornar error', (done) => {
        const id = 100;
        getHeroeByIdAsync(id)
        .catch(err=>{
            console.log(err);
            expect(err).toBe(`No se pudo encontrar el héroe ${id}`)
            done();
        })

    })
    




})
