// src/services/AuthService.ts
import api from './api';

export interface LoginPayload {
    email: string;
    password: string;
}

export interface RegisterPayload {
    name: string;
    email: string;
    password: string;
}

export interface AuthResponse {
    token: string;
}

export const login = async ({ email, password }: LoginPayload): Promise<AuthResponse> => {
    try {
        const response = await api.post<AuthResponse>('/auth/login', { email, password });
        localStorage.setItem('token', response.data.token); //
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Login failed.');
    }
};

export const register = async (userData: RegisterPayload): Promise<any> => {
    try {
        const response = await api.post('/auth/register', userData);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Registration failed.');
    }
};

//  Export both as an object so you can use `import AuthService from ...`
export default { login, register };
