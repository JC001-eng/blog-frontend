import { useRouter } from "next/router";
import { useEffect } from "react";

import React from "react";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem("token");

      if (!token) {
        router.push("/auth/login");
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
