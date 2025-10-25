// file: components/EmailSubscribe.tsx
export default function EmailSubscribe() {
return (
<section className="py-20 bg-indigo-600 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-white">
                    Stay Connected for Expansion Updates
                </h2>
                <p className="mt-4 text-lg text-indigo-200">
                    Get notified when we launch in new cities across Nigeria!
                </p>
                <form className="mt-8 sm:flex">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        required
                        className="w-full sm:flex-1 px-5 py-3 border border-transparent text-base text-gray-900 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-white-600
                        bg-amber-50"
                        
                    />
                    <button
                        type="submit"
                        className="mt-4 sm:mt-0 sm:ml-4  w-full sm:w-auto px-6 py-3 border border-transparent rounded-lg shadow-md text-base font-medium text-indigo-600 bg-white hover:bg-indigo-50 transition duration-150"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
);
}