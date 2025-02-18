"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { PlusCircle, CreditCardIcon as CardIcon, Eye, EyeOff } from "lucide-react"
import { cn } from "@/lib/utils"

interface CreditCard {
  id: number
  name: string
  number: string
  expiry: string
  type: "visa" | "mastercard" | "amex"
  color: string
}

export default function CardsPage() {
  const [showNumbers, setShowNumbers] = useState<{ [key: number]: boolean }>({})

  const cards: CreditCard[] = [
    {
      id: 1,
      name: "John Doe",
      number: "4532 •••• •••• 1234",
      expiry: "12/25",
      type: "visa",
      color: "bg-gradient-to-r from-blue-600 to-blue-400",
    },
    {
      id: 2,
      name: "John Doe",
      number: "5432 •••• •••• 5678",
      expiry: "09/24",
      type: "mastercard",
      color: "bg-gradient-to-r from-purple-600 to-purple-400",
    },
    {
      id: 3,
      name: "John Doe",
      number: "3782 •••• •••• 9012",
      expiry: "03/26",
      type: "amex",
      color: "bg-gradient-to-r from-emerald-600 to-emerald-400",
    },
  ]

  const toggleNumber = (id: number) => {
    setShowNumbers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Stored Cards</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Card
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <div key={card.id} className={cn("relative rounded-xl p-6 text-white shadow-lg", card.color)}>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <CardIcon className="h-8 w-8" />
                <span className="font-bold uppercase">{card.type}</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-mono">
                    {showNumbers[card.id] ? "4532 1234 5678 1234" : card.number}
                  </span>
                  <button onClick={() => toggleNumber(card.id)} className="p-1 hover:bg-white/10 rounded">
                    {showNumbers[card.id] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="text-xs opacity-75">Card Holder</p>
                    <p className="font-medium">{card.name}</p>
                  </div>
                  <div>
                    <p className="text-xs opacity-75">Expires</p>
                    <p className="font-medium">{card.expiry}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

