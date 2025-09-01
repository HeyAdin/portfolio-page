const cn = (...classes) => classes.join(" ");
export const EmptyPage = () => {
    return <div className={cn('flex flex-col items-center justify-center md:items-start md:flex md:flex-row lg:pt-10 md:gap-15 lg:gap-20 2xl:gap-40 2xl:pt-15 pt-10 bg-gradient-to-t from-[#333130] to-[#151312] md:mask-b-from-50%  mask-b-from-90%',
        'bg-[radial-gradient(1px,transparent_1px)]',
        '[background-size:10px_10px]')}>
        <div className="h-screen w-screen flex flex-col items-center relative p-5 gap-10 text-center">
            <h1 className="font-Poppins font-bold text-4xl">Developer Mindset Gotchaa!</h1>
            <p className="text-lg underline font-light text-neutral-400"> Try navbar pages instead of hitting random routes</p>
        </div>
    </div>
}