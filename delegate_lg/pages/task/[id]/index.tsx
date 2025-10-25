// file: app/task/[id]/page.tsx
import { useRouter } from 'next/navigation';
export default function TaskDetailPage({ params }: { params: { id: string } }) {
const { id } = params;
return (
<section className="container py-12">
<h1 className="text-2xl font-bold">Task #{id}</h1>
<p className="text-gray-600">Task detail, status, photos, chat and escrow actions here.</p>
</section>
);
}