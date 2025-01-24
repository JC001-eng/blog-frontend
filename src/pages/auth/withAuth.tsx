import { useRouter } from "next/router";
import { useEffect } from "react";

import React from "react";

interface WithAuthProps {
  [key: string]: any;
}

const withAuth = (
  WrappedComponent: React.ComponentType<any>
): React.FC<WithAuthProps> => {
  const ComponentWithAuth = (props: WithAuthProps): JSX.Element => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem("token");

      if (!token) {
        (async (): Promise<void> => {
          await router.push("/auth/login");
        })().catch((error) => {
          console.error("Failed to navigate to login:", error);
        });
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  ComponentWithAuth.displayName = `WithAuth(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return ComponentWithAuth;
};

export default withAuth;
