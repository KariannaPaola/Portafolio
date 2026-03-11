export default function MainLayout({ children }) {

  return (
    <div className="min-h-screen w-full flex flex-col bg-slate-900">
      {children}
    </div>
  );
}