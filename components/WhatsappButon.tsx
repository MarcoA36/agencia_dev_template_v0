"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const phone = "5492284656640" // <-- tu número

  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        bg-green-500
        hover:bg-green-600
        text-white
        rounded-full
        p-4
        shadow-lg
        flex
        items-center
        justify-center
        transition-transform
        hover:scale-110
        z-50
      "
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}
