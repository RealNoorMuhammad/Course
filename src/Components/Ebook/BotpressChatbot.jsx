import React, { useState, useEffect } from "react";

const BotpressChatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "guru", text: "🌌 Welcome, seeker. Ask your question..." },
  ]);
  const [input, setInput] = useState("");
  const [replyCount, setReplyCount] = useState(0);
  const [guruActive, setGuruActive] = useState(true);
  const [typing, setTyping] = useState(false);

  const funnyReplies = [
    " The Guru whispers: Buy $COURSE before it moons 🚀",
    " Hello mortal, your aura smells like instant noodles.",
    " My chakras are buffering… please stand by.",
    "The spirits say: Invest in snacks, not stocks.",
    "🛸 The Guru is currently boarding his spaceship. Please hold...",
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { from: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    if (!guruActive) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            from: "guru",
            text:
              "🚫 Guru Support Error: Signal lost while live-streaming from Mars 🌌. Please try again during Mercury Retrograde.",
          },
        ]);
      }, 1200);
      return;
    }

    // Show typing animation
    setTyping(true);

    setTimeout(() => {
      setTyping(false);

      let reply =
        funnyReplies[Math.floor(Math.random() * funnyReplies.length)];

      const updated = [...newMessages, { from: "guru", text: reply }];
      setMessages(updated);
      setReplyCount(replyCount + 1);

      if (replyCount + 1 >= 3) {
        // After 3 replies, guru leaves
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              from: "guru",
              text:
                "🛑 ERROR 404: Guru.exe has stopped working. Cause: spilled chai on the keyboard ☕💀",
            },
          ]);
          setGuruActive(false);
        }, 1600);
      }
    }, 1800);
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 9999,
        fontFamily: "sans-serif",
      }}
    >
      {/* Floating Chat Button */}
      <button
        style={{
          background: "linear-gradient(135deg, #ae0000ff, #000000ff)",
          border: "none",
          borderRadius: "50%",
          width: "55px",
          height: "55px",
          cursor: "pointer",
          boxShadow: "0px 6px 20px rgba(0,0,0,0.4)",
          color: "#fff",
          fontSize: "22px",
          fontWeight: "bold",
        }}
        onClick={() => setOpen(!open)}
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div
          style={{
            position: "absolute",
            bottom: "80px",
            right: "0",
            width: "320px",
            maxWidth: "90vw",
            background: "#1a1a1a",
            border: "2px solid #a41300ff",
            borderRadius: "16px",
            boxShadow: "0px 8px 25px rgba(0,0,0,0.6)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "linear-gradient(135deg, #ae0000ff, #000000ff)",
              padding: "10px",
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            🔮 Guru Support
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              padding: "10px",
              overflowY: "auto",
              maxHeight: "250px",
              fontSize: "14px",
              color: "white",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  marginBottom: "10px",
                  textAlign: msg.from === "user" ? "right" : "left",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "8px 12px",
                    borderRadius: "12px",
                    background:
                      msg.from === "user" ? "#ae0000ff" : "rgba(255,255,255,0.1)",
                    color: msg.from === "user" ? "white" : "gold",
                    maxWidth: "80%",
                    wordWrap: "break-word",
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}

            {/* Typing Animation */}
            {typing && (
              <div style={{ textAlign: "left", color: "gold" }}>
                <span
                  style={{
                    display: "inline-block",
                    padding: "8px 12px",
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.1)",
                    fontStyle: "italic",
                  }}
                >
                  Guru is typing
                  <span
                    style={{
                      display: "inline-block",
                      marginLeft: "4px",
                    }}
                  >
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                  </span>
                </span>
              </div>
            )}
          </div>

          {/* Input */}
          <div
            style={{
              display: "flex",
              borderTop: "1px solid #333",
              padding: "8px",
              background: "#111",
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder={
                guruActive ? "Ask the guru..." : "Guru went offline 🚀"
              }
              disabled={!guruActive}
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                padding: "8px",
                borderRadius: "8px",
                marginRight: "6px",
                background: guruActive ? "#222" : "#333",
                color: "white",
              }}
            />
            <button
              onClick={handleSend}
              disabled={!guruActive}
              style={{
                background: guruActive ? "#ae0000ff" : "#555",
                border: "none",
                borderRadius: "8px",
                color: "white",
                padding: "8px 12px",
                cursor: guruActive ? "pointer" : "not-allowed",
              }}
            >
              ➤
            </button>
          </div>
        </div>
      )}

      {/* Typing dots animation styles */}
      <style>
        {`
          .dot {
            animation: blink 1.2s infinite;
          }
          .dot:nth-child(2) {
            animation-delay: 0.2s;
          }
          .dot:nth-child(3) {
            animation-delay: 0.4s;
          }
          @keyframes blink {
            0% { opacity: 0.2; }
            20% { opacity: 1; }
            100% { opacity: 0.2; }
          }
        `}
      </style>
    </div>
  );
};

export default BotpressChatbot;
