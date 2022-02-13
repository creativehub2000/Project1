import { Server } from './server/Server';


export class Launcher {

    public server: Server;

    constructor( ) {
        this.server = new Server( );
    }

    public launchApp( ) {
        // console.log(`Starting App...`);
        this.server.listen( 8080 );
        // Calling private method by casting to any! Rarely Used!
        // (this.server as any).somePrivateLogic( );
    }
}

new Launcher( ).launchApp( );

// export class Utils {

//     public static toUpperCase( are: string ) {
//         return '';
//     }
// }
