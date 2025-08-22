export const Button = ({ buttonText, buttonIcon, buttonLink }) => {
    return <div>
        <a href={buttonLink} className=" cursor-pointer 2xl:text-lg xl:text-sm font-[500] flex 2xl:gap-3 xl:gap-2 items-center bg-white  2xl:mx-2 xl:mx-4 transform hover:-translate-y-1 duration-300 text-[#123458] 2xl:px-3 xl:px-2  2xl:py-1 xl:py-[4px] rounded-lg justify-center">{buttonText} {buttonIcon}</a>
    </div>
}