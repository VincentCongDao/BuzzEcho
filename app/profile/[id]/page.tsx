import Feed from "@/app/components/Feed";
import LeftMenu from "@/app/components/LeftMenu";
import RightMenu from "@/app/components/RightMenu";
import Image from "next/image";

const ProfilePage = () => {
    return (
        <div className='flex gap-6'>
            <div className="hidden xl:block w-[20%]"><LeftMenu type="profile" /></div>
            <div className="w-full lg:w-[70%] xl:w-[50%]">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-full h-64 relative">
                            <Image src="https://images.pexels.com/photos/4226882/pexels-photo-4226882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className="rounded-md object-cover" />
                            <Image src="https://images.pexels.com/photos/3769167/pexels-photo-3769167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={128} height={128} className="w-32 h-32 rounded-full left-0 right-0 m-auto object-cover -bottom-16 ring-4" />
                        </div>
                        <h1 className="mt-20 mb-4 text-2xl font-medium">User Name Here</h1>
                        <div className="flex items-center justify-center gap-12 mb-4">
                            <div className="flex flex-col items-center">
                                <span className="font-medium">123</span>
                                <span className="text-sm">Posts</span>
                            </div> <div className="flex flex-col items-center">
                                <span className="font-medium">1.3k</span>
                                <span className="text-sm">Followers</span>
                            </div> <div className="flex flex-col items-center">
                                <span className="font-medium">54</span>
                                <span className="text-sm">Following</span>
                            </div>
                        </div>
                    </div>
                    <Feed />
                </div>
            </div>
            <div className="hidden lg:block w-[30%]" >
                <RightMenu userId="test" /></div>
        </div>
    );
}

export default ProfilePage;