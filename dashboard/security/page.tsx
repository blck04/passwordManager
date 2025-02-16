import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle, Shield, CheckCircle } from "lucide-react"

export default function SecurityPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Security Dashboard</h1>

      {/* Overall Security Score */}
      <Card>
        <CardHeader>
          <CardTitle>Security Score</CardTitle>
          <CardDescription>Your overall password security status</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">85/100</span>
            <Shield className="h-6 w-6 text-primary" />
          </div>
          <Progress value={85} className="h-2" />
        </CardContent>
      </Card>

      {/* Security Issues */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Weak Passwords</CardTitle>
            <CardDescription>Passwords that need strengthening</CardDescription>
          </CardHeader>
          <CardContent>
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>3 Weak Passwords Found</AlertTitle>
              <AlertDescription>These passwords are vulnerable to brute force attacks</AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Reused Passwords</CardTitle>
            <CardDescription>Passwords used across multiple accounts</CardDescription>
          </CardHeader>
          <CardContent>
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>2 Reused Passwords</AlertTitle>
              <AlertDescription>Using unique passwords reduces security risks</AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Old Passwords</CardTitle>
            <CardDescription>Passwords that haven't been updated recently</CardDescription>
          </CardHeader>
          <CardContent>
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>5 Passwords Need Updates</AlertTitle>
              <AlertDescription>Consider updating passwords older than 90 days</AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Two-Factor Authentication</CardTitle>
            <CardDescription>Accounts with 2FA enabled</CardDescription>
          </CardHeader>
          <CardContent>
            <Alert variant="default" className="border-green-500 bg-green-50">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <AlertTitle className="text-green-700">8 Accounts Protected</AlertTitle>
              <AlertDescription className="text-green-600">
                Your most important accounts are secured with 2FA
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

