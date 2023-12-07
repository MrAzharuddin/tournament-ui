"use client";
import { unixEpochToDateTime } from "@/utils";
import React from "react";

export default function Card({ _id, name, start, description, image_url }) {
  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg max-w-lg">
      <img
        alt="Office"
        src={`${
          image_url
            ? image_url
            : "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        }`}
        className="h-56 w-full object-cover"
      />

      <div className="bg-white p-4 sm:p-6">
        <time
          dateTime={unixEpochToDateTime(start)}
          className="block text-xs text-gray-500"
        >
          {unixEpochToDateTime(start)}
        </time>

        <a href={`/tournaments/${_id}`}>
          <h3 className="mt-0.5 text-lg text-gray-900">{name}</h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {description}
        </p>
      </div>
    </article>
  );
}
