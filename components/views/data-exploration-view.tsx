import Image from "next/image";

export function DataExplorationView() {
  return (
    <div className="space-y-8">
      <div className="section-header">
        <h1 className="text-4xl font-heading tracking-tight">
          Data Exploration
        </h1>
        <p className="text-main-foreground font-base mt-2">
          Analisis dan wawasan dari dataset yang dikumpulkan
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="neo-card p-6">
          <h2 className="text-xl font-heading mb-3 bg-main inline-block px-2 text-main-foreground border-2 border-border rounded-base">
            Word Cloud Analisis
          </h2>
          <p className="text-sm font-base mb-2">
            Visualisasi frekuensi kata dalam dataset
          </p>
          <div className="grid gap-4">
            <div>
              <p className="text-sm font-semibold mb-1">
                Hate Speech Word Cloud
              </p>
              <div className="max-w-[400px] mx-auto">
                <Image
                  src="/img/wordcloud-hs.png"
                  alt="Word Cloud Hate Speech"
                  width={400}
                  height={400}
                  className="w-full aspect-square object-contain bg-secondary-background border-2 border-border rounded-base p-2"
                />
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">
                Non-Hate Speech Word Cloud
              </p>
              <div className="max-w-[400px] mx-auto">
                <Image
                  src="/img/wordcloud-nonhs.png"
                  alt="Word Cloud Non-Hate Speech"
                  width={400}
                  height={400}
                  className="w-full aspect-square object-contain bg-secondary-background border-2 border-border rounded-base p-2"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="neo-card p-6">
          <h2 className="text-xl font-heading mb-3 bg-main inline-block px-2 text-main-foreground border-2 border-border rounded-base">
            Distribusi Label
          </h2>
          <p className="text-sm font-base mb-2">
            Distribusi hate speech vs non-hate speech (42.44% vs 57.56%)
          </p>
          <div className="max-w-[400px] mx-auto">
            <Image
              src="/img/distribution-label.png"
              alt="Distribusi Label"
              width={400}
              height={400}
              className="w-full aspect-square object-contain bg-secondary-background border-2 border-border rounded-base p-4"
            />
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="neo-card p-6">
          <h2 className="text-xl font-heading mb-3 bg-main inline-block px-2 text-main-foreground border-2 border-border rounded-base">
            Analisis Panjang Teks
          </h2>
          <p className="text-sm font-base mb-2">
            Distribusi panjang teks (rata-rata: 114.2 karakter, std: 69.08)
          </p>
          <div className="max-w-[500px] mx-auto">
            <Image
              src="/img/distribution-length.png"
              alt="Distribusi Panjang Teks"
              width={800}
              height={450}
              className="w-full aspect-[16/9] object-contain bg-secondary-background border-2 border-border rounded-base p-4"
            />
          </div>
        </div>

        <div className="neo-card p-6">
          <h2 className="text-xl font-heading mb-3 bg-main inline-block px-2 text-main-foreground border-2 border-border rounded-base">
            Frekuensi Slang Words
          </h2>
          <p className="text-sm font-base mb-2">
            Analisis penggunaan kata tidak baku dalam dataset
          </p>
          <div className="max-w-[500px] mx-auto">
            <Image
              src="/img/frekuensi-slang-words.png"
              alt="Frekuensi Slang Words"
              width={800}
              height={450}
              className="w-full aspect-[16/9] object-contain bg-secondary-background border-2 border-border rounded-base p-4"
            />
          </div>
        </div>
      </div>

      <div className="neo-card p-6">
        <h2 className="text-2xl font-heading mb-4 bg-main inline-block px-3 -ml-2 text-main-foreground border-2 border-border rounded-base">
          Konklusi
        </h2>
        <ul className="space-y-3 pl-5 list-disc">
          <li className="font-base">
            Dataset terdiri dari 13,001 tweets setelah pembersihan (13,169 data
            awal)
          </li>
          <li className="font-base">
            Distribusi label: 42.44% hate speech (5,518 tweets) dan 57.56%
            non-hate speech (7,483 tweets)
          </li>
          <li className="font-base">
            Rata-rata panjang teks adalah 114.2 karakter dengan standar deviasi
            69.08
          </li>
          <li className="font-base">
            Kata tidak baku terbanyak: &quot;ga&quot; (708x), &quot;gak&quot;
            (697x), &quot;aja&quot; (653x)
          </li>
          <li className="font-base">
            Terdapat noise berupa karakter khusus (xf0, x9f) yang perlu
            preprocessing
          </li>
        </ul>
      </div>
    </div>
  );
}
