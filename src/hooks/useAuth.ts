import { useAppSelector } from "../app/store/store.config";

export function useAuth() {
  const auth = useAppSelector((store) => store.auth);
  return auth;
}
