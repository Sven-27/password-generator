export const StrengthObject = {
    empty: (
        <div className="flex items-center gap-2">
                <div className="border border-2 border-white w-[0.65rem] h-7" />
                <div className="border border-2 border-white w-[0.65rem] h-7" />
                <div className="border border-2 border-white w-[0.65rem] h-7" />
                <div className="border border-2 border-white w-[0.65rem] h-7" />
        </div>
    ),
    tooWeak: (
        <div className="flex items-center gap-4">
            <p>Too Weak!</p>
            <div className="flex items-center gap-2">
                <div className="bg-red w-[0.65rem] h-7" />
                <div className="border border-2 border-white w-[0.65rem] h-7" />
                <div className="border border-2 border-white w-[0.65rem] h-7" />
                <div className="border border-2 border-white w-[0.65rem] h-7" />
            </div>
        </div>
    ),
    weak: (
        <div className="flex items-center gap-4">
            <p>Weak</p>
            <div className="flex items-center gap-2">
                <div className="bg-orange w-[0.65rem] h-7" />
                <div className="bg-orange w-[0.65rem] h-7" />
                <div className="border border-2 border-white w-[0.65rem] h-7" />
                <div className="border border-2 border-white w-[0.65rem] h-7" />
            </div>
        </div>
    ),
    medium: (
        <div className="flex items-center gap-4">
            <p>Medium</p>
            <div className="flex items-center gap-2">
                <div className="bg-yellow w-[0.65rem] h-7" />
                <div className="bg-yellow w-[0.65rem] h-7" />
                <div className="bg-yellow w-[0.65rem] h-7" />
                <div className="border border-2 border-white w-[0.65rem] h-7" />
            </div>
        </div>
    ),
    strong: (
        <div className="flex items-center gap-4">
            <p>Strong</p>
            <div className="flex items-center gap-2">
                <div className="bg-green w-[0.65rem] h-7" />
                <div className="bg-green w-[0.65rem] h-7" />
                <div className="bg-green w-[0.65rem] h-7" />
                <div className="bg-green w-[0.65rem] h-7" />
            </div>
        </div>
    ),
}