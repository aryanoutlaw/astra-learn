"use client"
import Link from 'next/link'
import Image from 'next/image'
import { signIn, useSession } from 'next-auth/react'
import {
 Tooltip,
 TooltipContent,
 TooltipProvider,
 TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

export function Header() {
  const { data: session } = useSession()
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#EFE9D5]/80 backdrop-blur-sm border-b-2 border-border h-14">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-2">
            <Link
              href={session ? "/home" : "/"}
              className="flex items-center gap-2"
            >
              <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                <Image 
                  src="/logo.png" 
                  alt="Astra Learn Logo" 
                  fill
                  priority
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span className="font-semibold text-sm sm:text-base">Astra Learn</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-2 sm:space-x-4">
            <>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="https://github.com/aryanoutlaw"
                      target="_blank"
                      className="hidden sm:inline-block px-4 py-1.5 bg-[#c1ff72] border-2 border-b-4 border-r-4 border-black rounded-lg hover:bg-[#c1ff72] hover:border-b-2 hover:border-r-2 transition-all duration-100 text-sm font-medium shadow-sm hover:shadow active:border-b-2 active:border-r-2"
                    >
                     GitHub
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Star on GitHub</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              {!session ? (
                <div className="flex gap-1 sm:gap-2">
                  <Button
                    variant="outline"
                    onClick={() => signIn()}
                    className="border-2 border-black text-xs sm:text-sm px-2 sm:px-4"
                  >
                   Sign In
                  </Button>
                  <Link href="/register" passHref>
                    <button className="px-2 sm:px-4 py-1.5 bg-[#c1ff72] border-2 border-b-4 border-r-4 border-black rounded-lg hover:bg-[#c1ff72] hover:border-b-2 hover:border-r-2 transition-all duration-100 text-xs sm:text-sm font-medium shadow-sm hover:shadow active:border-b-2 active:border-r-2">
                     Sign Up
                    </button>
                  </Link>
                </div>
              ) : null}
            </>
          </nav>
        </div>
      </div>
    </header>
  )
}