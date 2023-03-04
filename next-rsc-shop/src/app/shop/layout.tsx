import { Sidebar } from "./Sidebar";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex grow">
      <Sidebar />
      <div className="flex flex-col p-2 max-w-full w-full">
        <div className="flex justify-between">
          <div aria-hidden id="spacer" />
          <input className="self-end" placeholder="search"/>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Layout;