'use client';

import React from "react";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronDown, Calendar, MapPin, Phone, Mail, Star, Bike } from 'lucide-react';
import Image from "next/image";

export default function Home() {
  const [selectedBike, setSelectedBike] = useState<string | null>(null);
  const [showReservation, setShowReservation] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    startDate: '',
    endDate: '',
    bikeType: '',
  });

  const bikes = [
    {
      id: 'city',
      name: 'City Bike',
      price: '20 EGP/hour',
      image: '/images/city-bike.jpg',
      description: 'Perfect for leisurely city rides',
      features: ['Comfortable seat', 'Basket included', 'Lightweight'],
    },
    {
      id: 'mountain',
      name: 'Mountain Bike',
      price: '30 EGP/hour',
      image: '/images/mountain-bike.jpg',
      description: 'Built for adventure and trails',
      features: ['Suspension', 'All-terrain tires', 'Durable frame'],
    },
    {
      id: 'electric',
      name: 'Electric Bike',
      price: '50 EGP/hour',
      image: '/images/electric-bike.jpg',
      description: 'Eco-friendly powered riding',
      features: ['Electric motor', 'Long battery life', 'Smart display'],
    },
    {
      id: 'kids',
      name: 'Kids Bike',
      price: '10 EGP/hour',
      image: '/images/kids-bike.jpg',
      description: 'Safe and fun for young riders',
      features: ['Training wheels', 'Safety features', 'Adjustable seat'],
    },
  ];

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reservation submitted:', formData);
    setFormData({ name: '', email: '', phone: '', startDate: '', endDate: '', bikeType: '' });
    setShowReservation(false);
    alert('Thank you for your reservation! We will contact you soon.');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <img
                src="/images/logo.png"
                alt="Yalla 3agala Bike"
                className="w-12 rounded-full shadow-xl"
              />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#bikes" className="text-gray-700 hover:text-[#2F539D] transition">Bikes</a>
              <a href="#about" className="text-gray-700 hover:text-[#2F539D] transition">About</a>
              <a href="#contact" className="text-gray-700 hover:text-[#2F539D] transition">Contact</a>
              <Button 
                onClick={() => setShowReservation(true)} 
                className="bg-[#2F539D] hover:bg-[#2F539D]/90 text-white"
              >
                Reserve Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2F539D]/10 via-[#8E2A2A]/5 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-20 ">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Ride the City with <span className="text-[#2F539D]">Yalla 3agala</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Discover Cairo on two wheels. Quality bikes, affordable prices, and exceptional service since 2013.
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#2F539D] hover:bg-[#2F539D]/90 text-white"
                  onClick={() => setShowReservation(true)}
                >
                  Book Your Bike
                </Button>
                <Button size="lg" variant="outline" className="border-[#2F539D] text-[#2F539D] hover:bg-[#2F539D]/10">
                  Learn More
                </Button>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div>
                  <div className="text-2xl font-bold text-[#2F539D]">94%</div>
                  <p className="text-sm text-gray-600">Customer Satisfaction</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#2F539D]">556+</div>
                  <p className="text-sm text-gray-600">Happy Reviews</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#2F539D]">2013</div>
                  <p className="text-sm text-gray-600">Est. Cairo</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/image.jpg"
                alt="Yalla 3agala Bike"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bikes Section */}
      <section id="bikes" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Bike Fleet</h2>
            <p className="text-lg text-gray-600">Choose the perfect bike for your Cairo adventure</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bikes.map((bike) => (
              <Card key={bike.id} className="overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col border-gray-200">
                <div className="relative h-48 bg-gradient-to-br from-[#2F539D]/10 to-[#8E2A2A]/10 overflow-hidden">
                  <Image
                  height='200'
                  width='200'
                    src={bike.image || "/placeholder.svg"}
                    alt={bike.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="flex-1">
                  <CardTitle>{bike.name}</CardTitle>
                  <CardDescription>{bike.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-2xl font-bold text-[#2F539D]">{bike.price}</div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {bike.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#2F539D] rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full bg-[#2F539D] hover:bg-[#2F539D]/90 text-white"
                    onClick={() => {
                      setSelectedBike(bike.id);
                      setShowReservation(true);
                    }}
                  >
                    Reserve
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Yalla 3agala</h2>
              <p className="text-lg text-gray-600 mb-4">
                Since 2013, we've been passionate about spreading cycling culture in Cairo. Our mission is to make bike riding accessible, affordable, and fun for everyone.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                From casual city riders to serious cyclists, we have the perfect bike for your journey. With a 94% customer satisfaction rate and over 556 positive reviews, we're proud to be Cairo's trusted bike rental service.
              </p>
              <div className="flex gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#2F539D] text-[#2F539D]" />
                ))}
              </div>
              <p className="text-sm text-gray-500">94% recommend based on 556 reviews</p>
            </div>
            <Card className="bg-[#2F539D]/5 border-[#2F539D]/20">
              <CardHeader>
                <CardTitle>Why Choose Us?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-2xl">🚴</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality Bikes</h4>
                    <p className="text-sm text-gray-600">Well-maintained fleet for your safety</p>
                  </div>
                </div>
                {/* ... other items remain similar ... */}
                <div className="flex gap-4">
                  <div className="text-2xl">💰</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Affordable Prices</h4>
                    <p className="text-sm text-gray-600">Competitive rates for all budgets</p>
                  </div>
                </div>
                {/* Add remaining items with same style */}
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Community</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <img src="/images/group-cycling.jpg" alt="Group cycling in Cairo" className="rounded-lg h-48 object-cover shadow-md" />
              <img src="/images/couple-cycling.jpg" alt="Couple enjoying bike ride" className="rounded-lg h-48 object-cover shadow-md" />
              <img src="/images/shop-interior.jpg" alt="Yalla 3agala shop interior" className="rounded-lg h-48 object-cover shadow-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#2F539D]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-gray-200">
              <CardHeader className="flex flex-row items-center gap-4">
                <MapPin className="w-6 h-6 text-[#2F539D]" />
                <div>
                  <CardTitle>Location</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Yalla 3agala</p>
                <p className="text-gray-600">Cairo, Egypt</p>
              </CardContent>
            </Card>
            {/* Phone & Email cards similar – using text-[#2F539D] for links */}
            <Card className="border-gray-200">
              <CardHeader className="flex flex-row items-center gap-4">
                <Phone className="w-6 h-6 text-[#2F539D]" />
                <div>
                  <CardTitle>Phone</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <a href="tel:+201090759503" className="text-[#2F539D] hover:underline">
                  010 90759503
                </a>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardHeader className="flex flex-row items-center gap-4">
                <Mail className="w-6 h-6 text-[#2F539D]" />
                <div>
                  <CardTitle>Email</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <a href="mailto:Yalla.3agla@gmail.com" className="text-[#2F539D] hover:underline">
                  Yalla.3agla@gmail.com
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reservation Modal */}
      {showReservation && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto border-gray-200">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-2xl">Reserve Your Bike</CardTitle>
                <CardDescription>Complete the form below to book your bike</CardDescription>
              </div>
              <button
                onClick={() => setShowReservation(false)}
                className="text-gray-500 hover:text-gray-900 text-xl"
              >
                ✕
              </button>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Form fields remain mostly the same */}
                {/* ... name, email, phone, bikeType, dates ... */}

                <div className="bg-[#2F539D]/10 border border-[#2F539D]/20 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Note:</strong> Our team will contact you to confirm your reservation and payment details.
                  </p>
                  <p className="text-sm text-[#2F539D] font-medium">In-store collection available</p>
                </div>

                <div className="flex gap-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-[#2F539D] hover:bg-[#2F539D]/90 text-white"
                  >
                    Complete Reservation
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 border-[#8E2A2A] text-[#8E2A2A] hover:bg-[#8E2A2A]/10"
                    onClick={() => setShowReservation(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#2F539D]/5 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Bike className="w-6 h-6 text-[#2F539D]" />
                <h3 className="font-bold text-gray-900">Yalla 3agala</h3>
              </div>
              <p className="text-sm text-gray-600">Spreading cycling culture in Cairo since 2013.</p>
            </div>
            {/* Quick Links, Information, Follow Us – update hover to text-[#2F539D] */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#bikes" className="hover:text-[#2F539D] transition">Our Bikes</a></li>
                <li><a href="#about" className="hover:text-[#2F539D] transition">About Us</a></li>
                <li><a href="#contact" className="hover:text-[#2F539D] transition">Contact</a></li>
              </ul>
            </div>
            {/* ... similar for other columns ... */}
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
            <p>© 2024 Yalla 3agala. All rights reserved. Made with passion for cycling in Cairo.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}