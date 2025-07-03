import React from "react";

const Loading = () => {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%)"
    }}>
      <div style={{
        width: 60,
        height: 60,
        border: "6px solid #6366f1",
        borderTop: "6px solid #fff",
        borderRadius: "50%",
        animation: "spin 1s linear infinite"
      }} />
      <p style={{
        marginTop: 24,
        color: "#6366f1",
        fontSize: 20,
        fontWeight: 600,
        letterSpacing: 1
      }}>
        Loading...
      </p>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
        `}
      </style>
    </div>
  );
};

export default Loading;