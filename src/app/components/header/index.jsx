"use client";
import "./header.scss"
import Link from "next/link"


export default function Header() {


    return (
        <>
            <header className="header">
                <nav className="header__wrapper">
                    <div className="header__wrapper-image">
                        {/* <Logo /> */}
                    </div>
                    <section className="header__wrapper__section">
                        <ul className="header__wrapper__section-links">
                            <li>
                                <Link href="/">Hjem</Link>
                            </li>
                            <li>
                                <Link href="/price">Priser</Link>
                            </li>
                            <li>
                                <Link href="./contact">Contact</Link>
                            </li>
                        </ul>
                    </section>
                </nav>
            </header>
        </>

    )
}