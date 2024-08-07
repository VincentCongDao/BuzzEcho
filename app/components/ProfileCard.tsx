import Image from "next/image";

const ProfileCard = () => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
            <div className="h-20 relative">
                <Image src={`https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} alt="" fill className="rounded-md object-cover" />
                <Image src={`https://images.pexels.com/photos/4016579/pexels-photo-4016579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} alt="" width={48} height={48} className="rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-white z-10" />
            </div>
            <div className="h-20 flex flex-col gap-2 justify-center items-center">
                <span className="font-semibold">User Name Here</span>
                <div className="flex items-center gap-4">
                    <div className="flex ">
                        <Image src={`https://images.pexels.com/photos/4016579/pexels-photo-4016579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} alt="" width={12} height={12} className="rounded-full w-3 h-3 absolute left-0 right-0 m-auto -bottom-6 ring-white z-10" />
                    </div>
                    <span>500 Followers</span>
                </div>
                <button className="bg-blue-500 text-white text-xs p-2 rounded-md">My Profile</button>
            </div>
        </div>
    );
}

export default ProfileCard;