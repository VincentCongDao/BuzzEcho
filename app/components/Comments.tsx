import Image from "next/image";

const Comments = () => {
    return (
        <div className="">
            {/* Write */}
            <div className="flex items-center gap-4 ">
                <Image src="https://images.pexels.com/photos/26110578/pexels-photo-26110578/free-photo-of-african-penguins-in-boulders-beach-5.jpeg" alt="Images" width={40} height={40} className="w-8 h-8 rounded-full" />
                <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
                    <input type="text" placeholder="Add a comment" className="bg-transparent outline-none flex-1" />
                    <Image src="/emoji.png" alt="Images" width={16} height={16}
                        className="cursor-pointer" />
                </div>
            </div>
            {/* Comments */}
            <div>
                {/* Comment */}
                <div className="flex gap-4 justify-between mt-6">
                    {/* Avatar */}
                    <div className="">
                        <Image src="https://images.pexels.com/photos/26110578/pexels-photo-26110578/free-photo-of-african-penguins-in-boulders-beach-5.jpeg" alt="Images" width={40} height={40} className="w-10 h-10 rounded-full" />
                    </div>
                    {/* Desc */}
                    <div className="flex flex-col gap-2 flex-1">
                        <span className="font-medium">Jone John</span>
                        <p>
                            Incididunt esse aliqua dolore dolore ea amet elit excepteur consectetur proident Lorem velit ullamco.
                        </p>
                        <div className="flex items-center gap-8 text-xs text-gray-500">
                            <div className="flex items-center gap-4">
                                <Image src="/like.png" alt="more" width={16} height={16} className="cursor-pointer w-4 h-4" />
                                <span className="text-gray-300">|</span>
                                <span className="text-gray-500">1243 Likes</span>
                                <div className="">
                                    Reply
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Icon */}
                    <Image src="/more.png" alt="" width={16} height={16} className="cursor-pointer w-4 h-4" />
                </div>
            </div>
        </div>);
}

export default Comments;