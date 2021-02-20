# EmployeesApp

_MEAN-CRUD_

### Cors error

_With this line the command is executed to solve the Cors error._

```
"start": "ng serve --proxy-config proxy.config.json"
```

### The file **proxy.config.json**

_Add these lines in **proxy.config.json**_

```
{
 "/api/*":{
     "target" : "http://localhost:3000",
     "secure" : false,
     "logLevel" : "debug"
 }
}
```