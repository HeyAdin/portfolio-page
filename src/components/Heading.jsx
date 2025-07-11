export const Heading = ({ headingTextWhite, headingTextGray }) => {
    return <div>
        <h1 className="text-7xl font-[700] ">{headingTextWhite}</h1>
        <h1 className="text-[#363334] text-7xl font-[700] ">{headingTextGray}</h1>
    </div>
}