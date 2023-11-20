import Image from "next/image";
import Link from "next/link";

export default function HubCard(props) {
    return (
        <arcticle className="snap-start m-2">
            <div className="border-2 border-cyan-500 rounded-lg shadow-lg w-56">
                <ul>
                    <li>
                        <Image src="/assets/profile.svg" width={100} height={100} className="m-auto my-3"></Image>
                    </li>
                    <div className="px-2 outline outline-2 rounded-md outline-cyan-500 bg-gradient-to-br from-cyan-400 to-cyan-600">
                        <li className="h-14 py-1 text-center text-white text-md font-medium whitespace-normal hover:text-slate-100">
                            <Link href={'/post/' + props.id}>{props.title}</Link></li>
                        <li className="h-14 text-center text-white text-sm font-light whitespace-normal">{props.desc}</li>
                    </div>
                </ul>
            </div>
        </arcticle>
    )
}