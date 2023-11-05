import { Navigate } from "react-router-dom";

import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";

export default function PageNotFound() {
  const { toast } = useToast();

  useEffect(() => {
    const toastTimeout = setTimeout(() => {
      toast({
        title: "Page not found. You will be redirected to the home page",
      });
    }, 0);

    return () => clearTimeout(toastTimeout);
  }, [toast]);

  return <Navigate to="/" />;
}
