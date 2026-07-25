"use client";

import { useEffect, useState } from 'react';

export default function FileManager() {
  const [files, setFiles] = useState<string[]>([]);

  async function loadFiles() {
    const res = await fetch('/api/drive');
    const data = await res.json();
    setFiles(data.files ?? []);
  }

  async function upload() {
    const name = window.prompt('File name?');
    if (!name) return;

    await fetch('/api/drive', {
      method: 'POST',
      body: JSON.stringify({ name }),
    });

    await loadFiles();
  }

  async function remove(name: string) {
    await fetch('/api/drive', {
      method: 'DELETE',
      body: JSON.stringify({ name }),
    });

    await loadFiles();
  }

  useEffect(() => {
    loadFiles();
  }, []);

  return (
    <div>
      <button onClick={upload}>Upload File</button>

      <ul style={{ marginTop: 20 }}>
        {files.map((file) => (
          <li key={file} style={{ marginBottom: 10 }}>
            {file}
            <button onClick={() => remove(file)} style={{ marginLeft: 10 }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
