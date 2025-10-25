// file: app/task/create/page.tsx
export default function CreateTaskPage() {
return (
<section className="container py-12 max-w-2xl">
<h1 className="text-2xl font-bold mb-4">Create Task</h1>
<form className="grid gap-4">
<input className="border p-3 rounded" placeholder="Task title" />
<textarea className="border p-3 rounded h-36" placeholder="Describe the task"></textarea>
<select className="border p-3 rounded">
<option>Construction monitoring</option>
<option>Market survey</option>
<option>Buy/sell item</option>
<option>Other (admin approval)</option>
</select>
<input className="border p-3 rounded" placeholder="Amount (₦)" />
<button className="bg-blue-600 text-white px-4 py-2 rounded">Submit task & go to escrow</button>
</form>
</section>
);
}