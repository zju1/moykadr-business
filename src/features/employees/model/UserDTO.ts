export interface AllowedBranchInDTO {
  id: number;
}

export interface UserDTO {
  id?: number;
  full_name: string;
  phone: string;
  login: string;
  password: string;
  allowed_branches: AllowedBranchInDTO[];
}
