"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import { MessageSquare, Send, Bot, User, Sparkles } from "lucide-react";

const initialMessages = [
  { role: "assistant", content: "Hello! I'm Pacific Capital's AI Trading Assistant. I can help you with market analysis, technical indicators, portfolio suggestions, and risk assessment. What would you like to know?" },
];

const suggestedQuestions = [
  "What's the current BTC trend?",
  "Analyze my portfolio risk",
  "Top gainers today",
  "Should I hold NVDA?",
];

export default function AIAssistantPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Based on my analysis, here's what I can tell you about "${input}":\n\n📊 **Market Sentiment**: Currently bullish with strong momentum indicators.\n\n📈 **Technical Analysis**: RSI at 62 (neutral-bullish zone), MACD showing positive crossover. The 50-day EMA is acting as strong support.\n\n⚠️ **Risk Assessment**: Moderate risk level. Consider setting a stop-loss at 3% below your entry point.\n\nWould you like me to dive deeper into any of these areas?`,
        },
      ]);
    }, 1200);
  };

  return (
    <div className="flex h-screen w-full bg-background overflow-hidden text-sm">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 flex flex-col overflow-hidden">
          {/* Chat Messages */}
          <div className="flex-1 overflow-auto p-6 md:p-8 space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
                <Sparkles size={20} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">AI Trading Assistant</h1>
                <p className="text-xs text-gray-400">Powered by Pacific Capital AI</p>
              </div>
            </div>

            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : ""}`}>
                {msg.role === "assistant" && (
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot size={18} className="text-primary" />
                  </div>
                )}
                <div
                  className={`max-w-2xl px-5 py-4 rounded-2xl whitespace-pre-line ${
                    msg.role === "user"
                      ? "bg-primary text-white rounded-tr-none"
                      : "bg-panel border border-panel-border rounded-tl-none"
                  }`}
                >
                  {msg.content}
                </div>
                {msg.role === "user" && (
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <User size={18} className="text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Suggested Questions */}
          <div className="px-6 md:px-8 flex gap-2 flex-wrap">
            {suggestedQuestions.map((q) => (
              <button
                key={q}
                onClick={() => {
                  setInput(q);
                }}
                className="px-3 py-1.5 bg-panel border border-panel-border rounded-full text-xs text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 md:p-6 border-t border-panel-border bg-panel">
            <div className="flex items-center gap-3 max-w-4xl mx-auto">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask about markets, analysis, or portfolio..."
                className="flex-1 bg-background border border-panel-border rounded-xl px-5 py-3 focus:outline-none focus:border-primary"
              />
              <button onClick={sendMessage} className="btn-primary px-4 py-3 rounded-xl">
                <Send size={18} />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
