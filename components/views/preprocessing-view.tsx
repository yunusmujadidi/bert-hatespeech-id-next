import { useEffect, useState } from "react";
import Papa from "papaparse";

interface TweetData {
  Tweet: string;
  HS: string;
  clean_tweet: string;
  Tweet_CaseFolding: string;
  alay_word: string;
  stop_word: string;
  stemming: string;
}

export function PreprocessingView() {
  const [data, setData] = useState<TweetData[]>([]);
  const [selectedTweet, setSelectedTweet] = useState<TweetData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/data.csv");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();

        Papa.parse(text, {
          header: true,
          complete: (results) => {
            const parsedData = results.data as TweetData[];
            setData(parsedData);
            setLoading(false);
          },
          error: (error: any) => {
            console.error("Error parsing CSV:", error);
            setLoading(false);
          },
        });
      } catch (error) {
        console.error("Error loading data:", error);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleTweetChange = (index: number) => {
    setSelectedTweet(data[index]);
  };

  const preprocessingSteps = [
    {
      step: "Data Cleaning",
      description: "Menghapus URL, simbol, dan noise lainnya dari tweet",
      example: "Visit https://example.com! -> Visit",
    },
    {
      step: "Case Folding",
      description: "Mengubah semua teks menjadi huruf kecil",
      example: "Dasar BODOH!!! -> dasar bodoh!!!",
    },
    {
      step: "Normalisasi Slang",
      description:
        "Mengubah slang internet Indonesia ke bentuk standar menggunakan kamus alay",
      example: "gw gk suka km -> saya tidak suka kamu",
    },
    {
      step: "Stopword Removal",
      description:
        "Menghapus kata-kata umum bahasa Indonesia yang tidak berkontribusi pada makna",
      example: "saya tidak suka dengan dia -> suka dia",
    },
    {
      step: "Stemming",
      description:
        "Mereduksi kata ke bentuk akar menggunakan algoritma stemming bahasa Indonesia",
      example: "membersihkan -> bersih",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="section-header">
        <h1 className="text-4xl font-heading tracking-tight">Preprocessing</h1>
        <p className="text-main-foreground font-base mt-2">
          Hasil dan step preprocessing pada penelitian
        </p>
      </div>

      <div className="neo-card p-6">
        <h2 className="text-xl font-heading mb-4 bg-main inline-block px-2 text-main-foreground border-2 border-border rounded-base">
          Tahapan Preprocessing
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-muted">
              <tr>
                <th className="p-3 text-left border">Tahap</th>
                <th className="p-3 text-left border">Deskripsi</th>
                <th className="p-3 text-left border">Contoh</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border font-medium">Data Cleaning</td>
                <td className="p-3 border">
                  Menghapus URL, simbol, dan noise lainnya dari tweet
                </td>
                <td className="p-3 border font-mono text-sm">
                  <span className="text-muted-foreground">
                    Visit https://example.com!
                  </span>{" "}
                  → <span>Visit</span>
                </td>
              </tr>
              <tr>
                <td className="p-3 border font-medium">Case Folding</td>
                <td className="p-3 border">
                  Mengubah semua teks menjadi huruf kecil
                </td>
                <td className="p-3 border font-mono text-sm">
                  <span className="text-muted-foreground">Dasar BODOH!!!</span>{" "}
                  → <span>dasar bodoh!!!</span>
                </td>
              </tr>
              <tr>
                <td className="p-3 border font-medium">Normalisasi Slang</td>
                <td className="p-3 border">
                  Mengubah slang internet Indonesia ke bentuk standar
                  menggunakan kamus alay
                </td>
                <td className="p-3 border font-mono text-sm">
                  <span className="text-muted-foreground">gw gk suka km</span> →{" "}
                  <span>saya tidak suka kamu</span>
                </td>
              </tr>
              <tr>
                <td className="p-3 border font-medium">Stopword Removal</td>
                <td className="p-3 border">
                  Menghapus kata-kata umum bahasa Indonesia yang tidak
                  berkontribusi pada makna
                </td>
                <td className="p-3 border font-mono text-sm">
                  <span className="text-muted-foreground">
                    saya tidak suka dengan dia
                  </span>{" "}
                  → <span>suka dia</span>
                </td>
              </tr>
              <tr>
                <td className="p-3 border font-medium">Stemming</td>
                <td className="p-3 border">
                  Mereduksi kata ke bentuk akar menggunakan algoritma stemming
                  bahasa Indonesia
                </td>
                <td className="p-3 border font-mono text-sm">
                  <span className="text-muted-foreground">membersihkan</span> →{" "}
                  <span>bersih</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {loading ? (
        <div className="text-center">Loading preprocessing examples...</div>
      ) : (
        <>
          <div className="neo-card p-6">
            <h2 className="text-xl font-heading mb-3">
              Contoh Preprocessing Tweet
            </h2>
            <select
              className="w-full p-2 border rounded-md bg-background"
              onChange={(e) => handleTweetChange(parseInt(e.target.value))}
              defaultValue=""
            >
              <option value="" disabled>
                Select a tweet to see preprocessing
              </option>
              {data.slice(0, 1000).map((tweet, index) => (
                <option key={index} value={index}>
                  {tweet.Tweet.substring(0, 100)}...
                </option>
              ))}
            </select>
          </div>

          {selectedTweet && (
            <div className="neo-card p-6">
              <h2 className="text-xl font-heading mb-4 bg-main inline-block px-2 text-main-foreground border-2 border-border rounded-base">
                Preprocessing Steps
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-1 text-muted-foreground">
                    Original Text
                  </h3>
                  <p className="font-mono p-3 bg-muted rounded-md border">
                    {selectedTweet.Tweet}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-1 text-muted-foreground">
                    Case Folding
                  </h3>
                  <p className="font-mono p-3 bg-muted rounded-md border">
                    {selectedTweet.Tweet_CaseFolding}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-1 text-muted-foreground">
                    Alay Word Normalization
                  </h3>
                  <p className="font-mono p-3 bg-muted rounded-md border">
                    {selectedTweet.alay_word}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-1 text-muted-foreground">
                    Stopword Removal
                  </h3>
                  <p className="font-mono p-3 bg-muted rounded-md border">
                    {selectedTweet.stop_word}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-1 text-muted-foreground">
                    Stemming Result
                  </h3>
                  <p className="font-mono p-3 bg-muted rounded-md border">
                    {selectedTweet.stemming}
                  </p>
                </div>

                <div className="pt-2 border-t">
                  <p className="text-sm text-muted-foreground">
                    Label:{" "}
                    <span
                      className={`font-medium ${
                        selectedTweet.HS === "1"
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {selectedTweet.HS === "1"
                        ? "Hate Speech"
                        : "Non-Hate Speech"}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </>
      )}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="neo-card p-6">
          <h2 className="text-xl font-heading mb-3 bg-main inline-block px-2 text-main-foreground border-2 border-border rounded-base">
            Ekstraksi Fitur untuk SVM
          </h2>
          <div className="bg-secondary-background p-4 border-2 border-border rounded-base">
            <p className="font-base mb-2">
              <strong>
                TF-IDF (Term Frequency-Inverse Document Frequency)
              </strong>{" "}
              digunakan untuk mengubah teks menjadi vektor numerik untuk model
              SVM.
            </p>
            <p className="font-base">
              Teknik ini menimbang pentingnya kata berdasarkan frekuensinya
              dalam dokumen relatif terhadap frekuensinya di seluruh dokumen,
              membantu mengidentifikasi istilah-istilah khas untuk klasifikasi.
            </p>
          </div>
        </div>

        <div className="neo-card p-6">
          <h2 className="text-xl font-heading mb-3 bg-main inline-block px-2 text-main-foreground border-2 border-border rounded-base">
            Tokenisasi untuk BERT
          </h2>
          <div className="bg-secondary-background p-4 border-2 border-border rounded-base">
            <p className="font-base mb-2">
              <strong>BertTokenizer</strong> digunakan untuk mengubah teks
              menjadi token untuk model BERT dengan:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li className="font-base">Panjang urutan maksimum 128</li>
              <li className="font-base">Token khusus [CLS] di awal</li>
              <li className="font-base">Token khusus [SEP] di akhir</li>
              <li className="font-base">
                Padding untuk urutan yang lebih pendek
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="neo-card p-6">
        <h2 className="text-xl font-heading mb-3 bg-main inline-block px-2 text-main-foreground border-2 border-border rounded-base">
          Contoh Konteks
        </h2>
        <p className="font-base mb-4">
          Arsitektur bidirectional model BERT memungkinkannya memahami konteks
          lebih baik daripada model tradisional. Contohnya:
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-destructive/10 p-4 border-2 border-border rounded-base">
            <p className="font-bold mb-1 text-destructive">
              Contoh Hate Speech:
            </p>
            <p>&quot;Dasar cebong anjing!&quot;</p>
            <p className="mt-2 text-sm">
              Kata &quot;anjing&quot; digunakan sebagai istilah merendahkan
              dalam konteks ini.
            </p>
          </div>
          <div className="bg-success/10 p-4 border-2 border-border rounded-base">
            <p className="font-bold mb-1 text-success">
              Contoh Non-Hate Speech:
            </p>
            <p>&quot;Anjingku lucu sekali&quot;</p>
            <p className="mt-2 text-sm">
              Kata &quot;anjing&quot; yang sama digunakan secara netral untuk
              merujuk pada hewan peliharaan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
