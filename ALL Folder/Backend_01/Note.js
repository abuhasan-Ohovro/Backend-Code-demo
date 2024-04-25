/*
    => Backend development depends on to major things:
        1. A programming language (JavaScript).
        2. A Database (MonGo DB).
    
    => A backend directory structure is like this:
       
         package.json => To manage all the library packages
         .env => it helps to deploy the app
         src =>
             
              index -> DB connects, it is basically the entry point of the application
              app -> config,cookie
              constants -> enums,DB-name

        More on Directory Structure :

        => In all backend application the directory Structure is like this :
          
             -> DB
             -> Models
             -> Controllers
             -> Routers
             -> Middle wares
             -> Utils
             -> More( depends on the specifiaction of the application)
*/

/* 
        In every backend system works like the following way :
                
              computer/moblie (request or query)   <->  Express (A web fremwork to connect browser and the server)   <->   Server
         */