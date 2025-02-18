import { Button } from "@/components/ui/button"
import { ShieldCheck, Lock, Key, RefreshCw } from "lucide-react"
import Link from "next/link"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">SafePass</span>
          </div>
          <div className="space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Secure Your Digital Life</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Keep all your passwords safe and accessible in one place. Military-grade encryption for your peace of mind.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="text-lg">
            Get Started Free
          </Button>
          <Button size="lg" variant="outline" className="text-lg">
            Learn More
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Bank-Level Security</h3>
            <p className="text-muted-foreground">
              Your data is protected with AES-256 encryption, the same standard used by banks.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Key className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Password Generator</h3>
            <p className="text-muted-foreground">
              Create strong, unique passwords with our built-in password generator.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <RefreshCw className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Auto-Sync</h3>
            <p className="text-muted-foreground">
              Access your passwords across all your devices with automatic synchronization.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

