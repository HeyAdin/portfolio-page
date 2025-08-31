import { motion } from "framer-motion"
import { Heading } from "./Heading"
import { useState } from "react"
import { Input } from "./Input"
let timer;
export function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(){
        alert("form submitted I'll get back to you soon");
    }

    return (
        <motion.div
            initial={{ y: -50, x: -50, scale: 0.8, opacity: 0 }}
            whileInView={{ y: 0, x: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="2xl:mb-70 xl:mb-45 font-Poppins md:mb-70 mb-20 z-100">
            <Heading headingTextWhite={"LET'S WORK"} headingTextGray={"TOGETHER"} />
            <p className="2xl:mt-3 mt-1 2xl:text-sm xl:text-[12px] md:text-[11px] text-[10px] 2xl:p-2 xl:p-[8px] md:p-[5px] p-[2px]">Please contact me directly on <a className="underline" href="mailto:adinahmad003@gmail.com">adinahmad003@gmail.com</a> or through this form</p>
            <div className=" w-full  px-2">
                <div className="flex justify-center 2xl:gap-20 xl:gap-15 md:gap-10 sm:gap-10 gap-7 w-[90%]">
                    <Input inputText={"Name"} inputType={"text"} placeholderText={"John"} onChange={(e) => {
                        clearTimeout(timer);
                        timer = setTimeout(() => {
                            console.log(e.target.value);
                        }, 500);
                    }} />
                    <Input inputText={"Email"} inputType={"email"} placeholderText={"John@example.com"} onChange={(e) => {
                        clearTimeout(timer);
                        timer = setTimeout(() => {
                            console.log(e.target.value);
                        }, 600);
                    }} />
                </div>
                <div className="w-[97%]">
                    <div className="2xl:text-md text-[12px] font-bold mt-1">Your message</div>
                    <textarea
                        placeholder="Hey ...."
                        rows='7'
                        className=" w-[93%] 2xl:text-[16px] text-[10px] bg-gray-700 text-white border-0 rounded-md p-2 mb-2 mt-2 focus:bg-gray-600 focus:outline-none tranistion ease-in-out duration-150 placeholder-gray-300 "
                        name=""
                        maxLength='1000'
                        onChange={(e) => {
                            clearTimeout(timer);
                            timer = setTimeout(() => {
                                console.log(e.target.value);
                            }, 500);
                        }}
                    ></textarea>
                </div>
                <div className=" w-[300px] ">
                    {/* <button className="w-full bg-gradient-to-r from-[#aeaeaf] to-[#657498] text-black text-md font-[500] py-2 px-4 rounded-md hover:bg-[#59595a] hover:to-[#40465f] transition ease-in-out duration-200 cursor-pointer">
                            Submit
                        </button> */}
                    <motion.button
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ boxShadow: "0px 0px 20px 0px white" }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true }}
                        onClick={handleSubmit}
                        className="border border-gray-700 2xl:mx-4 xl:mx-1  2xl:my-2 xl:my-1  hover:bg-[#1C1A19] items-center 2xl:px-6 px-2 2xl:py-2 xl:py-1 md:py-[2px] py-[1px] rounded-xl cursor-pointer 2xl:w-[70%] xl:w-[40%] 2xl:text-[16px] xl:text-[12px]"> Submit
                    </motion.button>
                </div>
            </div>
        </motion.div>
    )
}