import {usContext} from "../base-pruebas/06-deses-obj";



describe('Prueba en 06-desestructuración', () => {

    test('Prueba de usContext',()=>{
        const userCreado = { 
            clave: '3211', 
            nombre: 'PEPE', 
            edad: 22, 
            rango: 'Capitán' 
        }
        const user = usContext(userCreado);
        const userTest = {
            nombreClave: '3211',
            anios: 22,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }
 
        expect(userTest).toEqual(user);
    })


})