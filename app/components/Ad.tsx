import Image from "next/image";

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
    return (<div className="p-4 bg-white rounded-lg shadow-md text-sm">

        {/* Top */}
        <div className="flex items-center justify-between text-gray-500 font-medium">
            <span>Sponsored Ads</span>
            <Image src="/more.png" alt="more" width={16} height={16} className="w-4 h-4" />
        </div>
        {/* Bottom */}

        <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}>
            <div className={`relative w-full ${size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"}`}>
                <Image src="https://images.pexels.com/photos/20988585/pexels-photo-20988585/free-photo-of-skyscrapers-in-ho-chi-minh-vietnam.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill className="rounded-lg object-over" alt="sponsor images" />
            </div>
            <div className="flex items-center gap-4">
                <Image src="https://images.pexels.com/photos/20988585/pexels-photo-20988585/free-photo-of-skyscrapers-in-ho-chi-minh-vietnam.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={24} height={24} className="rounded-full w-6 h-6 object-cover" />
                <span>City of Vietnam</span>
            </div>
            <p className={`${size === "sm" ? "text-xs" : "text:sm"}`}>
                {size === "sm" ? "Anim velit dolor amet duis laborum laborum reprehenderit deserunt." : size === "md" ? "Esse Lorem eiusmod minim adipisicing fugiat aute eiusmod non anim occaecat commodo esse. Reprehenderit mollit irure est sunt." : "Amet eu ipsum voluptate anim consectetur reprehenderit laborum consectetur duis occaecat culpa amet aliqua voluptate. Amet eu ipsum voluptate anim consectetur reprehenderit laborum consectetur duis occaecat culpa amet aliqua voluptate. Amet eu ipsum voluptate anim consectetur reprehenderit laborum consectetur duis occaecat culpa amet aliqua voluptate."}
            </p>
            <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">Learn More</button>
        </div>
    </div>);
}

export default Ad;