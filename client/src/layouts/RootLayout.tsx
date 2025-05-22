import { Sidebar } from "@/components/Sidebar";
import { Outlet } from "react-router";

export default function RootLayout() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full">
                <Outlet />
            </div>
        </div>
    )
}
