export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: {
    id: number;
    email: string;
    name: string;
  };
  token: string;
}

export type UserDetailsDTO = {
  user: {
    id: number;
    email: string;
    name: string;
    createdAt: string;
  };
};

export type UserDetails = {
  id: number;
  email: string;
  name: string;
  createdAt: string;
};
