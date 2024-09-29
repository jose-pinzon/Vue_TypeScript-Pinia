
export interface getClient{
    data: Client[];
    first: number;
    items: number;
    last: number;
    next: number;
    pages: number;
    prev: number| null;
}


export interface Client {
    id:       string;
    isActive: boolean;
    picture:  string;
    age:      number;
    name:     string;
    gender:   Gender;
    company:  string;
    email:    string;
    phone:    string;
    address:  string;
}





export enum Gender {
    Female = "female",
    Male = "male",
}
