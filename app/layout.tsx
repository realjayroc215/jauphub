import './globals.css';
import Sidebar from './components/Sidebar';
import HeaderBar from './components/HeaderBar';

export const metadata = {
  title: 'JAUP Unified Platform',
  description: 'Command Center, Drive, Office Agent, Swarm, Security',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
          <HeaderBar />
          <div style={{ display: 'flex', flex: 1 }}>
            <Sidebar />
            <main style={{ flex: 1 }}>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
