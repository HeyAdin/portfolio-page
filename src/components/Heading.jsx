export const Heading = ({ headingTextWhite, headingTextGray }) => {
    return <div>
        <h1 className="2xl:text-6xl lg:text-4xl text-3xl font-[700] ">{headingTextWhite}</h1>
        <h1 className="text-[#363334] 2xl:text-6xl lg:text-4xl text-3xl font-[700] mb-2">{headingTextGray}</h1>
    </div>
}