# Testeando heroe SPA

Vamos a testear las rutas publicas , y las rutas privadas de nuestra aplicacion.
La parte de router y como recibir argumentos por la url.Vamos a probar los querys params.
Vamos a testear de que la informacion efectivamente se renderice si estamos en alguna ruta en particular.
Testing en el componente search.
Vamos a realizar mocks con nuestro local storage ya que a veces nuestro aplicacion en nuestra ruta privada guardamos la ultima ruta que el usuario visito.

- Nuevos tipos de pruebas
- Pruebas en rutas privadas y públicas
- MemoryRouter
- Pruebas en nuestro DashboardRouter
- Pruebas en el AppRouter
- Simular URLs y segmentos
- Simular queryParams y queryStrings

</hr>

### Instalacion de ambiente de prueba en una linea

```bash
npm install --save-dev @babel/preset-typescript @babel/preset-react @babel/preset-env @types/jest @testing-library/react jest typescript ts-jest @types/jest jest-environment-jsdom  whatwg-fetch
```
## Objectivo de esta seccion
