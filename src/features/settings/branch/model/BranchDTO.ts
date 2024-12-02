export interface BranchDTO {
  id?: number;
  name: string;
  phone: string;
  address: string;
  comment: string;
  inn: string;
  lat: number;
  long: number;
  radius: number;
  latlong: string;
  smena: BranchShift[];
}

export interface BranchShift {
  name: string;
  start: string;
  end: string;
  id?: number;
}
