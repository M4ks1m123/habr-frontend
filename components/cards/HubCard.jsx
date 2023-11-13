import Image from "next/image";
import Link from "next/link";

export default function HubCard(props) {
    return (
        <arcticle>
            <div className="border -2 border-cyan-500">
                <ul>
                    <li>
                        <Image src="/assets/profile.svg" width={100} height={100} className="mx-16 mt-5"></Image>
                    </li>
                    <li className="text-center"><Link href={'/post/' + props.id}>{props.title}</Link></li>
                    <li className="text-center">{props.desc}</li>
                </ul>
            </div>
        </arcticle>
    )
}