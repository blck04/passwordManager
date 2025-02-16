import type React from "react"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Key, Lock, Settings, Search, LogOut, Shield, Activity } from "lucide-react"
import Link from "next/link"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-background">
        <div className="flex h-16 items-center border-b px-6">
          <ShieldCheck className="h-6 w-6 text-primary mr-2" />
          <span className="text-xl font-bold">SafePass</span>
        </div>
        <nav className="space-y-1 p-4">
          <Link
            href="/dashboard"
            className="flex items-center space-x-3 rounded-lg px-3 py-2 text-slate-900 hover:bg-accent"
          >
            <Key className="h-5 w-5" />
            <span>Passwords</span>
          </Link>
          <Link
            href="/dashboard/generator"
            className="flex items-center space-x-3 rounded-lg px-3 py-2 text-slate-900 hover:bg-accent"
          >
            <Lock className="h-5 w-5" />
            <span>Generator</span>
          </Link>
          <Link
            href="/dashboard/security"
            className="flex items-center space-x-3 rounded-lg px-3 py-2 text-slate-900 hover:bg-accent"
          >
            <Shield className="h-5 w-5" />
            <span>Security</span>
          </Link>
          <Link
            href="/dashboard/activity"
            className="flex items-center space-x-3 rounded-lg px-3 py-2 text-slate-900 hover:bg-accent"
          >
            <Activity className="h-5 w-5" />
            <span>Activity</span>
          </Link>
          <Link
            href="/dashboard/settings"
            className="flex items-center space-x-3 rounded-lg px-3 py-2 text-slate-900 hover:bg-accent"
          >
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="pl-64">
        {/* Top Bar */}
        <header className="h-16 border-b bg-background">
          <div className="flex h-full items-center justify-between px-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search passwords..."
                  className="h-9 w-64 rounded-md border border-input bg-background pl-8 text-sm outline-none focus:border-primary"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}

