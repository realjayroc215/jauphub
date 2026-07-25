import FileManager from './components/FileManager';

export default function Drive() {
  return (
    <div style={{ padding: 40 }}>
      <h1>JAUP Drive</h1>
      <p>Your unified storage system.</p>
      <FileManager />
    </div>
  );
}
