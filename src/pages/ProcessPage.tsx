
import Navbar from '@/components/Navbar';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check } from 'lucide-react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

const ProcessStep = ({ number, title, description, isLast = false }: ProcessStepProps) => (
  <div className="relative flex items-start">
    <div className="flex flex-col items-center mr-4">
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue text-white font-bold">
        {number}
      </div>
      {!isLast && (
        <div className="h-full w-0.5 bg-brand-blue mt-2"></div>
      )}
    </div>
    <div className="pt-1 pb-8">
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const ApprovalCard = ({ title, steps }: { title: string; steps: { title: string; description: string }[] }) => (
  <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
    <h2 className="text-xl font-bold mb-6 text-gray-800">{title}</h2>
    <div className="space-y-2">
      {steps.map((step, index) => (
        <ProcessStep
          key={index}
          number={index + 1}
          title={step.title}
          description={step.description}
          isLast={index === steps.length - 1}
        />
      ))}
    </div>
  </Card>
);

const ProcessPage = () => {
  const ltcrBookingSteps = [
    {
      title: "Request Raised",
      description: "Fill out the booking form with all required details including purpose, date, and time."
    },
    {
      title: "Faculty/Head Approval",
      description: "Your request is reviewed by the faculty or department head for initial approval."
    },
    {
      title: "Admin/Incharge Approval",
      description: "Final review by the admin or venue incharge before confirmation."
    }
  ];

  const eventBookingSteps = [
    {
      title: "Request Raised",
      description: "Submit detailed event proposal including all requirements."
    },
    {
      title: "Department Approval",
      description: "Initial review by your department to ensure alignment with policies."
    },
    {
      title: "Main Head Approval",
      description: "Review by institution head for resource allocation approval."
    },
    {
      title: "Hall Allotment",
      description: "Assignment of appropriate venue based on availability and requirements."
    },
    {
      title: "Finance Approval",
      description: "Budget approval and financial clearance for the event."
    },
    {
      title: "Event Confirmed",
      description: "Final confirmation and scheduling of your event."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Booking Process</h1>
            <p className="text-gray-600">Understand the approval workflow for different types of bookings</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="animate-fade-in">
              <ApprovalCard 
                title="LT/CR & Hall Booking Approval Flow"
                steps={ltcrBookingSteps}
              />
            </div>
            <div className="animate-fade-in">
              <ApprovalCard 
                title="Event Booking Approval Flow"
                steps={eventBookingSteps}
              />
            </div>
          </div>

          <div className="mt-12 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6 text-center">Key Benefits of Our Process</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-brand-blue/10 p-4 rounded-full mb-4">
                  <Check className="h-8 w-8 text-brand-blue" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Transparent</h3>
                <p className="text-gray-600">Track your application at every step of the process</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-brand-blue/10 p-4 rounded-full mb-4">
                  <Check className="h-8 w-8 text-brand-blue" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Efficient</h3>
                <p className="text-gray-600">Digital approvals reduce waiting time and redundant steps</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-brand-blue/10 p-4 rounded-full mb-4">
                  <Check className="h-8 w-8 text-brand-blue" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Documented</h3>
                <p className="text-gray-600">All approvals are recorded and can be referenced later</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">© 2025 DPMS - Digital Permission Management System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProcessPage;
