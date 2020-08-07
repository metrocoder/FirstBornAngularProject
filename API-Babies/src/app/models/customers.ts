export class Customers {
    cId:number;
	username:string;
    password:string;
    
    constructor(cId:number, username:string, password:string)
    {
        this.cId = cId;
        this.username = username;
        this.password = password;
    }
}
