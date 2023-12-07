"use client"
import { Card } from "@/components";
import { api } from "@/http";
import { useEffect, useState } from "react";

export default function Home() {
  const [tournaments, setTournaments] = useState([])
  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const tnmts = await api.get('/tournaments/all')
        setTournaments(tnmts.data.payload)
      } catch (error) {
        console.log(error);
      }
    }
    fetchTournaments()
  },[])
  console.log(tournaments);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <h3 className="text-center text-2xl py-4 font-semibold">Featured Tournaments</h3>
        <div className="flex flex-wrap gap-12 justify-center">
          {tournaments
            .map((tournament, index) => (
              <Card key={index} {...tournament} />
            ))}
        </div>
      </section>
    </main>
  );
}
