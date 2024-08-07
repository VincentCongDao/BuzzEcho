import Image from "next/image";
import Comments from "./Comments";

const Post = () => {
    return (<div className="flex flex-col gap-4">
        {/* User */}
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image src="https://images.pexels.com/photos/27349262/pexels-photo-27349262/free-photo-of-a-counter-with-a-variety-of-drinks-and-a-menu.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={40} height={40} alt="User Image" className="w-10 h-10 rounded-full" />
                <span>User Name</span>
            </div>
            <Image src="/more.png" width={16} height={16} alt="More" />
        </div>
        {/* Content */}
        <div className="flex flex-col gap-4">
            <div className="w-full min-h-96 relative">
                <Image src="https://images.pexels.com/photos/27307368/pexels-photo-27307368/free-photo-of-jjj.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill className="object-cover rounded-md" alt="" />
            </div>
            <p>
                Ea irure fugiat nulla enim dolore id anim ex cupidatat ullamco aliquip dolore.
            </p>
        </div>
        {/* Comments */}
        <div className="flex items-center justify-between text-sm my-4">
            <div className="flex gap-8">
                <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
                    <Image src="/like.png" width={16} height={16} alt="Like" className="cursor-pointer" />
                    <span>|</span>
                    <span>12 <span className="hidden md:inline"> Likes</span></span>

                </div>
                <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
                    <Image src="/comment.png" width={16} height={16} alt="Like" className="cursor-pointer" />
                    <span>|</span>
                    <span>12 <span className="hidden md:inline"> Comments</span></span>

                </div>
                <div className="">
                    <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
                        <Image src="/share.png" width={16} height={16} alt="Like" className="cursor-pointer" />
                        <span>|</span>
                        <span>12 <span className="hidden md:inline"> Shares</span></span>
                    </div>
                </div>
            </div>
        </div>
        <Comments />
    </div>);

}

export default Post;