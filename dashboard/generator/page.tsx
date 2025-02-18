"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Copy, RefreshCw } from "lucide-react"

export default function PasswordGeneratorPage() {
  const [length, setLength] = useState(16)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [generatedPassword, setGeneratedPassword] = useState("")

  const generatePassword = () => {
    let charset = ""
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz"
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (includeNumbers) charset += "0123456789"
    if (includeSymbols) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?"

    let password = ""
    for (let i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    setGeneratedPassword(password)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Password Generator</h1>

      <Card>
        <CardHeader>
          <CardTitle>Generate a Strong Password</CardTitle>
          <CardDescription>Customize your password requirements</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Generated Password Display */}
          <div className="space-y-2">
            <Label>Generated Password</Label>
            <div className="flex items-center space-x-2">
              <div className="flex-1 rounded-lg border bg-muted p-4 font-mono">
                {generatedPassword || "Click generate to create password"}
              </div>
              <Button variant="outline" size="icon" onClick={() => navigator.clipboard.writeText(generatedPassword)}>
                <Copy className="h-4 w-4" />
              </Button>
              <Button size="icon" onClick={generatePassword}>
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Password Length */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Password Length</Label>
              <span className="text-muted-foreground">{length} characters</span>
            </div>
            <Slider value={[length]} onValueChange={([value]) => setLength(value)} max={32} min={8} step={1} />
          </div>

          {/* Password Options */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="lowercase">Lowercase Letters (a-z)</Label>
              <Switch id="lowercase" checked={includeLowercase} onCheckedChange={setIncludeLowercase} />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="uppercase">Uppercase Letters (A-Z)</Label>
              <Switch id="uppercase" checked={includeUppercase} onCheckedChange={setIncludeUppercase} />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="numbers">Numbers (0-9)</Label>
              <Switch id="numbers" checked={includeNumbers} onCheckedChange={setIncludeNumbers} />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="symbols">Special Characters (!@#$%^&*)</Label>
              <Switch id="symbols" checked={includeSymbols} onCheckedChange={setIncludeSymbols} />
            </div>
          </div>

          <Button className="w-full" size="lg" onClick={generatePassword}>
            Generate Password
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

