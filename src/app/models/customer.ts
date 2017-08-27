export class Customer {
    constructor(
        public _id?: string,
        public token?: string,
        public gender?:string,
        public first_name?:string,
        public last_name?:string,
        public birthday?:Date,
        public password?:string
    ){}
}