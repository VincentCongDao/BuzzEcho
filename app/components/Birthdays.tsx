import Image from "next/image";
import Link from "next/link";

const Birthdays = () => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm gap-4 flex flex-col">
            {/* Top */}
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-500">Birthdays</span>
            </div>
            {/* User  */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/27430539/pexels-photo-27430539/free-photo-of-blue-eyes-with-horse.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-10 h-10 rounded-full object-over" width={40} height={40} />
                    <span className="font-medium">Eslam M</span>
                </div>
                <div className="flex gap-2 justify-end">
                    <button className="bg-blue-500 rounded-md text-white text-xs px-2 py-1"> Celebrate</button>
                </div>

            </div>
            {/* Upcoming */}
            <div className="p-4 bg-slate-100 rounded-flg flex items-center gap-4">
                <Image src="/gift.png" alt="gift" width={24} height={24} />
                <Link href="/" className="flex flex-col gap-1 text-xs">
                    <span className="text-gray-700 font-medium">Upcoming Birthday</span>
                    <span className="text-gray-500">See other 12 birthdays upcoming</span>
                </Link>
            </div>
        </div>
    );
}

export default Birthdays;