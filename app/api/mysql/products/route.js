// import the Request and Response classes
import { NextResponse, NextRequest } from "next/server";
import mysql from 'mysql2/promise';
let connectionParams = {
    host: 'host.docker.internal',
    port: 3306,
    user: 'root', // Password comes after this but i just like blank ''
    database: 'nikeshoes',
  }
// define and export the GET handler function
export async function GET(request) {
    try{
        const connection = await mysql.createConnection(connectionParams)
        let get_exp_query = ""
        get_exp_query = "SELECT * FROM nikeshoes.products"
        let values = []
        const [results] = await connection.execute(get_exp_query, values)
        connection.end()
        return NextResponse.json({products: results});
    } catch (err) {
        console.log('ERROR: API - ', (err).message);

        const response = {
            error: (err).message,
            returnedStatus: 200,
        }
        return NextResponse.json(response);
    }

    // response with the JSON object
    return NextResponse.json(response, { status: 200 });

}