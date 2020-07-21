# Simple Angular App using RxJS state management 

## Project Details
Created an angular 7 project with 3 components. <br/>
Search component that accepts a form input field, and two radio buttons(see diagram below).  <br/>
The user enters a search string and based on the radio selection either a Bing Results Component or Google Results Component will be loaded onto the page via DI. <br/>
When the Search string is entered,  State Service would be notified and either Bing/Google will be loaded via the <router-outlet> with a simple text “this is the (bing/google) component. <br/>
This component can be used for any search service. Easy for extendable. <br/>

## Project created by Angular CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Description

Angular project that shows simple usage of Dependency Injection and RxJS

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
