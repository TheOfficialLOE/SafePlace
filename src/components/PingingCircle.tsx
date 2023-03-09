
const PingingCircle = () => {
    return <span className="relative flex h-2.5 w-2.5 ml-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0ce877] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0ce877]"></span>
    </span>
};

export default PingingCircle;