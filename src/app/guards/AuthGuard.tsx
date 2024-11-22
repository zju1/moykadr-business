import type { PropsWithChildren } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

export function AuthGuard(props: PropsWithChildren) {
  const { user } = useAuth();

  return !user ? <Navigate to="/auth" /> : props.children;
}
