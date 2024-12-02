import type { BranchShift } from "../features";

export interface AllowedBranch {
  id: number;
  name: string;
}

export interface Branch {
  id: number;
  name: string;
  address: string;
  phone: string;
  comment: string;
  inn: string;
  lat: number;
  long: number;
  radius: number;
  smena: BranchShift[];
}
