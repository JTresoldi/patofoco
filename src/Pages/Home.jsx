import { FaBed, FaClock, FaMugHot, FaPause, FaPlay, FaUndoAlt, FaVolumeUp } from "react-icons/fa";
import { useState } from "react";
import { Card } from "../components/Cards/Card";
import { Button } from "../components/Buttons/Button";
import { SwitchButton } from "../components/Buttons/SwitchButton";
import { Timer } from "../components/Timer/Timer";
import hiDuck from "../assets/hi-duck/hi-duck.gif";
import egg from "../assets/egg/egg.gif";

const options = [
    {value: "pomodoro", label: "pomodoro", icon: FaClock },
    {value: "short", label: "pausa curta", icon: FaMugHot },
    {value: "long", label: "pausa longa", icon: FaBed },
];

const timerModes = {
    // pomodoro: 1 * 60,
    pomodoro: 4,
    short: 5 * 60,
    long: 15 * 60,
}

export function Home() {
    const [mode, setMode] = useState("pomodoro");
    const [timeLeft, setTimeLeft] = useState(timerModes.pomodoro);
    const [isRunning, setIsRunning] = useState(false);
    const [cycles, setCycles] = useState(0);

    function handleChangeMode(newMode) {
        setMode(newMode);
        setTimeLeft(timerModes[newMode]);
        setIsRunning(false);
    }

    function handleFinishTimer() {
        setIsRunning(false);

        if (mode === "pomodoro") {
            setCycles((previousCycles) => previousCycles + 1);
        }
    }

    return (
        <div className="flex flex-col items-center space-y-2">
            <Card className="flex flex-col">
                <Timer 
                    mode={mode}
                    totalTime={timerModes[mode]}
                    timeLeft={timeLeft}
                    isRunning={isRunning}
                    onTimeChange={setTimeLeft}
                    onFinish={handleFinishTimer}
                />
                <div className="justify-center flex gap-4">
                    <Button variant="secondary"><FaVolumeUp /> </Button>
                    <Button 
                        variant="primary" 
                        className="w-50" 
                        onClick={() => {
                            if (timeLeft === 0) {
                                setTimeLeft(timerModes[mode]);
                                setIsRunning(true);
                                return;
                            }
                            setIsRunning(!isRunning);
                        }}
                    >
                        {isRunning ? <FaPause /> : <FaPlay />} 
                        <h1>{isRunning ? "pausar" : "iniciar"}</h1>
                    </Button>
                    <Button 
                        variant="secondary"
                        onClick={() => {
                            setIsRunning(false);
                            setTimeLeft(timerModes[mode]);
                        }}
                    >
                        <FaUndoAlt /> 
                    </Button>
                </div>
                <div className="justify-center flex gap-4">
                    <SwitchButton 
                        value={mode}
                        onChange={handleChangeMode}
                        options={options}
                    />
                </div>
            </Card>
            <Card width="w-[300px] justify-center">
                <div className="flex gap-2 items-center">
                    <p>ciclos:</p>
                    <div className="flex items-center">
                        {Array.from({ length: cycles }).map((_, index) => (
                            <img 
                                key={index} 
                                src={hiDuck} 
                                alt="patinho" 
                                className="h-10 w-10" 
                            />
                        ))}
                        <img 
                            src={egg} 
                            alt="ovo" 
                            className="w-10 h-10"
                        />
                    </div>
                </div>
            </Card>
        </div>
    )
}