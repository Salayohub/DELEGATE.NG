function WhatWedo() {
  return(
  
        <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-12">
                    What We Delegate For You
                </h2>
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Service 1 */}
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                        {/* <MapPin className="w-8 h-8 text-indigo-600 mb-3" /> */}
                        <h3 className="text-xl font-semibold text-gray-900">Property Monitoring</h3>
                        <p className="mt-2 text-gray-600 text-sm">Regular site visits, construction progress reports, and renovation oversight in all service areas.</p>
                    </div>
                    {/* Service 2 */}
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                        {/* <DollarSign className="w-8 h-8 text-indigo-600 mb-3" /> */}
                        <h3 className="text-xl font-semibold text-gray-900">Business & Market Surveys</h3>
                        <p className="mt-2 text-gray-600 text-sm">Local competitor research, vendor verification, and essential liaison services for businesses.</p>
                    </div>
                    {/* Service 3 */}
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                        {/* <Globe className="w-8 h-8 text-indigo-600 mb-3" /> */}
                        <h3 className="text-xl font-semibold text-gray-900">Personal & Family Errands</h3>
                        <p className="mt-2 text-gray-600 text-sm">Document submission, bill payments, verification of local contacts, and crucial support for family.</p>
                    </div>
                    {/* Service 4 */}
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                        {/* <FileText className="w-8 h-8 text-indigo-600 mb-3" /> */}
                        <h3 className="text-xl font-semibold text-gray-900">Document Processing</h3>
                        <p className="mt-2 text-gray-600 text-sm">Secure handling and delivery of sensitive papers requiring physical presence at official institutions.</p>
                    </div>
                </div>
            </div>
        </section>
    
  )
}
export default WhatWedo;