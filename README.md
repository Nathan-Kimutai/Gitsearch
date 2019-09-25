# Gitsearch

GitSearch is an app that searches for peoples usernames and repositories on github
It uses HttpService as it service and the github api

## Author
[Nathan Kimutai](https://github.com/Nathan-Kimutai)


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


# Organisational API

Organisationaal api is an application programming interface that allows you to add and retrieve employees







## Getting started
You can use the editor of your choice but for this case I used [Idea IntelliJ](https://www.jetbrains.com/idea/download/)

If you don't have java already installed
Install JDK(Java Development Kit) through the following command:
```bash
sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update
sudo apt-get install oracle-java8-installer
```
We use gradle as our dependency manager as it is scripted unlike maven so to install gradle, do the following:
```bash
sudo apt install gradle
```
To get started with the wildlife tracker you need to do the following :
```bash
mkdir myprojects
cd myprojects
git clone https://github.com/Nathan-Kimutai/organapi.git
```
Make sure you recreate the database on your local machine. To do that execute the following schema:
It might or might not work so try
```$xslt
CREATE DATABASE organisational;
CREATE TABLE department(id serial PRIMARY KEY,name VARCHAR);
CREATE TABLE employees(id serial PRIMARY KEY,name VARCHAR,department VARCHAR);
CRATE TABLE employees_deparment(id serial PRIMARY KEY,dept_id integer,emp_id integer);
```

## Usage
Afer cloning the repository and changing to that directory run the following commands to launch the app

```bash
gradle build
gradle run
```
In the terminal locate the url showing your spark server
You can navigate to [http://localhost:4567/](http://localhost:4567/) as it works with most spark appications
You can the add the animal which thereafter you can add to endangered animals
 
## Testing using postmang
### Posting department
![Posting](src/main/resources/public/images/postdepartments.png)
### Getting departments
![Get department](src/main/resources/public/images/getdepartments.png)
## Technologies used
In the following app we used the following technologies
* Java
* Spark
* REST API

## Contributions
You can contribute to this project by making a pull request

## About me
`Nathan Kimutai` Java and Python programmer

## Licence
The license MIT &copy;