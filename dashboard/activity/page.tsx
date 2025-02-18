import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LogIn, Key, AlertTriangle, Shield, Smartphone } from "lucide-react"

export default function ActivityPage() {
  const activities = [
    {
      id: 1,
      type: "login",
      title: "New Login",
      description: "Successfully logged in from Chrome on Windows",
      time: "2 minutes ago",
      icon: LogIn,
      color: "text-blue-500",
    },
    {
      id: 2,
      type: "password_change",
      title: "Password Updated",
      description: "Password changed for Netflix account",
      time: "1 hour ago",
      icon: Key,
      color: "text-green-500",
    },
    {
      id: 3,
      type: "security_alert",
      title: "Security Alert",
      description: "Unusual login attempt blocked from unknown device",
      time: "3 hours ago",
      icon: AlertTriangle,
      color: "text-red-500",
    },
    {
      id: 4,
      type: "2fa_enabled",
      title: "2FA Enabled",
      description: "Two-factor authentication enabled for Gmail",
      time: "1 day ago",
      icon: Shield,
      color: "text-purple-500",
    },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Recent Activity</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Active Sessions</CardTitle>
            <CardDescription>Currently active login sessions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4 rounded-lg border p-4">
              <Smartphone className="h-5 w-5 text-blue-500" />
              <div className="flex-1">
                <p className="font-medium">iPhone 13 Pro - Safari</p>
                <p className="text-sm text-muted-foreground">New York, USA</p>
              </div>
              <span className="text-sm text-green-500">Current</span>
            </div>
            <div className="flex items-center space-x-4 rounded-lg border p-4">
              <Smartphone className="h-5 w-5 text-blue-500" />
              <div className="flex-1">
                <p className="font-medium">MacBook Pro - Chrome</p>
                <p className="text-sm text-muted-foreground">New York, USA</p>
              </div>
              <span className="text-sm text-green-500">Active</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Security Events</CardTitle>
            <CardDescription>Recent security-related activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-4 rounded-lg border p-4">
                  <activity.icon className={`h-5 w-5 ${activity.color}`} />
                  <div className="flex-1 space-y-1">
                    <p className="font-medium">{activity.title}</p>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

