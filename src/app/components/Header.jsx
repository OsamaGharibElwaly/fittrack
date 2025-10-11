import Image from "next/image";
import Link from "next/link";
export default function Header() {
    return(
        <>
            <header>
                <div className="container">
                    <Image 
                    src="/gym.png" 
                    alt=""
                    width={50}
                    height={50}>
                    </Image>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/workouts">Workouts</Link></li>
                        <li><Link href="/nutrition">Nutrition</Link></li>
                        <li><Link href="/progress">Progress</Link></li>
                        <li><Link href="/community">Community</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="/signup" className="btn">Sign Up</Link></li>
                    </ul>
                </div>
            </header>
        </>
    );
}