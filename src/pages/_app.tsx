import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { LoadingScreenContainer } from "../components/LoadingScreen.styles";

const App: React.FC<{ Component: React.ElementType; pageProps: any }> = ({
  Component,
  pageProps,
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = (): void => setIsLoading(true);
    const handleComplete = (): void => setIsLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return (): void => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
      {isLoading && <LoadingScreenContainer />}
      <Component {...pageProps} />
    </>
  );
};

export default App;
