export const Input = ({ inputText, inputType, placeholderText }) => {
    return <div className="w-full">
        <div className="text-md font-bold my-1 ">{inputText}</div>
        <input type={inputType} placeholder={placeholderText} required={'true'}
            className=" w-full bg-gray-700 text-white border-0 rounded-md p-2 mb-1 focus:bg-gray-600 focus:outline-none tranistion ease-in-out duration-150 placeholder-gray-300 " />
    </div>
}