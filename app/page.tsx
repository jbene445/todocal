"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <header className="border-b">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <Link href="/" className="text-lg font-semibold">
          Todocal
        </Link>

        <div className="flex items-center gap-8 text-sm">
          <Link href="/features">Features</Link>
          <Link href="/solutions">Solutions</Link>
          <Link href="/customers">Customers</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/pricing">Pricing</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/sign-in">
            <Button variant="outline" size="sm">
              Log In
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  const [tilted, setTilted] = useState(false);

  const rotation = tilted ? "rotate-12" : "";
 
  return (
    <main className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-2 items-center gap-16 px-6 py-16">
      <section className="space-y-6">
        <h1 className="text-5xl font-bold">Shape your focus.</h1>
 
        <p className="max-w-xl text-lg">
          The calm and simple app for your tasks and time.
        </p>
 
        <div className="flex gap-4 pt-4">
          <Link href="/sign-up">
            <Button size="lg">Try for Free</Button>
          </Link>
 
          <Link href="/features">
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </Link>
        </div>
      </section>
 
      <div className="flex h-96 items-center justify-center">
      <button
        onClick={() => setTilted(!tilted)}
        className={`text-[180px] transition-transform ${rotation}`}
      >
        🗿
      </button>
    </div>
    </main>
  );
}

function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-6">
        <span className="text-xs">Copyright &copy; 2026 Todocal</span>

        <div className="flex items-center gap-4 text-xs">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-and-conditions">
            Terms and Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}