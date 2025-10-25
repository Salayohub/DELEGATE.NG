import Link from "next/link";

function AboutPreview() {
  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
      <p className="max-w-2xl mx-auto text-gray-600 mb-6">
        TaskTrust helps you get things done locally even when you're miles away,We are your reliable eyes and hands on the ground.
        Whether it’s monitoring your project or making purchases, we’ve got you covered.
      </p>
      <Link href="/about" className="text-blue-600 font-medium border-2 rounded-lg py-2 px-4 border-blue-600 ">Read Our Full Story</Link>
    </section>
  );
}

export default AboutPreview;
