const variants = {
    primary: `
        bg-[#F8C75A]
        text-[#5A432C]
        hover:bg-[#E9B84D]
        active:bg-[#D9A23B]
        disabled:bg-[#EBDDBF]
        disabled:text-[#5A432C]/60
        border
        border-[#E7CF9E]
        shadow-md
        shadow-[#D8C3A4]
    `,
    secondary: `
        bg-[#FFF7E7]
        text-[#6B563B]
        hover:bg-[#F9EFD8]
        active:bg-[#F7E1B9]
        disabled:bg-[#EFE7D6]
        disabled:text-[#6B563B]/60
        border
        border-[#EBD6B6]
        shadow-md
        shadow-[#D8C3A4]
    `,
    ghost: `
        bg-transparent
        text-[#5A432C]
        hover:bg-[#FFF1D2]
        active:bg-[#F7E1B9]
        disabled:bg-[#EFE7D6]
        disabled:text-[#5A432C]/60
        border
        border-transparent
        hover:border-[#EBD6B6]
    `,
}

export function Button({ onClick, children, disabled, className = "", variant = "primary" }) {

    return (
        <div className="flex items-center">
            <button
                type="button"
                onClick={onClick}
                disabled={disabled}
                className={`
                    flex
                    p-4
                    gap-3
                    items-center
                    justify-center
                    rounded-full
                    cursor-pointer
                    transition
                    disabled:cursor-not-allowed
                    disabled:opacity-70
                    ${variants[variant]}
                    ${className}
                `}
            >
                {children}
            </button>
        </div>
    )
}