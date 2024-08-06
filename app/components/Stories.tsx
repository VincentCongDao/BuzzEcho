import Image from "next/image";

const Stories = () => {
    return (<div className="stories p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs">
        <div className="flex gap-8">
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Image src="" alt="" width={80} height={80} className=" rounded-full ring-2" />
                <span className="text-sm">John Doe</span>

            </div>
        </div>
    </div>);
}

export default Stories;