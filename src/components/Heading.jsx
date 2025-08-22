export const Heading = ({ headingTextWhite, headingTextGray }) => {
    return <div>
        <h1 className="2xl:text-6xl xl:text-4xl font-[700] ">{headingTextWhite}</h1>
        <h1 className="text-[#363334] 2xl:text-6xl xl:text-4xl font-[700] ">{headingTextGray}</h1>
    </div>
}