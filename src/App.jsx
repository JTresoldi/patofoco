import { Outlet } from "react-router-dom";
import { TopBar } from "./components/TopBar/TopBar";
import { useState } from "react";
import { backgrounds } from "./utils/backgrounds";

export default function App() {
    const [selectedBackground, setSelectedBackground] = useState("forest");

    const background = backgrounds.find(item => item.id === selectedBackground);

    return (
        <div className="relative flex flex-col items-center h-screen overflow-hidden bg-[#CFE9F2]">
            <video
                key={selectedBackground}
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src={background.video} type="video/webm" />
            </video>

            <div className="absolute inset-0 bg-black/10" />

            <div className="relative z-10 flex flex-col items-center w-full h-full">
                <TopBar 
                    backgrounds={backgrounds}
                    selectedBackground={selectedBackground}
                    onBackgroundChange={setSelectedBackground} 
                />

                <main className="w-full flex justify-center p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}