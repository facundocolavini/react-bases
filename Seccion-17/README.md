# Journal App - Material UI

Temas puntuales de la seccion

- Material UI
- Diferentes componentes de material
- Uso de funciones propias de MaterialUI
- Configuración de temas personalizados

## Creacion del proyecto con vite

```
    yarn create vite
    yarn
```

## Herramientas

```

yarn add react-router-dom@6

```

## Estructura del proyecto

La aplicacion va a estar separada por modulos vamos a tener un modulo:

- **auth** el cual va a contener todo lo que tenga que ver con el logeo y el inicio de sesion.
  - **layout** Sera como el cascaron donde se van a envolver las paginas de mi auth (son como views) nos permitira reutilIzar estilos para nuestras paginas
  - **routes** rutas de mi auth
- **journal** aca vamos a trabajar las paginas
  - **pages** Es algo que cubre toda la pantalla desde el punto de vista del usuario
  - **view** Para este caso en journal una view es una parte detallada de mi layout
  - **layout** Sera como el cascaron donde se van a envolver las paginas de mi journal (son como views) nos permitira reutilIzar estilos para nuestras paginas
  - **routes** rutas de mi journal
- **router** es el router principal de mi aplicacion
- **theme** donde vamos a colocar los distintos temas de la aplicacion

<hr>

## Instalacion de MaterialUI

[Documentacion de material UI](https://mui.com/material-ui/guides/minimizing-bundle-size/#development-environment)

**IMPORTANTE:**
Instalaremos los íconos de material, pero al hacerlo, esto incrementa el bundle size y el tiempo de transpilación, tener presente esto.

```
yarn add @mui/material @emotion/react @emotion/styled
yarn add @mui/icons-material

```

Emotion es para realizar estilos con styled components se puede instalar en caso de querer hacer el diseño con style components

Para poder ver los cambios de MUI vamos configurar el theme en mi aplicacion de react:

Para eso vamos a crear un nuevo componente en la carpeta theme

```js
const AppTheme = ({ children }: Props) => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};
```
