export default function Home() {
  return (
    <main
      style={{
        background: "#111",
        color: "#fff",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Arial"
      }}
    >
      <h1>🤖 memo.ai</h1>
      <p>Your AI Coding Assistant</p>
      <button
        style={{
          padding: "12px 24px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer"
        }}
      >
        Start Chat
      </button>
    </main>
  );
}