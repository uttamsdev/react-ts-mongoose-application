import mongoose from "mongoose";
import config from "./app/config";
import app from "./app";

async function main(){
    try {
        mongoose.connect(config.database_url as string);
        app.listen(config.port, ()=> {
            console.log("Listening to port: ",config.port);
        })
    } catch (error) {
        console.log(error);
    }
}
main()