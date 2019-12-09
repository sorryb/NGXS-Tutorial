# NgxsTutorials

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.17 : 
Create a new application
- ng new ngxs-tutorials

Add store type : NGXS
- npm i @ngxs/store

Add logging and Redux plugin
- npm install @ngxs/logger-plugin @ngxs/devtools-plugin --dev
  
Create a component to 'read' from a store
- ng g c read
  
Create another component to 'create' objects on  the store
- ng generate component create
  
Add Observable from rxjs
- npm i @rxjs
  
Adjust compatibility with latest rxjs
- npm install rxjs-compat --save

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
