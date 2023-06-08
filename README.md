# Proyecto Front End Paycode Kuspit.

Proyecto desarrollado en React JS en conjunto con Typescript.

![ts](https://badgen.net/badge/-/TypeScript?icon=typescript&label&labelColor=blue&color=555555)

## Descripcion

El proyecto se a realizado con varias herramientas en conjunto para poder hacerlo lo mas escalable posible al igual que cuenta con una documentación para cada componente de ui realizado

## Herramientas usadas

Para el proyecto se usaron las siguientes herramientas

- Eslint (se usa para tener un estandar a nivel código)

* Prettier (un formateador de código para tener un estándar a nivel estilo de código)
* vite (es un builder que permite hacer un hot reload en el proyecto sin tener que refrescar la página)
* husky (se usan git-hooks para forzar a que el código que se suba sea el correcto en base al lintern)
* storybook (libreria para la documentación de componentes)

## Arquitectura de Software

Se adopto por una abstracción de clean architecture, si bien es dificíl, implementar una arquitectura al pie de la letra en el ámbito de front-end (no queremos sacrificar legibilidad y entendibilidad por tener una arquitectura que solo pocas personas entiendan). Se opto por una estructura de carpetas similar a la habitual, solo con unas modificaciones :) siguiendo los principios que menciona la arquitectura :)

## Instalación

Para poder ejecutar el proyecto de manera local se debe descargar el repositorio:

```
git clone git@github.com:PayCode/kuspit-front.git

cd kuspit-front

npm install

npm run local

posdata: Si usas pnpm solo es tomar pnpm i, pnpm local

```

## Storybook
Storybook tiene su propio server, recomiendo darle un vistazo asi se entendera un poco mas la libreria de componentes que se tiene actualmente en el proyecto. para poder ejecutarlo necesitas correr el siguiente comando:
npm run storybook

si usas pnpm:
pnpm storybook
