import { Sidebar } from "@/components/sidebar/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-1 overflow-y-auto">
      <Sidebar />
      {children}
    </section>
  );
}
