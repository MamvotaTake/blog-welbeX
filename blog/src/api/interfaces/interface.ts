export interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
}

export interface IBlog {
    id: string;
    message: string;
    userId: string;
}