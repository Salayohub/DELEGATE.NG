// file: app/packages/page.tsx
export default function PackagesPage() {
return (
<section className="container py-12">
<h1 className="text-3xl font-bold mb-6">Packages</h1>
<div className="grid md:grid-cols-3 gap-6">
<div className="p-6 bg-white rounded shadow">Pay-as-you-go<br/>₦5,000/task</div>
<div className="p-6 bg-white rounded shadow">Monthly<br/>₦15,000/month</div>
<div className="p-6 bg-white rounded shadow">Yearly<br/>₦120,000/year</div>
</div>
</section>
);
}