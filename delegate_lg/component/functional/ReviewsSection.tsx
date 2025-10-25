export default function ReviewsSection() {

return (
 
        <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-12">
                    Trusted by the Diaspora
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {/* Review 1 */}
                    <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-indigo-500">
                        {/* <MessageSquare className="w-6 h-6 text-indigo-500 mb-4" /> */}
                        <p className="italic text-gray-600 mb-4">"Managing my property renovation in Ibadan was impossible until I found Delegate.NG. The weekly photo reports were a game-changer. Total peace of mind!"</p>
                        <p className="font-semibold text-gray-900">Tolu Adegoke</p>
                        <p className="text-sm text-gray-500">Toronto, Canada</p>
                        
                    </div>
                    {/* Review 2 */}
                    <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-indigo-500">
                        {/* <MessageSquare className="w-6 h-6 text-indigo-500 mb-4" /> */}
                        <p className="italic text-gray-600 mb-4">"The Pay-As-You-Go plan was perfect for verifying a vendor in Lagos. Fast, professional, and the escrow system made me feel secure. Highly recommend."</p>
                        <p className="font-semibold text-gray-900">Nkechi Okoro</p>
                        <p className="text-sm text-gray-500">London, UK</p>
                        
                    </div>
                    {/* Review 3 */}
                    <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-indigo-500">
                        {/* <MessageSquare className="w-6 h-6 text-indigo-500 mb-4" /> */}
                        <p className="italic text-gray-600 mb-4">"Used their monthly plan for a major project in Abuja. The dedicated agent was responsive and extremely professional. Finally, a service I can trust."</p>
                        <p className="font-semibold text-gray-900">Dr. K. Bello</p>
                        <p className="text-sm text-gray-500">Houston, USA</p>
                        
                    </div>
                </div>
            </div>
        </section>

);
}