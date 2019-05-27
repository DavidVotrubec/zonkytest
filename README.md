# zonkytest
Test app for Zonky

## Task
- Sample app in any framework
- no UI/UX requirments specified
- load loans
- filter by %
- calculate average amount

## Example request
https://app.zonky.cz/api/loans/marketplace?rating__in=%5B%22B%22%2C%22C%22%5D.
See percent encoding  http://en.wikipedia.org/wiki/Percent-encoding
The `rating_in` is URL encododed, so the value is this rating__in=%5B"B"%2C"C"%5D
Which can in human language is this: `?rating_in=["B", "C"]`
But beware that square brackets are reserved for IPv6, so they can't be used in url directly. They need to be encoded.


# Zonkyapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

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
