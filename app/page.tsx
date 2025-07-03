// rafce
import Link from "next/link";
import Image from "next/image";

// rfce
const page = async () => {
  // Javascript
  await new Promise((resolve) => setInterval(resolve, 1000))

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(120deg, #3a1c71 0%, #d76d77 50%, #ffaf7b 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Abstract blob background */}
      <div
        style={{
          position: "absolute",
          left: "-10vw",
          top: "-10vh",
          width: "70vw",
          height: "90vh",
          background: "radial-gradient(circle at 30% 30%, #fff0 60%, #fff2 100%), radial-gradient(circle at 60% 60%, #ffaf7b88 40%, #d76d77cc 100%)",
          filter: "blur(60px)",
          zIndex: 0,
          borderRadius: "50%",
        }}
      />
      <div style={{ flex: 1, padding: "16px", position: "relative", zIndex: 1 }}>
        <h1 style={{ fontSize: 48, fontWeight: 700, lineHeight: 1.1, marginBottom: 24, color: "#fff" }}>
          Hello <br />
          Welcome<br />
          Have room
        </h1>
        <p style={{ color: "#f3f3f3", marginBottom: 32 }}>
          good take care do everything.
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
          <button style={{ background: "#0070f3", border: "2px solid #0070f3", padding: "12px 32px", borderRadius: 6, fontWeight: 600, cursor: "pointer", color: "#fff" }}>
            เลือกดู
          </button>
          <Link href="#" style={{ color: "#fff", textDecoration: "underline", fontWeight: 500 }}>
            ดูข้อมูลเพิ่มเติม
          </Link>
        </div>
        <div style={{ color: "#e6ff4b", fontWeight: 500, fontSize: 15 }}>
          <span style={{ marginRight: 6 }}>★</span>
          Rated 9.9/10 from over 100 reviews.
        </div>
      </div>
      <div style={{ flex: 1, position: "relative", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1, paddingRight: 16 }}>
        <Image
          src="https://scontent.fbkk29-6.fna.fbcdn.net/v/t39.30808-6/480761406_944502484528307_7655619368274866271_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=PdBpWXsYiuAQ7kNvwHdawrC&_nc_oc=AdkfUuweA5QMjO2iQt-qmr7xGE0Qu1zZmNrSsH9QABF0j-Y4-7C5aG61B1cE2mEW_GcfZBjRqOl0IjMhFhRYre9S&_nc_zt=23&_nc_ht=scontent.fbkk29-6.fna&_nc_gid=AKRcjU762GYIpn-fTZWbmQ&oh=00_AfNwplVnGM4f6qfOv4aP0SzcKLBv2VhTxYVtqh3eK8hMKQ&oe=686986AB"
          alt="Person"
          width={400}
          height={500}
          style={{
            objectFit: "cover",
            borderRadius: 12,
            position: "relative",
            zIndex: 2,
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          }}
        />
      </div>
    </div>
  );
};
export default page;
