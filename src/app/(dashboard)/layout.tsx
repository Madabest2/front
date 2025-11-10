/**
 * Dashboard Layout
 * Layout pour les pages du dashboard
 */

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background min-h-screen">
      <div className="flex">
        {/* TODO: Ajouter la sidebar */}
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
