import { Sidebar } from "./Sidebar";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex grow">
      <Sidebar />
      <div className="flex flex-col p-2 max-w-full">
       {children}
      </div>
    </div>
  );
}

export default Layout;
