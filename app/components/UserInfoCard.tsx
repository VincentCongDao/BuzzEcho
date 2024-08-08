import Image from "next/image";
import Link from "next/link";

const UserInfoCard = ({ userId }: { userId?: string }) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
            {/* Top */}
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-500">User Information</span>
                <Link href="/" className="text-blue-500 text-xs">See All</Link>
            </div>

            {/* Bottom */}
            <div className="flex flex-col gap-4 text-gray-500">
                <div className="flex items-center gap-2">
                    <span>Floyd Weather</span>
                    <span className="text-sm">@weathersession</span>
                </div>
                <p>Labore tempor nostrud esse ea.</p>
                <div className="flex items-center gap-2">
                    <Image src="/map.png" alt="" width={16} height={16} />
                    <span>Location: <b>Florida</b></span>
                </div>
                <div className="flex items-center gap-2">
                    <Image src="/school.png" alt="" width={16} height={16} />
                    <span>Went to: <b>Maple Leaf School of Fine Arts</b></span>
                </div>
                <div className="flex items-center gap-2">
                    <Image src="/work.png" alt="" width={16} height={16} />
                    <span>Currently work at: <b>Granite Hills University</b></span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-1 items-center">
                        <Image src="/link.png" alt="link" width={16} height={16} />
                        <Link href="trongcongdanhdao.online" className="">TrongDao</Link>
                    </div>
                    <div className="flex gap-1 items-center">
                        <Image src="/date.png" alt="" width={16} height={16} />
                        <span>Joined June 2024</span>
                    </div>
                </div>
                <button className="bg-blue-500 text-white text-sm rounded-md p-2">Follow</button>
                <span className="text-red-400 self-end text-xs cursor-pointer">
                    Block User
                </span>
            </div>

        </div>

    );
}

export default UserInfoCard;