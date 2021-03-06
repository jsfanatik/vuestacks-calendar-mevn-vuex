# vuestacks-calendar-mevn-vuex/client

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

![alt text](https://raw.githubusercontent.com/jsfanatik/vuestacks-calendar-mevn-vuex/master/client/src/assets/cal-screen3.jpg)

### Overview

The VueStacks calendar MEVN demo utilizes an Axios HTTP client and Express server to create and delete calendar events.

See full component in ```components/Calendar.vue```

#### Note regarding Vuex:

```getEvents ()``` is a callback function that dispatches an action in store.js (Vuex store). The action retrieves the inputted event from the database then commits a mutation. State is then updated with the retrieved event. A ```getter ()``` method returns the state to the component (see: ```:events="this.$store.getters.getEvents"``` in Calendar.vue).

See ```routes/tasks.js``` to view Express router setup.

### Setting Up Node/Express/MongoDB

1) Navigate to the folder “vuestacks-calendar-mevn” in the CLI
2) Run npm init
3) Run nodemon server to start the server
4) In cloud.mongodb.com, retrieve the connection string for your MongoDB cluster
5) Add your connection string to ```const uri = ''``` in ```routes/tasks.js```

Enjoy the demo! Submit an issue if you see anything that could be improved!
