export interface cart {
     userId:string,
     cartProductId:string[]
}

export class usercart{
    userId: string;
    cartProductId:string[]
    constructor({userId,cartProductId}:cart){
        this.userId = userId;
        this.cartProductId = cartProductId
    }
}
                    