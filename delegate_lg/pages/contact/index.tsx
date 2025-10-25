// file: app/contact/page.tsx
export default function ContactPage() {
return (
<section className="container py-12">
<h1 className="text-2xl font-bold mb-4">Contact Us</h1>
<form className="grid gap-4 max-w-xl">
<input placeholder="Your name" className="border p-3 rounded" />
<input placeholder="Email" className="border p-3 rounded" />
<textarea placeholder="Message" className="border p-3 rounded h-32" />
<button className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
</form>
</section>
);
}