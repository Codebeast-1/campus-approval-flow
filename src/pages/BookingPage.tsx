
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface VenueCardProps {
  name: string;
  capacity: number;
  isAvailable: boolean;
  image: string;
  location: string;
}

const VenueCard = ({ name, capacity, isAvailable, image, location }: VenueCardProps) => (
  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
    <div className="h-48 overflow-hidden">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" 
      />
    </div>
    <div className="p-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        <Badge variant={isAvailable ? "default" : "destructive"}>
          {isAvailable ? "Available" : "Occupied"}
        </Badge>
      </div>
      <p className="text-gray-600 text-sm mb-1">Location: {location}</p>
      <p className="text-gray-600 text-sm mb-3">Capacity: {capacity} seats</p>
      <Button 
        className="w-full bg-brand-blue hover:bg-brand-lightBlue"
        disabled={!isAvailable}
      >
        {isAvailable ? "Book Now" : "Currently Unavailable"}
      </Button>
    </div>
  </Card>
);

const BookingPage = () => {
  const [activeTab, setActiveTab] = useState("ltcr");

  // Sample data for lecture theaters and classrooms
  const lectureTheaters = [
    {
      name: "Lecture Theater 101",
      capacity: 150,
      isAvailable: true,
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
      location: "Main Building, Floor 1"
    },
    {
      name: "Classroom A-201",
      capacity: 60,
      isAvailable: false,
      image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb",
      location: "Block A, Floor 2"
    },
    {
      name: "Computer Lab 305",
      capacity: 40,
      isAvailable: true,
      image: "https://images.unsplash.com/photo-1551038247-3d9af20df552",
      location: "IT Block, Floor 3"
    },
    {
      name: "Seminar Hall B",
      capacity: 80,
      isAvailable: true,
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840",
      location: "Block B, Floor 1"
    }
  ];

  // Sample data for event halls
  const eventHalls = [
    {
      name: "Main Auditorium",
      capacity: 500,
      isAvailable: true,
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
      location: "Central Campus"
    },
    {
      name: "Conference Hall",
      capacity: 200,
      isAvailable: false,
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      location: "Administrative Block"
    },
    {
      name: "Open Air Theater",
      capacity: 1000,
      isAvailable: true,
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      location: "East Campus"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Venue Bookings</h1>
            <p className="text-gray-600">Browse and book available lecture theaters, classrooms and halls</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-8 grid grid-cols-2 w-full md:w-80">
              <TabsTrigger value="ltcr">Lecture Theaters / Classrooms</TabsTrigger>
              <TabsTrigger value="halls">Event Halls</TabsTrigger>
            </TabsList>
            
            <TabsContent value="ltcr" className="animate-fade-in">
              <div className="flex flex-wrap items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">Available Lecture Theaters & Classrooms</h2>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">Filter</Button>
                  <Button variant="outline" size="sm">Sort</Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {lectureTheaters.map((venue, index) => (
                  <VenueCard 
                    key={index}
                    name={venue.name}
                    capacity={venue.capacity}
                    isAvailable={venue.isAvailable}
                    image={venue.image}
                    location={venue.location}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="halls" className="animate-fade-in">
              <div className="flex flex-wrap items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">Available Event Halls</h2>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">Filter</Button>
                  <Button variant="outline" size="sm">Sort</Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {eventHalls.map((hall, index) => (
                  <VenueCard 
                    key={index}
                    name={hall.name}
                    capacity={hall.capacity}
                    isAvailable={hall.isAvailable}
                    image={hall.image}
                    location={hall.location}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
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

export default BookingPage;
