import "../globals.css";
import { JaupSidebar } from "./components/Sidebar";
import { JaupTopbar } from "./components/Topbar";

export default function JaupOSLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div style={{
          display: "grid",
          gridTemplateRows: "60px 1fr",
          gridTemplateColumns: "260px 1fr",
          height: "100vh"
        }}>
          <div style={{ gridColumn: "1 / 3" }}>
            <JaupTopbar />
          </div>
          <div>
            <JaupSidebar />
          </div>
          <main style={{
            padding: "20px",
            background: "radial-gradient(circle at top left, #6A00FF22, #050509)",
            borderLeft: "1px solid #222"
          }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
