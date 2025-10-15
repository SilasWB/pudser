"use client";
import Bestilling from "@/app/components/bestilling";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Link from "next/link"


export default function Tilbud() {


    return (
        <>
           <Header />
           <main>
    <Bestilling />
</main>
           <Footer />
        </>

    )
}