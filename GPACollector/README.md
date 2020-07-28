# GPACollector

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.9.

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


## Alertify configuration

first of all install alartify modules    "npm install alertifyjs --save"
after installlation we should manually import js library  and other csss          

            (1) angular.json configuration  

                    projects >> GPACollector >> architect >> build  >> scripts --> we should add alertify.min.js file to script like below

                        "scripts": [
                        "./node_modules/alertifyjs/build/alertify.min.js"
                        ]


            (2) after angular.json file configuration we should go to src/style.css according to  
                [ projects >> GPACollector >> architect >> build >> styles

                should import like below

                
                        @import '../node_modules/alertifyjs//build/css/alertify.min.css';
                        @import '../node_modules/alertifyjs//build/css/themes/bootstrap.min.css';