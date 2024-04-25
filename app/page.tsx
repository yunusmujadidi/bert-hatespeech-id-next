"use client";
import { useState } from "react";

export default function Home() {
  // Keep track of the classification result and the model loading status.
  const [result, setResult] = useState<
    { label: string; score: number }[] | null
  >(null);
  const [ready, setReady] = useState<boolean | null>(null);

  const classify = async (text: string) => {
    if (!text) return;
    if (ready === null) setReady(false);

    // Make a request to the /classify route on the server.
    const response = await fetch(`/classify?text=${encodeURIComponent(text)}`);

    // If this is the first time we've made a request, set the ready flag.
    if (ready === null) setReady(true);

    const json = await response.json();
    const mappedResult = json.map((item: { label: string; score: number }) => {
      let newLabel = item.label;
      if (item.label === "NEGATIVE") {
        newLabel = "Hate Speech";
      } else if (item.label === "POSITIVE") {
        newLabel = "Non-Hate Speech";
      }
      return { ...item, label: newLabel };
    });

    setResult(mappedResult);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12">
      <h1 className="text-5xl font-bold mb-6 text-center px-16">
        DETEKSI TWEET HATE SPEECH BERBAHASA INDONESIA MENGGUNAKAN SUPPORT VECTOR
        MACHINE (SVM) DAN BIDIRECTIONAL ENCODER REPRESENTATION FROM <br />{" "}
        TRANSFORMERS (BERT)
      </h1>
      <h2 className="text-2xl mb-8 text-center">
        Model BERT yang telah dilatih untuk mendeteksi tweet hate speech
        berbahasa Indonesia.
      </h2>
      <input
        type="text"
        className="w-full max-w-xs p-2 border border-gray-300 rounded mb-4"
        placeholder="Enter text here"
        onInput={(e) => {
          classify((e.target as HTMLInputElement).value);
        }}
      />
      {ready !== null && (
        <div className="">
          {!ready || !result
            ? "Loading..."
            : result.map((item, index) => (
                <div key={index} className="mb-2">
                  <h3 className="font-bold text-lg">{item.label}</h3>
                  <p>Score: {item.score}</p>
                </div>
              ))}
        </div>
      )}
    </main>
  );
}
