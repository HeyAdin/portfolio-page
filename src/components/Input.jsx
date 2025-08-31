export const Input = ({ inputText, inputType, placeholderText , onChange }) => {
    return <div className="w-full">
        <div className="2xl:text-md text-[12px] font-bold my-1 ">{inputText}</div>
        <input
            type={inputType}
            placeholder={placeholderText}
            required={'true'}
            onChange={onChange}
            className=" w-full bg-gray-700 text-white border-0 rounded-md 2xl:p-2 md:p-[5px] p-[3px] mb-1 focus:bg-gray-600 focus:outline-none tranistion ease-in-out duration-150 placeholder-gray-300 2xl:text-[16px] text-[11px]" />
    </div>
}