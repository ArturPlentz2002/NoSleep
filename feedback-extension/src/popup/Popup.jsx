export default function Popup() {
  const handleOpenInternalPage = () => {
    chrome.tabs.create({ url: chrome.runtime.getURL("webview.html") });
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Popup</h2>
      <p>Envie seu feedback aqui!</p>

      <button
        onClick={handleOpenInternalPage}
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#1976d2',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Abrir Página Interna
      </button>
    </div>
  );
}
