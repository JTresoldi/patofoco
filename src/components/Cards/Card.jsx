export function Card({ children, className = "", width = "w-[500px]" }) {

    return (
        <div
            className={`
                flex items-center p-4 space-y-4
                rounded-4xl shadow-lg
                bg-[#FFF8E9] 
                ${width}
                ${className}    
            `}
        >
            {children}
        </div>
    )
}