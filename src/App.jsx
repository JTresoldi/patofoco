import { Outlet } from "react-router-dom";
import { TopBar } from "./components/TopBar/TopBar";

export default function App() {
    return (
        <div className="flex flex-col items-center h-screen overflow-hidden bg-[#CFE9F2]">
            <TopBar />

            <main className="w-full flex justify-center p-6">
                <Outlet />
            </main>
        </div>
    )
}