export interface userData {
    firstName : string,
    lastName: string,
    email:string,
    phone:number,
    password:string,
    roll:string
    isOtPVerified:boolean
}

export class userProfile{
    firstName : string;
    lastName: string
    email : string
    phone:number
    password:string 
    roll:string
    isOtPVerified:boolean
    constructor({firstName,lastName,email,phone,password,roll,isOtPVerified}:userData){
        this.firstName = firstName
        this.lastName  = lastName,
        this.email = email,
        this.phone = phone,
        this.password = password,
        this.roll = roll
        this.isOtPVerified = isOtPVerified
    }
}
