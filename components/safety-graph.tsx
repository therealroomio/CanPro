'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { year: 2021, CanPro: 85, Competitor1: 70, Competitor2: 75 },
  { year: 2022, CanPro: 91, Competitor1: 75, Competitor2: 80 },
  { year: 2023, CanPro: 96, Competitor1: 82, Competitor2: 85 },
];

export function SafetyGraph() {
  return (
    <section className="py-20 sm:py-32 bg-[#f2f1e9]">
      <div className="container mx-auto px-4 md:px-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-light tracking-tight text-center sm:text-4xl md:text-5xl mb-4">
              Customer Safety Confidence
            </CardTitle>
            <p className="text-zinc-600 text-center font-light md:text-lg">
              CanPro consistently outperforms competitors in customer safety confidence
            </p>
          </CardHeader>
          <CardContent className="pt-6">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={data}>
                <XAxis dataKey="year" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}%`} />
                <Bar dataKey="CanPro" fill="#FFD700" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Competitor1" fill="#A0A0A0" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Competitor2" fill="#D3D3D3" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

