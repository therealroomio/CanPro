'use client'

import { FadeInSection } from "@/components/fade-in-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MapPin, Search } from 'lucide-react'
import { useState } from 'react'

const serviceAreas = [
  "Bancroft", "Brantford", "Brighton", "Buckhorn", "Caledon", "Collingwood", "Gravenhurst", "Haliburton", "Huntsville", "Orangeville", "Prince Edward County", "Quinte West", "Woodstock", "Midland", "Parry Sound", "Smiths Falls", "Niagara Falls", "St Catharine", "Grimsby", "Stoney Creek", "Caledonia", "Millbrook", "Lakefield", "Madoc", "Tweed", "Napanee", "Brockville", "Toronto", "Ajax", "Angus", "Barrie", "Beaverton", "Belleville", "Bowmanville", "Bracebridge", "Bradford", "Brampton", "Brock", "Burlington", "Cambridge", "Cobourg", "Courtice", "East Gwillimbury", "East York", "Etobicoke", "Georgina", "Guelph", "Hamilton", "Havelock", "Kawartha Lakes", "Keswick", "Kitchener", "Lindsay", "Markham", "Milton", "Mississauga", "Newcastle", "Newmarket", "North York", "Oakville", "Orillia", "Oshawa", "Peterborough", "Pickering", "Port Hope", "Port Perry", "Richmond Hill", "Scarborough", "Uxbridge", "Vaughan", "Wasaga Beach", "Waterloo", "Whitby", "Whitchurch-Stouffville", "Kingston", "London"
];

export function Locations() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAreas = serviceAreas.filter(area =>
    area.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-[#f9f7f5] text-black py-20 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <FadeInSection>
          <Card className="bg-white/50 backdrop-blur-sm border-zinc-200/50 shadow-2xl rounded-2xl overflow-hidden shadow-slate-200">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-light tracking-tight sm:text-4xl md:text-5xl mb-4">
                Our Service Areas
              </CardTitle>
              <p className="text-zinc-600 md:text-xl font-light max-w-2xl mx-auto">
                CanPro Security proudly serves communities across Ontario. Find your location below to learn more about our services in your area.
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-6">
                <Search className="text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search for your area..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-grow"
                />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredAreas.map((area) => (
                  <div key={area} className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-[#FFD700]" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
              {filteredAreas.length === 0 && (
                <p className="text-center text-gray-500 mt-4">No locations found. Please try a different search term.</p>
              )}
            </CardContent>
          </Card>
        </FadeInSection>
      </div>
    </section>
  )
}

