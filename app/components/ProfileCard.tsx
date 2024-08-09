import Image from "next/image";

const ProfileCard = () => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
            <div className="h-20 relative">
                <Image src={``} alt="" fill className="rounded-md" />
                <Image src={``} alt="" fill className="rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-white z-10" />
            </div>
        </div>
    );
}

export default ProfileCard;