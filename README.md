# Angular | Frontend development with Javascript/Typescript

## Author

Kevin Doolaeghe

## References

* [Angular official website](https://angular.io/)
* [Mosh Hamedani | Angular tutorial video](https://www.youtube.com/watch?v=k5E2AVpwsko&t=630s)

## Setup development environment

* Update system and install `nodejs` and `npm` :
```
sudo apt update
sudo apt install nodejs npm
```

* Update `nodejs` :
```
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
```

* Check `nodejs` version to see if it can support Angular :
```
node --version
```

* Install Angular globally via `npm` :
```
sudo npm install -g @angular/cli
```

* Check Angular version that is installed :
```
ng --version
```

* Create new project called `hello-world` :
```
ng new hello-world
```

* Open project with Visual Studio Code :
```
code .
```

## Test application

* Lauch the Angular application :
```
ng serve
```

* Check `localhost:8000` address on a web browser to verify that the application works properly

## Angular app architecture

- Component : Parts of a structured view
- Module : Logical links between components
- Service : Logic used to produce a specific job (e.g. consume HTTP endpoints)

* Add a new component : 
```
ng g c <component>
```

* Add a new service :
```
ng g s <service>
```