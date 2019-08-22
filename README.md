# Weather PWA App
A Web Application showcasing Angular as PWA Desktop App with Material Design Components

## Library Used
- Material Components: https://github.com/trimox/angular-mdc-web

## Add API Key
- Go to `https://openweathermap.org/api` to generate your own API key, please do note that you have to register. 
- Create an enum file and name it `apikey.ts` under `src/app/utilities/resources`.

Example: 
```
export enum APIKEY {
 KEY = "<API KEY HERE>"
}
```

## How to Run Project on Dev Server

- Run `npm install` to install dependencies.
- Run `npm install -g http-server`
- Run `ng serve` for a dev server and navigate to http://localhost:4200/.

## Chrome Flags
- Go to `chrome://flags` and search for `PWA`
- Enable `Desktop PWAs installable from the omnibox`

## Build Project and Install App As PWA

- Run `ng build --prod`
- Run `http-server -c-l dist/weather-and-places`
- On the omnibox click on install app for you to get started with the Application

## License
```
The MIT License

Copyright (c) 2010-2019 Google LLC. http://angular.io/license

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and 
associated documentation files (the "Software"), to deal in the Software without restriction, 
including without limitation the rights to use, copy, modify, merge, publish, distribute, 
sublicense, and/or sell copies of the Software, and to permit persons to whom the Software 
is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or 
substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT 
LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
