export const Input = ({ inputText, inputType, placeholderText }) => {
    return <div className="w-full">
        <div className="2xl:text-md xl:text-[12px] font-bold my-1 ">{inputText}</div>
        <input type={inputType} placeholder={placeholderText} required={'true'}
            className=" w-full bg-gray-700 text-white border-0 rounded-md 2xl:p-2 xl:p-[5px] 2xl:mb-1 xl:mb-[4px] focus:bg-gray-600 focus:outline-none tranistion ease-in-out duration-150 placeholder-gray-300 2xl:text-[16px] xl:text-[10px]" />
    </div>
}