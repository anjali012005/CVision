import ProtectedRoute from "@/components/ProtectedRoute";
import Register from "@/components/Register/Register";
import Image from "next/image";

export default function Home() {
  return (
    <ProtectedRoute>
    <div>
      <Register/>
    </div>
    </ProtectedRoute>
  );
}
