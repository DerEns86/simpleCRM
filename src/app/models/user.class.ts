export class User {
    firstName: string;
    lastName: string;
    birthdate: number;
    street: string;
    zip: number;
    city: string;
    email: string

    constructor(obj: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.birthdate = obj ? obj.birthdate : '';
        this.street = obj ? obj.street : '';
        this.zip = obj ? obj.zip : '';
        this.city = obj ? obj.city : '';
        this.email = obj ? obj.email : '';
    }

    public toJson() {
        return {

            firstName: this.firstName,
            lastName: this.lastName,
            birthdate: this.birthdate,
            street: this.street,
            zip: this.zip,
            city: this.city,
            email: this.email
        }
    }
}

