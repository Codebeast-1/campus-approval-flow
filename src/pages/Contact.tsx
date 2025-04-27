
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from "sonner";

const StarRating = ({ rating, setRating }: { rating: number; setRating: (rating: number) => void }) => {
  const handleClick = (value: number) => {
    setRating(value);
  };

  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => handleClick(star)}
          className="focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={star <= rating ? "#FFD700" : "none"}
            stroke={star <= rating ? "#FFD700" : "currentColor"}
            className="h-8 w-8 transition-colors"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
        </button>
      ))}
    </div>
  );
};

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [feedbackForm, setFeedbackForm] = useState({
    rating: 0,
    feedback: ''
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your message has been sent successfully!");
    setContactForm({ name: '', email: '', message: '' });
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your feedback!");
    setFeedbackForm({ rating: 0, feedback: '' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Us & Feedback</h1>
            <p className="text-gray-600">Get in touch with our team or share your experience with our platform</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* About Us Section */}
            <div className="animate-fade-in">
              <Card className="p-6 h-full">
                <h2 className="text-2xl font-bold mb-4">About DPMS</h2>
                <p className="text-gray-600 mb-4">
                  Digital Permission Management System (DPMS) is a comprehensive platform designed to 
                  streamline the approval process for booking lecture theaters, halls, and organizing 
                  events on campus. Our goal is to reduce paperwork, save time, and make resource 
                  allocation more efficient.
                </p>
                <p className="text-gray-600 mb-4">
                  With DPMS, you can track your approvals in real-time, receive notifications at each 
                  step, and have a transparent view of resource availability across the campus.
                </p>
                <div className="mt-6">
                  <h3 className="font-semibold mb-2">Contact Information:</h3>
                  <p className="text-gray-600">Email: info@dpms.edu</p>
                  <p className="text-gray-600">Phone: (123) 456-7890</p>
                  <p className="text-gray-600">Address: Main Campus, Administration Building</p>
                </div>
              </Card>
            </div>
            
            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
                <form onSubmit={handleContactSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <Input 
                        id="name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <Input 
                        id="email"
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <Textarea 
                        id="message"
                        value={contactForm.message}
                        onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                        placeholder="How can we help you?"
                        rows={5}
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-brand-blue hover:bg-brand-lightBlue"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          </div>

          {/* Feedback Form */}
          <div className="animate-fade-in">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Share Your Feedback</h2>
              <form onSubmit={handleFeedbackSubmit}>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      How would you rate your experience?
                    </label>
                    <StarRating 
                      rating={feedbackForm.rating} 
                      setRating={(rating) => setFeedbackForm({...feedbackForm, rating})} 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Feedback
                    </label>
                    <Textarea 
                      id="feedback"
                      value={feedbackForm.feedback}
                      onChange={(e) => setFeedbackForm({...feedbackForm, feedback: e.target.value})}
                      placeholder="Share your thoughts, suggestions, or experience..."
                      rows={4}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="bg-brand-blue hover:bg-brand-lightBlue"
                    disabled={feedbackForm.rating === 0}
                  >
                    Submit Feedback
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-100 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">© 2025 DPMS - Digital Permission Management System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
