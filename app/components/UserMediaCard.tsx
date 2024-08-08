import Image from "next/image";
import Link from "next/link";

const UserMediaCard = ({ userId }: { userId?: string }) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
            {/* Top */}
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-500">User Media</span>
                <Link href="/" className="text-blue-500 text-xs">See All</Link>
            </div>
            {/* Bottom:Content */}
            <div className="flex gap-4 justify-between flex-wrap">
                <div className="relative w-1/5 h-24">
                    <Image alt="Irina Berdzenishvili" src="https://images.pexels.com/photos/27425072/pexels-photo-27425072/free-photo-of-faded-dream.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover rounded-md" fill />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image alt="Irina Berdzenishvili" src="https://images.pexels.com/photos/27425072/pexels-photo-27425072/free-photo-of-faded-dream.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover rounded-md" fill />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image alt="Irina Berdzenishvili" src="https://images.pexels.com/photos/27425072/pexels-photo-27425072/free-photo-of-faded-dream.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover rounded-md" fill />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image alt="Irina Berdzenishvili" src="https://images.pexels.com/photos/27425072/pexels-photo-27425072/free-photo-of-faded-dream.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover rounded-md" fill />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image alt="Irina Berdzenishvili" src="https://images.pexels.com/photos/27425072/pexels-photo-27425072/free-photo-of-faded-dream.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover rounded-md" fill />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image alt="Irina Berdzenishvili" src="https://images.pexels.com/photos/27425072/pexels-photo-27425072/free-photo-of-faded-dream.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover rounded-md" fill />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image alt="Irina Berdzenishvili" src="https://images.pexels.com/photos/27425072/pexels-photo-27425072/free-photo-of-faded-dream.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover rounded-md" fill />
                </div>
            </div>
        </div>
    );
}

export default UserMediaCard;