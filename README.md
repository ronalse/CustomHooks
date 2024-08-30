Utilizar Npm Install, utilice npm create vite@latest con un plugin de react Plugin de vite npm install @vitejs/plugin-react-E
npm install react react-doom -E
npm install standard -D

Requisitos funcionales
Una empresa pide desarrollar un sistema que recomiende productos para sus 
clientes, de tal forma que los clientes puedan obtener recomendaciones del catálogo
de productos que más se adapten a lo que buscan.
La idea que tiene la empresa cliente es que desde su web principal les lleva una
nueva web que es la que estará este “recomendador”. La empresa quiere que sea 
de tipo “steps” donde el usuario va rellenando durante tres pasos sus gustos y
después en el cuarto paso se le recomendaron unos productos del catálogo de la 
empresa. El recomendador va a constar de 4 steps o pasos:
1. En el primer paso, se le mostrarán al usuario las categorías disponibles, el 
usuario deberá poder escoger solo una y pasar al siguiente step.
2. En el segundo paso, el usuario debe elegir una subcategoría, de la misma 
forma que lo hace en el apartado 1.
3. En el tercero, el usuario deberá elegir un color, de la misma forma que lo hace 
en el apartado 1.
4. En el cuarto paso, el usuario recibe la lista de productos que se le recomienda 
en base a lo que ha seleccionado en la fase anteriores.
En este último paso, la empresa pide que se añadan dos filtros de forma que, en este 
mismo paso, donde aparece el listado de productos, el usuario pueda filtrar esos
productos por precio y si el producto tiene envió gratuito o no.
Estos 4 pasos detallados componen la parte obligatoria de la funcionalidad. 
Seguidamente, la empresa pide adicionalmente algunas características extras a la 
aplicación, (se consideran funcionalidades opcionales de cara a la prueba técnica) 
como son:
• Añadir dos nuevos filtros uno por valoración y otro por unidades disponibles.
• Añadir un desplegable que permita ordenar los productos, por valoración, 
precio ascendente y precio ascendente.
• Permitir cambiar de idioma en la web, entre español e inglés.
Requisitos no funcionales
La aplicación deberá cumplir los siguientes requisitos no funcionales
(obligatoriamente):
• Se debe usar el api desarrollado para este “recomendador”.
• Para acceder a la API es necesario utilizar el API Key que se le proporciona.
Recuerda que la API-KEY se envía a través del header en una variable 
denominada “X-API-Key”.
• La aplicación debe ser iterativa y tener una buena experiencia de usuario.
• La aplicación debe estar estilada.
• La aplicación no puede utilizar librerías que no sean OpenSource y no estén 
publicadas en registro público de https://www.npmjs.com/.
• Se debe utilizar Git para la gestión de versiones del código.
