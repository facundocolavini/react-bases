# Generando el build de produccion y despliegues

Vamos a realizar el build de produccion de la app gif exper app de la seccion anterior.Y tambien el despliegue a internet para poder acceder desde la red.

- Aprender cómo realizar backups a repositorios de Git

- Subir nuestro repositorio a GitHub

- Uso de Github Pages

- Desplegar nuestra aplicación de React

- Generar build de producción de nuestra aplicación

## Desplegar en netlify

Netlify es bueno para desplegar paginas que no tengan backend(el backend puede estar en otro servidor)
.Lo que quiero decir que no tenga backend que no tenga corriendo nodejs en nuestra app que intentamos desplegar a netlify.

Vamos a aprender a desplegar una app chica en netlify para eso seguimos los pasos

### Asegurar antes que la app funcione

- cd a la carpeta de nuestro proyecto donde tenemos la app
- ejecutamos npm install
- npm run dev o start

- Eliminar la carpeta dist si es que la habiamos generado
- Generar nuevamente mi carpeta build (carpeta de distribucion para desplegarla)
- Tomamos nuestra carpeta build y la arrastramos a la seccion de Sites en netlify
- Y listo: https://gif-app-facundo.netlify.app/

## GitHub y Git

Utilizar un controlador de versiones como git y github.Estoy evita tener problemas de versiones y poder trabajar de forma coperativa y los releases.

Para eso preparamos nuestro repositorio respaldado con git:

- Asegurarse que en nuestro proyecto tengamos el .gitignore
- git init (nos inicializa nuestro repositorio)
- gir add . (perpara todos los archivos desde mi ultimo commit y los prepara para la fotografia )
- git commit -m "first commit"
- git remote add origin "url de mi repo"
- git push -u origin main

  extra:

  - git checkout -- . Volver todos los cambios desde el ultimo commit

## Despliegue con Github Pages

Una forma de crear nuestra github pages es :

- renombrar la carpeta dist a docs de mi proyecto
- vamos a setting de mi repositorio y vamos a pages
- seleccionamos la rama y la carpeta docs
- guardamos
- Esperamos y listo.

Si llegaramos a tener algun error y no vemos la applicacion en github pages es por que hay que actualizar github pages.

Puede ser por que no este en el root nuetra app o este en una subcarpeta por lo que debemos cambiarlo.

Podemos corregirlo de la siguiente manera

- en el index html agregar nuestras src el "./" el path relativo.
