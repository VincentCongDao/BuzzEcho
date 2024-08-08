import Image from "next/image";
import Link from "next/link";

const FriendRequests = () => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
            {/* Top */}
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-500">Friend Requests</span>
                <Link href="/" className="text-blue-500 text-xs">See All</Link>
            </div>
            {/* User  */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/27430539/pexels-photo-27430539/free-photo-of-blue-eyes-with-horse.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-10 h-10 rounded-full object-over" width={40} height={40} />
                    <span className="font-medium">Eslam M</span>
                </div>
                <div className="flex gap-2 justify-end">
                    <Image src="/accept.png" alt="" width={16} height={16} className="cursor-pointer" />
                    <Image src="/reject.png" alt="" width={16} height={16} className="cursor-pointer" />
                </div>

            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/27430539/pexels-photo-27430539/free-photo-of-blue-eyes-with-horse.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-10 h-10 rounded-full object-over" width={40} height={40} />
                    <span className="font-medium">Eslam M</span>
                </div>
                <div className="flex gap-2 justify-end">
                    <Image src="/accept.png" alt="" width={16} height={16} className="cursor-pointer" />
                    <Image src="/reject.png" alt="" width={16} height={16} className="cursor-pointer" />
                </div>

            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/27430539/pexels-photo-27430539/free-photo-of-blue-eyes-with-horse.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-10 h-10 rounded-full object-over" width={40} height={40} />
                    <span className="font-medium">Eslam M</span>
                </div>
                <div className="flex gap-2 justify-end">
                    <Image src="/accept.png" alt="" width={16} height={16} className="cursor-pointer" />
                    <Image src="/reject.png" alt="" width={16} height={16} className="cursor-pointer" />
                </div>
            </div>

        </div>);
}

export default FriendRequests;