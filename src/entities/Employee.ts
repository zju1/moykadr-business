import type { AllowedBranch } from "./Branch";

export interface Employee {
  id: number;
  full_name: string;
  phone: string;
  login: string;
  allowed_branches: AllowedBranch[];
}
