import CustomizedHeader from "@/components/layout/customizedHeader";
import Sidebar from "@/components/layout/layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-row md:overflow-hidden bg-background">
      <section className="md:block hidden w-full flex-none md:w-64">
        <Sidebar />
      </section>
      <section className="w-full">
        <CustomizedHeader />
        <div className="flex-grow p-6 md:overflow-y-auto md:px-8 md:py-6 ">
          {children}
        </div>
      </section>
    </div>
  );
}
