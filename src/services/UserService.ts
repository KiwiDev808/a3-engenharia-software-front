import type { AxiosInstance } from "axios";

interface RegisterData {
    email: string;
    password: string;
    checkPassword: string;
}

export class UserService {
    constructor(private readonly client: AxiosInstance) {
    }

    async register(data: RegisterData) {
        await this.client.post('/users', data);
    }
}