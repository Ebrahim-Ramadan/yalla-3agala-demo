'use client';

import React from "react"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronDown, Calendar, MapPin, Phone, Mail, Star, Bike } from 'lucide-react';

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
    // Reset form
    setFormData({ name: '', email: '', phone: '', startDate: '', endDate: '', bikeType: '' });
    setShowReservation(false);
    alert('Thank you for your reservation! We will contact you soon.');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Yalla 3agala Bike"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#bikes" className="text-foreground hover:text-primary transition">Bikes</a>
              <a href="#about" className="text-foreground hover:text-primary transition">About</a>
              <a href="#contact" className="text-foreground hover:text-primary transition">Contact</a>
              <Button onClick={() => setShowReservation(true)} className="bg-primary hover:bg-primary/90">
                Reserve Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Ride the City with <span className="text-primary">Yalla 3agala</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Discover Cairo on two wheels. Quality bikes, affordable prices, and exceptional service since 2013.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => setShowReservation(true)}>
                  Book Your Bike
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div>
                  <div className="text-2xl font-bold text-primary">94%</div>
                  <p className="text-sm text-muted-foreground">Customer Satisfaction</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">556+</div>
                  <p className="text-sm text-muted-foreground">Happy Reviews</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">2013</div>
                  <p className="text-sm text-muted-foreground">Est. Cairo</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/maintenance copy.jpg"
                alt="Yalla 3agala Bike"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bikes Section */}
      <section id="bikes" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Bike Fleet</h2>
            <p className="text-lg text-muted-foreground">Choose the perfect bike for your Cairo adventure</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bikes.map((bike) => (
              <Card key={bike.id} className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                  <img
                    src={bike.image || "/placeholder.svg"}
                    alt={bike.name}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader className="flex-1">
                  <CardTitle>{bike.name}</CardTitle>
                  <CardDescription>{bike.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-2xl font-bold text-primary">{bike.price}</div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {bike.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full bg-primary hover:bg-primary/90"
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">About Yalla 3agala</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Since 2013, we've been passionate about spreading cycling culture in Cairo. Our mission is to make bike riding accessible, affordable, and fun for everyone.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                From casual city riders to serious cyclists, we have the perfect bike for your journey. With a 94% customer satisfaction rate and over 556 positive reviews, we're proud to be Cairo's trusted bike rental service.
              </p>
              <div className="flex gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">94% recommend based on 556 reviews</p>
            </div>
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Why Choose Us?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-2xl">🚴</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Quality Bikes</h4>
                    <p className="text-sm text-muted-foreground">Well-maintained fleet for your safety</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl">💰</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Affordable Prices</h4>
                    <p className="text-sm text-muted-foreground">Competitive rates for all budgets</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl">⚡</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Easy Booking</h4>
                    <p className="text-sm text-muted-foreground">Same-day reservations available</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl">👥</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Expert Support</h4>
                    <p className="text-sm text-muted-foreground">Friendly staff to help you</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Our Community</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <img src="/images/group-cycling.jpg" alt="Group cycling in Cairo" className="rounded-lg h-48 object-cover" />
              <img src="/images/couple-cycling.jpg" alt="Couple enjoying bike ride" className="rounded-lg h-48 object-cover" />
              <img src="/images/shop-interior.jpg" alt="Yalla 3agala shop interior" className="rounded-lg h-48 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <MapPin className="w-6 h-6 text-primary" />
                <div>
                  <CardTitle>Location</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Yalla 3agala</p>
                <p className="text-muted-foreground">Cairo, Egypt</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Phone className="w-6 h-6 text-primary" />
                <div>
                  <CardTitle>Phone</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <a href="tel:+201090759503" className="text-primary hover:underline">
                  010 90759503
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Mail className="w-6 h-6 text-primary" />
                <div>
                  <CardTitle>Email</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <a href="mailto:Yalla.3agla@gmail.com" className="text-primary hover:underline">
                  Yalla.3agla@gmail.com
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reservation Modal */}
      {showReservation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-2xl">Reserve Your Bike</CardTitle>
                <CardDescription>Complete the form below to book your bike</CardDescription>
              </div>
              <button
                onClick={() => setShowReservation(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                ✕
              </button>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      placeholder="+20 1XX XXX XXXX"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Bike Type</label>
                    <select
                      name="bikeType"
                      value={formData.bikeType}
                      onChange={(e) => setFormData(prev => ({ ...prev, bikeType: e.target.value }))}
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                      required
                    >
                      <option value="">Select a bike type</option>
                      {bikes.map((bike) => (
                        <option key={bike.id} value={bike.id}>
                          {bike.name} - {bike.price}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Start Date</label>
                    <Input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">End Date</label>
                    <Input
                      type="date"
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Note:</strong> Our team will contact you to confirm your reservation and payment details.
                  </p>
                  <p className="text-sm text-primary font-medium">In-store collection available</p>
                </div>

                <div className="flex gap-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-primary hover:bg-primary/90"
                  >
                    Complete Reservation
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 bg-transparent"
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
      <footer className="bg-foreground/5 border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Bike className="w-6 h-6 text-primary" />
                <h3 className="font-bold text-foreground">Yalla 3agala</h3>
              </div>
              <p className="text-sm text-muted-foreground">Spreading cycling culture in Cairo since 2013.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#bikes" className="hover:text-primary transition">Our Bikes</a></li>
                <li><a href="#about" className="hover:text-primary transition">About Us</a></li>
                <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Information</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-primary transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition">Instagram</a></li>
                <li><a href="#" className="hover:text-primary transition">Facebook</a></li>
                <li><a href="#" className="hover:text-primary transition">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Yalla 3agala. All rights reserved. Made with passion for cycling in Cairo.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
