## Temas de esta seccion

# Introducion a Testing y ambiente de pruebas

La idea de las pruebas es que este lo mas limpiamente posible y depurada antes de pasarla a produccion.

Esta sección de pruebas es sumamente importante porque nos dará la base de las pruebas que estaremos haciendo durante el curso, las pruebas irán creciendo en complejidad, por lo que les recomiendo que nos aseguremos de comprender bien todos estos conceptos para que nos sea más fácil las siguientes secciones de pruebas.

# Introduccion a las pruebas unitarias y de integración

## Que son las pruebas?

Hay 2 tipos de pruebas unitarias y de integración:

- Unitarias estan enfocadas en pequeñas funcionalidades.
- Integracion: Enfocadas en como reaccionan varias piezas en conjunto.

Se sugiere comenzar con pequeñas pruebas unitarias

## Caracteristicas de las pruebas

- Fácil de escribir
- Fáciles de leer
- Confiables
- Rápidas
- Principalmente unitarias

Nos enfocamos en que las pruebas trabajen entre si.

Estos pasos se conocen como AAA:

Son caracteristicas que nosotros deveriamos de aplicar
en nuestras pruebas.

- Arrange (Arreglar) : Es el paso en el que establecemos el estado inicial (el sujeto a probar), inicializamos variables, hacemos importaciones necesarias y preparamos el ambiente a probar.

- Act (Actuar) : Aplicamos acciones o estimulos al sujeto de pruebas. Donde llamamos metodos, simulamos clicks, realizamos acciones sobre el paso anterior.

- Assert (Afirmar): Observamos el comportamiento resultante. Son los resultados esperados.
  Ej: Que algo cambie , algo incremente o bien que nada suceda.

Generalmente las pruebas son locales.

Recomendaciones a hacer pruebas :

- Hacer pruebas de las Rutas criticas
- Probar caracterisiticas principales
