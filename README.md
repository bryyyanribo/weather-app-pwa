# Weather PWA App

## Add API Key
- Go to `https://openweathermap.org/api` to generate your own API key. 
- Create an enum file and name it `apikey.ts` under utilities/resources.

Example: 
```
export ENUM APIKEY {
 KEY = <API KEY HERE>
}
```

## How to Run Project on Dev Server

- Run `npm install` to install dependencies.
- Run `ng serve` for a dev server and navigate to http://localhost:4200/.

## Chrome Flags
Go to `chrome://flags` to enable all of PWA Experiments

## Build Project and Install App As PWA

- Run `npm build --prod`
- Run `http-server -c-l dist/<project-name>`


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
