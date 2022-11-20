import {getHeroeById, getHeroesByOwner} from "../base-pruebas/08-imp-exp";

describe('', () => {
  

    test('getHeroeById retorna un heroe por id', () => {
      
        const id = 1;
        const hero = getHeroeById( id );

        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })

    });

    test('getHeroeById retorna undefined si no existe', () => {
      
        const id = 100;
        const hero = getHeroeById( id );

        expect(hero).toEqual(undefined);

    });

    test('getHeroeByOwner retorna los heroes de un propietario', () => {
      
        const heroDc = getHeroesByOwner('DC');
        const heroMarvel = getHeroesByOwner('Marvel');
        const arr = [
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }
        ]
        expect(heroDc).toEqual(arr);
        expect(heroDc.length).toBe(3);
        expect(heroMarvel.length).toBe(2);

    })
    


})
