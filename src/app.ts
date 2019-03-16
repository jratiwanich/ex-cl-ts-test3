import express = require("express");

// export const app = express();

export class App {
    public  app = express();

    public  test() {
        this.app.get( "/", ( req, res ) => {
            // render the index template
            res.send( "index - Hello Typescript express" );
        } );

        return this.app;
    }

}

const app = new App().test();

module.exports = app;

// app.get( "/", ( req, res ) => {
//     // render the index template
//     res.send( "index - Hello Typescript express" );
// } );

/******
 * TEST URL
 * https://rtlgmemhl5.execute-api.us-west-1.amazonaws.com/latest
 */
