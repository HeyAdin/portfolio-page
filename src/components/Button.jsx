export const Button = ({ buttonText, buttonIcon, buttonLink }) => {
    return <div>
        <a href={buttonLink} className=" cursor-pointer text-md font-[500] flex gap-3 items-center bg-white  mx-2 transform hover:-translate-y-1 duration-300 text-[#123458] px-3 py-1 rounded-lg justify-center">{buttonText} {buttonIcon}</a>
    </div>
}