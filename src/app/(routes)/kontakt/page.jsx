"use client";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import KontaktMigForm from "@/app/components/kontakt-form";
import Link from "next/link"


export default function Kontakt() {


    return (
        <>
           <Header />
           <main>
     <KontaktMigForm />
</main>
           <Footer />
        </>

    )
}