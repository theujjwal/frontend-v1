export class Employee {
    // private empId: String;
    // private firstName: String;
    // private lastName: String;
    // private password: String;
    // private email: String;
    // private phoneNumber: String;
    // private pointsGained: Number;

    constructor(
        public empId: String,
        public firstName: String,
        public lastName: String,
        public password: String,
        public email: String,
        public phoneNumber: String,
        public pointsGained: Number) {

    }

    public getFullName(): String {
        return `${this.firstName} ${this.lastName}`;
    }

}
