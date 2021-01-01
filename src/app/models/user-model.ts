export class UserModel {
    constructor (
        public firstName:string,
        public lastName:string,
        public email:string,
        public favoriteDrink:string,
        public hobbies?:string[]
    ) {}
    
}