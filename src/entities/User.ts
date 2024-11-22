import type { AllowedBranch } from "./Branch";

export interface User {
  id: number;
  full_name: string;
  phone: string;
  token: string;
  allowed_branches: AllowedBranch[];
}
