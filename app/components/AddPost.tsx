import Image from "next/image";

const AddPost = () => {
    return (<div className="p-4 bg-white rounded-lg flex gap-4 justify-between text-sm">
        {/* Avatar */}
        <Image src="https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Avtar" height={20} width={48} className="avatar rounded-full object-cover">
        </Image>
        {/* Post */}
        <div className="flex-1">
            {/* Text Input */}
            <div className="flex gap-4 flex-1 items">
                <textarea className="w-full border-none outline-none bg-slate-100 rounded-lg p-2" placeholder="What's on your mind?"></textarea>
                <Image src="/emoji.png" alt="Emoji" height={20} width={20} className="w-5 h-5 cursor-pointer self-end" />
            </div>
            {/* Post options */}
            <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
                <div className="flex items-center gap-2 cursor-pointer">
                    <Image src="/addimage.png" alt="Image" height={20} width={20} />
                    Photo
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                    <Image src="/addVideo.png" alt="Video" height={20} width={20} />
                    Video
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                    <Image src="/addevent.png" alt="Event" height={20} width={20} />
                    Event
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                    <Image src="/poll.png" alt="Poll" height={20} width={20} />
                    Poll
                </div>
            </div>
        </div>
    </div>
    );
}

export default AddPost;