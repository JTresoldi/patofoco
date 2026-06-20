import { FaMusic } from "react-icons/fa";
import { Button } from "../Buttons/Button";
import { Card } from "../Cards/Card";

export function TopBar() {

    return (
        <Card className="mt-10" width="w-[800px]">
            <div className="flex w-full items-center justify-between">
                <h1>patofoco</h1>
                <Button 
                    variant="secondary"
                    onClick={() => console.log("Abrir link pro spotify")}
                >
                    <FaMusic /> 
                </Button>
            </div>
        </Card>
    )
}