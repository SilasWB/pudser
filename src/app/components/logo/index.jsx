import Image from "next/image";
import Link from "next/link";
import logo from "@/imgs/logo.png"
import "./logo.scss"

export default function Logo() {
    return (
        <Link href="/">
          <div className="logo-wrap">
            <Image src={logo} width={175} height={175} alt="Logo"/>
          </div>    
        </Link>
    )
}