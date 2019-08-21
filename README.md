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
