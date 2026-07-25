type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
};

export default function Button({ children, variant = 'primary' }: ButtonProps) {
  const styles = {
    primary: { background: '#2563eb', color: 'white' },
    secondary: { background: '#334155', color: 'white' },
    ghost: { background: 'transparent', color: '#93c5fd', border: '1px solid #93c5fd' },
  };

  return (
    <button style={{ padding: '0.6rem 0.9rem', border: 'none', borderRadius: '999px', cursor: 'pointer', ...styles[variant] }}>
      {children}
    </button>
  );
}
