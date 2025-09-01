import { Profile } from "../components/Profile"
import { HeroText } from "../components/HeroText"

const cn = (...classes) => classes.join(" ");
export const Dashboard = () => {
    return <div className={cn('flex flex-col items-center justify-center md:items-start md:flex md:flex-row md:justify-center lg:pt-10 md:gap-15 lg:gap-20 2xl:gap-40 2xl:pt-15 pt-10 bg-gradient-to-t from-[#333130] to-[#151312] md:mask-b-from-50%  mask-b-from-90%',
        'bg-[radial-gradient(1px,transparent_1px)]',
        '[background-size:10px_10px]')}>
        <Profile />
        <HeroText />
    </div>
} 