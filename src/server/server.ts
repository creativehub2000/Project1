import express, { Application, Request, Response } from 'express';


export class Server {

    public express: Application = null;

    // private somePrivateLogic( ) {
    //     console.log(`Some private logic...`);
    // }

    constructor( ) {
        this.express = express();
        this.initializeServer();
    }
    
    private initializeServer( ) {
        // middleware
        this.express.use( express.json() );

        this.express.get( '/api', (request: Request, response: Response) => {
            response.send(`Welcome to Our API!`);
        });

        this.express.post( '/api/users', (request: Request, response: Response) => {

            // get username & password from body
            const {username, password} = request.body;

            if (!username || !password ) {
                response.sendStatus(400);
                return;
            }

            response.send({userId: 'USER0001'});
        });
    }

    public listen( port: number ) {
        this.express.listen(port, ( ) => {
            console.log(`Server running at ${port}`);
        });
    }
}

