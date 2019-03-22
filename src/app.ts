import express = require("express");
//import * as express from 'express';

// export const app = express();

export class App {
    //public  app = express();
    public app: express.Application;

    constructor() {
        console.log("Start App constructor");
        this.app = express();
        this.testApi();
        this.testABC();
        console.log("Finished App constructor");
    }

    public  testApi() {
        this.app.get( "/", ( req, res ) => {
            // render the index template
            res.send( "index - Hello Typescript express" );
        } );

        return this.app;
    }

    public  testABC() {
        this.app.get( "/abc", ( req, res ) => {
            // render the index template
            res.send( {data: "Hello ABC"} );
        } );

        return this.app;
    }

    public  testXXX() {
        this.app.get( "/xxx", ( req, res ) => {
            // render the index template
            res.send( {data: "Hello xxxx"} );
        } );

        return this.app;
    }

}

// const app = new App().test();

module.exports = new App().app;

/******
 * TEST URL
 * https://rtlgmemhl5.execute-api.us-west-1.amazonaws.com/latest
 */
