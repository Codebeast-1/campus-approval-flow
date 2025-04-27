import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
const Index = () => {
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 md:py-20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Side Content */}
              <div className="animate-fade-in">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                  Streamline College Approvals
                </h1>
                <p className="text-xl text-gray-600 mb-8">Ready to simplify your permissions journey?
Log in to experience smarter event management at our University</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-lightBlue">
                    
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/login" className="give the background colour red">Login</Link>
                  </Button>
                </div>
              </div>
              
              {/* Right Side Animation/Image */}
              <div className="animate-fade-in order-first md:order-last">
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" alt="Student using laptop" className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>
            
            {/* Features Section */}
            <div className="mt-20">
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Platform?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-12 w-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Save Time</h3>
                  <p className="text-gray-600">Digital approvals reduce processing time from days to hours.</p>
                </div>
                
                {/* Feature 2 */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-12 w-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Easy Tracking</h3>
                  <p className="text-gray-600">Track your approvals at every stage of the process.</p>
                </div>
                
                {/* Feature 3 */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-12 w-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Efficient Allocation</h3>
                  <p className="text-gray-600">Smart resource allocation to maximize facility usage.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">© 2025 DPMS - Digital Permission Management System. All rights reserved.</p>
        </div>
      </footer>
    </div>;
};
export default Index;