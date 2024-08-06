import Image from "next/image";

const Stories = () => {
    return (<div className="stories p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
        <div className="flex gap-8 w-max">
            {/* Stories */}
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Image src="https://images.pexels.com/photos/15176447/pexels-photo-15176447/free-photo-of-delicate-flower-on-cloth.jpeg" alt="" width={80} height={80} className=" rounded-full ring-2" />
                <span className="text-sm">John Doe</span>
            </div>

            {/* Stories */}
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Image src="https://images.pexels.com/photos/15176447/pexels-photo-15176447/free-photo-of-delicate-flower-on-cloth.jpeg" alt="" width={80} height={80} className=" rounded-full ring-2" />
                <span className="text-sm">John Doe</span>
            </div>

            {/* Stories */}
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Image src="https://images.pexels.com/photos/15176447/pexels-photo-15176447/free-photo-of-delicate-flower-on-cloth.jpeg" alt="" width={80} height={80} className=" rounded-full ring-2" />
                <span className="text-sm">John Doe</span>
            </div>

            {/* Stories */}
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Image src="https://images.pexels.com/photos/15176447/pexels-photo-15176447/free-photo-of-delicate-flower-on-cloth.jpeg" alt="" width={80} height={80} className=" rounded-full ring-2" />
                <span className="text-sm">John Doe</span>
            </div>

            {/* Stories */}
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Image src="https://images.pexels.com/photos/15176447/pexels-photo-15176447/free-photo-of-delicate-flower-on-cloth.jpeg" alt="" width={80} height={80} className=" rounded-full ring-2" />
                <span className="text-sm">John Doe</span>
            </div>

        </div>
    </div>);
}

export default Stories;