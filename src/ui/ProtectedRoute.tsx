import { PropsWithChildren } from "react";

function ProtectedRoute({ children }: PropsWithChildren) {
  return <div>{children}</div>;
}

export default ProtectedRoute;

