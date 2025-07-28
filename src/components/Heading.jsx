export const Heading = ({ headingTextWhite, headingTextGray }) => {
    return <div>
        <h1 className="text-6xl font-[700] ">{headingTextWhite}</h1>
        <h1 className="text-[#363334] text-6xl font-[700] ">{headingTextGray}</h1>
    </div>
}