# The Milk Store

An application to see available products with information about amount available and product types.

### Prerequisites

A [MongoDB server](https://www.mongodb.com/)

How the data should be set up:
```
{
_id: string,
id: string,
name: string,
storage: number,
type: string
}
```

## Getting Started

Clone the repository. <br>
Change the .envtemplate to .env <br>
Change the content of the .env file to your own information. <
Install the packages in /server and /client. <br>
Run the /server and /client in two seperate windows.

### Installing

Cloning the repository

```
git clone https://github.com/Sallis-GH/the-milk-store.git
```

Installing server packages

```
cd /server
npm i
```
Installing client packages

```
cd /client
npm i
```

Starting the /client

```
cd /client
npm start
```

Starting the /server

```
cd /server
npm start
```


If you set up everything correctly your page should look something like this:
![image](https://user-images.githubusercontent.com/74314359/215074053-2288ee14-9d3d-4fbe-bff8-b4a3ca602fe8.png)


## Built With

* [React](https://reactjs.org) - Front-end library
* [Express](https://expressjs.com/) - Back-end framework
* [TailwindCSS](https://tailwindcss.com/) - Styling Framework
* [Framer Motion](https://www.framer.com/motion/) - React motion library

## Author

* **Salamon Rørvik** - [Sallis-GH](https://github.com/Sallis-GH)
