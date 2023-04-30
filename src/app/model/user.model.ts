export class User {
    constructor(
        private id: string,
        private email: string,
        private token: string,
        private expiry: Date
    ) { }
}