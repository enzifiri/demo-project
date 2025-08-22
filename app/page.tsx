"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Copy, Check } from "lucide-react"
import Image from "next/image"

export default function BalibobLandingPage() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "0x1234567890abcdef1234567890abcdef12345678"
    try {
      await navigator.clipboard.writeText(contractAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-8">
            {process.env.NEXT_PUBLIC_TOKEN_NAME || "Balibob $ENZ"}
          </h1>

          <div className="mb-8">
            <Image
              src={
                process.env.NEXT_PUBLIC_MAIN_IMAGE_URL ||
                "/placeholder.svg?height=400&width=600&query=crypto token logo balibob"
              }
              alt="Balibob Token"
              width={600}
              height={400}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="mb-8">
            <p className="text-lg text-muted-foreground mb-4">Contract Address:</p>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <code className="bg-muted px-4 py-2 rounded-lg font-mono break-all text-2xl">
                {process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "0x1234567890abcdef1234567890abcdef12345678"}
              </code>
              <Button
                onClick={copyToClipboard}
                variant="outline"
                size="sm"
                className="flex items-center gap-2 bg-transparent text-xl"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>
          </div>

          <Button variant="primary" size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg text-center">
            Buy Now
          </Button>
        </div>
      </section>

      {/* Token Economy Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12">Token Economy</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Max Supply</h3>
                <p className="text-2xl font-bold text-primary">
                  {process.env.NEXT_PUBLIC_MAX_SUPPLY || "1,000,000,000"}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Team</h3>
                <p className="text-xl font-bold text-primary">{process.env.NEXT_PUBLIC_TEAM_PERCENT || "15"}%</p>
                <p className="text-sm text-muted-foreground">
                  {process.env.NEXT_PUBLIC_TEAM_AMOUNT || "150,000,000"} tokens
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Advisors</h3>
                <p className="text-xl font-bold text-primary">{process.env.NEXT_PUBLIC_ADVISORS_PERCENT || "10"}%</p>
                <p className="text-sm text-muted-foreground">
                  {process.env.NEXT_PUBLIC_ADVISORS_AMOUNT || "100,000,000"} tokens
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Airdrop</h3>
                <p className="text-xl font-bold text-primary">{process.env.NEXT_PUBLIC_AIRDROP_PERCENT || "25"}%</p>
                <p className="text-sm text-muted-foreground">
                  {process.env.NEXT_PUBLIC_AIRDROP_AMOUNT || "250,000,000"} tokens
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Taxes</h3>
                <p className="text-2xl font-bold text-primary">{process.env.NEXT_PUBLIC_TAXES_PERCENT || "5"}%</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap and Speech Bubbles Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Roadmap Section - Left Side */}
            <div className="space-y-6">
              <h2 className="font-serif text-4xl font-bold text-foreground">
                {process.env.NEXT_PUBLIC_ROADMAP_TITLE || "Roadmap"}
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {process.env.NEXT_PUBLIC_ROADMAP_DESCRIPTION ||
                  "Our comprehensive roadmap outlines the strategic milestones and development phases that will drive Balibob $ENZ to success in the cryptocurrency market."}
              </p>

              <p className="text-xl font-semibold text-primary">
                {process.env.NEXT_PUBLIC_BUY_TOKEN_TEXT || "Buy Token Now"}
              </p>

              <div className="mt-8">
                <Image
                  src={
                    process.env.NEXT_PUBLIC_ROADMAP_IMAGE_URL ||
                    "/placeholder.svg?height=300&width=500&query=cryptocurrency roadmap timeline chart"
                  }
                  alt="Roadmap"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Speech Bubbles - Right Side */}
            <div className="space-y-6">
              {/* Speech Bubble 01 */}
              <div className="relative bg-card border-2 border-primary/20 rounded-2xl p-6 shadow-lg">
                <div className="absolute -left-3 top-6 w-6 h-6 bg-card border-l-2 border-b-2 border-primary/20 transform rotate-45"></div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    01
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      {process.env.NEXT_PUBLIC_SPEECHBOX_1_TITLE || "Launch Phase"}
                    </h3>
                    <p className="text-muted-foreground">
                      {process.env.NEXT_PUBLIC_SPEECHBOX_1_DESC ||
                        "Initial token launch with community building and early adopter rewards program."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Speech Bubble 02 */}
              <div className="relative bg-card border-2 border-accent/20 rounded-2xl p-6 shadow-lg">
                <div className="absolute -left-3 top-6 w-6 h-6 bg-card border-l-2 border-b-2 border-accent/20 transform rotate-45"></div>
                <div className="flex items-start gap-4">
                  <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    02
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      {process.env.NEXT_PUBLIC_SPEECHBOX_2_TITLE || "Growth Phase"}
                    </h3>
                    <p className="text-muted-foreground">
                      {process.env.NEXT_PUBLIC_SPEECHBOX_2_DESC ||
                        "Strategic partnerships and exchange listings to expand market reach and liquidity."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Speech Bubble 03 */}
              <div className="relative bg-card border-2 border-primary/20 rounded-2xl p-6 shadow-lg">
                <div className="absolute -left-3 top-6 w-6 h-6 bg-card border-l-2 border-b-2 border-primary/20 transform rotate-45"></div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    03
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      {process.env.NEXT_PUBLIC_SPEECHBOX_3_TITLE || "Expansion Phase"}
                    </h3>
                    <p className="text-muted-foreground">
                      {process.env.NEXT_PUBLIC_SPEECHBOX_3_DESC ||
                        "Platform development and ecosystem expansion with innovative DeFi features."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
