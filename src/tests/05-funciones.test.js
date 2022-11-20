import { getUser, getUsuarioActivo } from "../base-pruebas/05-funciones";


describe('Prueba en 05-funciones', () => {

    test('getUser debe retornar objeto con UID ABC123 y username El_Papi1502',()=>{
        const userTesteo = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        expect(userTesteo).toEqual(user);
    })


    test('getUsuarioActivo debe retornar objeto con username name y uid ABC567',()=>{
        const user = getUsuarioActivo('PIPO');
        const username = 'PIPO';
        const userTesteo = {
            uid: 'ABC567',
            username
        }
        expect(user).toEqual(userTesteo);
    })
  
})