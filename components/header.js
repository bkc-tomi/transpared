import Link from "next/link";
import Icon from "./icon";

export default function Header() {
    return (
        <div className="fixed z-50 w-screen bg-gray-900 text-gray-100 shadow-md">
            <div className="flex flex-row justify-start items-center">
                <div className="w-16 h-16 mx-2 ">
                    <Link href="/"><a><Icon /></a></Link>
                </div>
                <Link href="/howto"><a className="pl-4 text-md md:text-xl font-bold">HowToUse</a></Link>
            </div>
        </div>
    )
}