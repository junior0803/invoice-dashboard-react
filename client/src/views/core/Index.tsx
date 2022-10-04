import AppLayout from "@/components/app/AppLayout";
import { Outlet } from "react-router";

export default function AdminIndex() {
  return (
    <AppLayout layout="app">
      <Outlet />
    </AppLayout>
  );
}
