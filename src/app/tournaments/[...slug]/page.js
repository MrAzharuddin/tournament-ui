"use client";
import { api } from "@/http";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Tournament({ params }) {
  let [tournament, setTournament] = useState([]);

  useEffect(() => {
    const fetchTournament = async () => {
      const response = await api.get(`/tournaments/${params.slug}`);
      setTournament(response.data.payload);
    };
    fetchTournament();
  }, []);
  
  return (
    <div className="">
      <div>
        {tournament.map((t, idx) => (
          <div key={idx}>
            <div>
              <Image src={t.image_url} alt={t.image_url} fill={true} objectFit="contain" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
