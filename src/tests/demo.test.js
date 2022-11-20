const {isExportDeclaration} = require("typescript");


describe('Pruebas en DemoComponent',()=>{
    test('Esta prueba no debe fallar',()=>{
   
        const m1 = "hola mund";
    
        const m2 = m1.trim()
    
        expect(m1).toBe(m2);
    
    })
})



