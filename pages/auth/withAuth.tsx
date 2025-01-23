import { useRouter } from "next/router";
import { useEffect } from "react";

import React from "react";

interface WithAuthProps {
  [key: string]: any;
}

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
  const ComponentWithAuth = (props: WithAuthProps) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem("token");

      if (!token) {
        router.push("/auth/login");
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
