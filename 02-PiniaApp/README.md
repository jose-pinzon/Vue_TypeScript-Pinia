
```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```


#PiniaApp Demos


#Dev

1.Ejecurtar
```
 Yarn install
 npm install
```

 2. Levantar el backend server
 ```
 yarn backend-server 
 npm run backed-server
 ```

 3.Ejecutar la aplicacion de vue.js
 ```
 yarn dev
 npm run dev
 ```

4.para usar pinia y tanstack
  ```
   VueQueryPlugin.install( app, {
    queryClientConfig:{
        defaultOptions:{
            queries:{
                gcTime: 1000 * 120, //2 minutes
                refetchOnReconnect: 'always' //cuando el cliente se reconecte ya tenga todos los datos cargados
            }
        }
    }
})
 ```