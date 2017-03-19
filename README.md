# app

Contains application source code


## app/components

Contains stateless, lean components. We can use anywhere without big updates. When writing code we do not forget KISS.


## app/config

Contains static datas of app. With this folder, we can manage all static fields by one location.


## app/containers

Contains screen of app. You can create sub container components in related container.


### app/containers/{containerName}.js

It is presentational segment of component.It must be stateless.Do not write business logic and do not bind redux.


### app/containers/{containerName}Container.js

It is business and flow segment of component. It must contain only related presentational component. 


## app/helper

Contains util and helper class. These functions must be simple. 


## app/images

Contains images.


## app/redux/modules

Contains feature based redux elements. Every module must be same name with related container.


### app/redux/modules/{ModuleName}.js

It must be contain action types, actions and reducer. We want keep simple every changes. 
If we split these domains to seperate files, When add a new action, a lot of file affected. We escaping this case.


### app/redux/middlewares

Contains first-party middlewares.


## app/services

Contains wrappers of services.
