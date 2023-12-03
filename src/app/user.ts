import {Role} from "./role";


export interface User {
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    email:string;
    phone:string;
    addresse:string;
    roleName:string;
    token?: string;
}
