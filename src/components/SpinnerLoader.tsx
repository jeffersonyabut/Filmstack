import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
export default function SpinnerLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ClipLoader color="#b4b4b4" loading={loading} speedMultiplier={0.5} />
    </>
  );
}
