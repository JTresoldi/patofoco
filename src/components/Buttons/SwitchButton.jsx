export function SwitchButton({ value, onChange, options }) {

    return (
        <div className="inline-flex rounded-xl border border-[#EBD6B6] bg-[#FFF8E9]">
            {options.map((option) => {
                const isSelected = value === option.value;

                return (
                    <button
                        key={option.value}
                        type="button"
                        onClick={() => onChange(option.value)}
                        className={`
                            flex items-center gap-2
                            rounded-lg px-4 py-2 
                            text-sm font-medium 
                            transition
                            ${isSelected
                                ? "bg-[#F8C75A] shadow-md"
                                : "bg-transparent hover:bg-[#FFF1D2]"
                            }
                        `}
                    >
                        {option.icon && <option.icon size={16} />}
                        {option.label}
                    </button>
                )
            })}
        </div>
    )
}