import { useEffect, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import duckWalking from "../../assets/walking/duck-walking.gif";
import duckStatic from "../../assets/walking/duck-static.png";
import duckSleeping from "../../assets/sleeping/sleeping-duck.gif";


export function Timer({ mode, totalTime, timeLeft, isRunning, onTimeChange, onFinish }) {
    const percentage = (timeLeft / totalTime) * 100;
    const angle = (percentage / 100) * -360 - 90;
    const hasFinished = useRef(false);

    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
        onTimeChange((previousTime) => {
            if (previousTime <= 1) {
            return 0;
            }

            return previousTime - 1;
        });
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning, onTimeChange]);

    useEffect(() => {
        if (timeLeft > 0) {
            hasFinished.current = false;
        }

        if (isRunning && timeLeft === 0) {
            hasFinished.current = true;
            onFinish?.();
        }
    }, [timeLeft, isRunning, onFinish]);

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remaningSeconds = seconds % 60;

        return `${String(minutes).padStart(2, "0")}:${String(remaningSeconds).padStart(2, "0")}`;
    }
    

    const size = 320;
    const center = size / 2;
    const radius = 155;

    const angleInRadians = (angle * Math.PI) / 180;

    const duckX = center + radius * Math.cos(angleInRadians);
    const duckY = center + radius * Math.sin(angleInRadians);

    const modeImages = {
        pomodoro: {
            running: duckWalking,
            stopped: duckStatic,
        },
        short: {
            running: duckSleeping,
            stopped: duckSleeping,
        },
        long: {
            running: duckSleeping,
            stopped: duckSleeping,
        }
    }

    const currentImage = isRunning ? modeImages[mode].running : modeImages[mode].stopped;

    return (
        <div className="relative w-80 h-80">
            <CircularProgressbar 
                value={percentage} 
                text={formatTime(timeLeft)}
                strokeWidth={6}
                counterClockwise
                styles={buildStyles({
                    pathColor: "#F8C75A",
                    textColor: "#6B563B",
                    trailColor: "#FFF1D2",
                    textSize: "18px",
                })}
            />
            <img 
                src={currentImage} 
                alt="patinho parado" 
                className="h-15 w-15 absolute transition-all duration-500"
                style={{
                left: `${duckX}px`,
                top: `${duckY}px`,
                transform: "translate(-50%, -50%)"
                }}
            />
        </div>
    )
}