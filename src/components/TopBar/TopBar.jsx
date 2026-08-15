import { FaImage, FaMusic } from "react-icons/fa";
import { Button } from "../Buttons/Button";
import { Card } from "../Cards/Card";
import Modal from "../Modal/Modal";
import { useState } from "react";

export function TopBar({ backgrounds, selectedBackground, onBackgroundChange }) {
    const [openBackgroundModal, setOpenBackgroundModal] = useState(false);

    return (
        <>
            <Card className="mt-10" width="w-[800px]">
                <div className="flex w-full items-center justify-between">
                    <h1>patofoco</h1>
                    <div className="flex gap-4">
                        <Button
                            variant="secondary"
                            onClick={() => setOpenBackgroundModal(true)}
                        >
                            <FaImage />
                        </Button>
                        <Button 
                            variant="secondary"
                            onClick={() => console.log("Abrir link pro spotify")}
                            >
                            <FaMusic /> 
                        </Button>
                    </div>
                </div>
            </Card>
            <Modal open={openBackgroundModal} onClose={() => setOpenBackgroundModal(false)}>
                <div className="grid grid-cols-4 gap-4">
                    {backgrounds.map(background => {
                        const isSelected = selectedBackground === background.id;

                        return (
                            <button
                                key={background.id}
                                type="button"
                                onClick={() => onBackgroundChange(background.id)}
                                className={`
                                    overflow-hidden rounded-xl border-2 transition-all
                                    ${isSelected ? "border-blue-300" : "border-transparent hover:border-white/40"}
                                `}
                            >
                                <img 
                                    src={background.thumbnail} 
                                    alt={background.name} 
                                    className="aspect-video w-full object-contain"
                                />
                                <div className="px-3 py-2">
                                    <span className="text-sm">
                                        {background.name}
                                    </span>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </Modal>
        </>
    )
}