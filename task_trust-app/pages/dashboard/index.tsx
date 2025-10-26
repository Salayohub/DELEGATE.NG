

// file: app/dashboard/page.tsx
export default function DashboardPage() {
return (
<section className="container py-12">
<h1 className="text-2xl font-bold mb-4">Dashboard</h1>
<p className="text-gray-600">User tasks, payments, and profile will appear here. (Protected route — add auth middleware.)</p>
</section>
);
}