"use client";

import React from "react";
import "./footer.scss";
import Link from "next/link";

export default function Footer() {
    const year = "2025";

    return (
        <footer className="footer">
            <div className="footer__container">

                <div className="footer__brand">
                    <div className="footer__logo">Logo</div>
                    <div className="footer__brand-info">
                        <h3 className="footer__company">Din Lokale Pudser</h3>
                        <p className="footer__tagline">
                            Skinnende ruder - professionelt og hurtigt
                        </p>
                    </div>
                </div>

                <address className="footer__contact">
                    <div className="footer__contact-item">
                        Telefon: <Link href="tel:+4525254945">+45 25 25 49 45</Link>
                    </div>
                    <div className="footer__contact-item">
                        Email: <Link href="mailto:din@lokalepudser.dk">din@lokalepudser.dk</Link>
                    </div>
                    <div className="footer__contact-item footer__contact-item--small">
                        CVR: 12345678
                    </div>
                </address>

            </div>

            <div className="footer__bottom">
                <p className="footer__copyright">
                    © {year} Din Lokale Pudser. Alle rettigheder forbeholdes.
                </p>
                <section className="footer__policies">
                    <li className="footer__policies-item">
                        <Link href="/privat">Handels og Salgs Betingelser</Link>
                    </li>
                </section> 
            </div>
        </footer>
    );
}
