"use client"

import { useState } from "react"

export default function ChatPage() {

  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<string[]>([])

  const sendMessage = () => {
    if (!message) return
    setMessages([...messages, message])
    setMessage("")
  }

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">

      <div className="bg-white p-6 rounded-2xl shadow border">

        <h1 className="text-xl font-bold mb-4">
          Ticket Chat
        </h1>

        <div className="space-y-2 mb-4">
          {messages.map((msg, i) => (
            <div key={i} className="bg-gray-100 p-2 rounded">
              {msg}
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 border p-2 rounded"
            placeholder="Type message..."
          />

          <button
            onClick={sendMessage}
            className="bg-blue-600 text-white px-4 rounded"
          >
            Send
          </button>
        </div>

      </div>

    </div>
  )
}