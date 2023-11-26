export type TAddress = {
    state: string;
    city: string;
    country: string;
}
export type TUser = {
    id: number;
    username: string;
    password: string;
    email: string;
    name: string;
    address: TAddress;
    isActive?: boolean;
}