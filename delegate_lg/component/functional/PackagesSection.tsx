function PackagesSection() {
  const packages = [
    { name: "Pay-as-you-go", price: "₦50,000 / task", desc: "Perfect for one-time requests" },
    { name: "Monthly", price: "₦200,000 / month", desc: "Ideal for frequent users" },
    { name: "Yearly", price: "₦1,000,000 / year", desc: "For continuous access and loyalty perks" }
  ];

  return (
    <section className="py-12 bg-gray-100 text-center py-7">
      <h2 className="text-3xl font-semibold mb-8">Our Packages</h2>
      <div className="grid md:grid-cols-3 gap-6 px-6">
        {packages.map((pkg) => (
          <div key={pkg.name} className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
            <p className="text-blue-600 text-lg mb-3">{pkg.price}</p>
            <p className="text-gray-500 mb-4">{pkg.desc}</p>
            <a href="/signup" className="bg-blue-600 text-white px-5 py-2 rounded-lg">Choose Plan</a>
          </div>
        ))}
      </div>
    </section>
  );
}


export default PackagesSection;