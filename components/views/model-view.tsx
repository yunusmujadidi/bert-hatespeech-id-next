export function ModelView() {
  // Updated model comparison data
  const modelComparison = [
    {
      model: "Support Vector Machine",
      accuracy: "82.00%",
      precision: "81.00%",
      recall: "82.00%",
      f1: "82.00%",
    },
    {
      model: "BERT multilingual",
      accuracy: "83.24%",
      precision: "83.20%",
      recall: "83.24%",
      f1: "83.22%",
    },
    {
      model: "IndoBERTweet",
      accuracy: "88.70%",
      precision: "88.68%",
      recall: "88.70%",
      f1: "88.69%",
    },
    {
      model: "IndoBERT (indobert-base-p1)",
      accuracy: "89.47%",
      precision: "89.45%",
      recall: "89.47%",
      f1: "89.45%",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="section-header">
        <h1 className="text-4xl font-heading tracking-tight">
          Model & Results
        </h1>
        <p className="text-main-foreground font-base mt-2">
          Model machine learning dan evaluasi performa
        </p>
      </div>

      <div className="neo-card p-6">
        <h2 className="text-2xl font-heading mb-4 bg-main inline-block px-3 -ml-2 text-main-foreground border-2 border-border rounded-base">
          Perbandingan Model
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border-2 border-border bg-main text-main-foreground p-3 text-left rounded-tl-base">
                  Model
                </th>
                <th className="border-2 border-border bg-main text-main-foreground p-3 text-left">
                  Akurasi
                </th>
                <th className="border-2 border-border bg-main text-main-foreground p-3 text-left">
                  Presisi
                </th>
                <th className="border-2 border-border bg-main text-main-foreground p-3 text-left">
                  Recall
                </th>
                <th className="border-2 border-border bg-main text-main-foreground p-3 text-left rounded-tr-base">
                  F1-Score
                </th>
              </tr>
            </thead>
            <tbody>
              {modelComparison.map((item, index) => (
                <tr
                  key={item.model}
                  className={
                    index % 2 === 0
                      ? "bg-secondary-background"
                      : "bg-background"
                  }
                >
                  <td className="border-2 border-border p-3 font-base">
                    {item.model}
                  </td>
                  <td className="border-2 border-border p-3">
                    {item.accuracy}
                  </td>
                  <td className="border-2 border-border p-3">
                    {item.precision}
                  </td>
                  <td className="border-2 border-border p-3">{item.recall}</td>
                  <td className="border-2 border-border p-3">{item.f1}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-4 bg-secondary-background border-2 border-border rounded-base">
          <p className="font-base">
            <strong>Peningkatan IndoBERT dibanding SVM:</strong> +9.11% akurasi,
            +10.45% presisi, +9.11% recall, +9.09% F1-score
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="neo-card p-6">
          <h2 className="text-xl font-heading mb-3 bg-main inline-block px-2 text-main-foreground border-2 border-border rounded-base">
            Hyperparameter Tuning
          </h2>
          <p className="text-sm font-base mb-4">
            Optimasi learning rate untuk IndoBERT
          </p>
          <div className="bg-secondary-background border-2 border-border rounded-base p-4">
            <ul className="space-y-2">
              <li className="font-base">
                <span className="font-bold">Rentang yang diuji:</span> 1e-5
                hingga 5e-5
              </li>
              <li className="font-base">
                <span className="font-bold">Nilai optimal:</span> 3e-5 (performa
                terbaik)
              </li>
              <li className="font-base">
                <span className="font-bold">Temuan:</span> Learning rate 5e-5
                menyebabkan penurunan performa
              </li>
            </ul>
          </div>
        </div>

        <div className="neo-card p-6">
          <h2 className="text-xl font-heading mb-3 bg-main inline-block px-2 text-main-foreground border-2 border-border rounded-base">
            Metode Evaluasi
          </h2>
          <p className="text-sm font-base mb-4">5-fold cross validation</p>
          <div className="bg-secondary-background border-2 border-border rounded-base p-4">
            <ul className="space-y-2">
              <li className="font-base">
                <span className="font-bold">Strategi validasi:</span> 5-fold
                cross validation
              </li>
              <li className="font-base">
                <span className="font-bold">Keseimbangan kelas:</span> Proporsi
                kelas konsisten dipertahankan di semua fold
              </li>
              <li className="font-base">
                <span className="font-bold">Metrik:</span> Akurasi, presisi,
                recall, dan F1-score
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="neo-card p-6">
        <h2 className="text-xl font-heading mb-3 bg-main inline-block px-2 text-main-foreground border-2 border-border rounded-base">
          Perbandingan Arsitektur Model
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-heading mb-2">
              Support Vector Machine (SVM)
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li className="font-base">
                Algoritma machine learning tradisional
              </li>
              <li className="font-base">
                Menggunakan TF-IDF untuk ekstraksi fitur
              </li>
              <li className="font-base">
                Kemampuan terbatas dalam menangkap konteks
              </li>
              <li className="font-base">
                Memerlukan rekayasa fitur yang ekstensif
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-heading mb-2">Model BERT</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li className="font-base">
                Arsitektur bidirectional menangkap konteks dari kedua arah
              </li>
              <li className="font-base">
                Pre-trained pada korpus bahasa Indonesia yang luas (IndoBERT)
              </li>
              <li className="font-base">
                Dapat membedakan makna kontekstual (mis. &quot;anjing&quot;
                dalam konteks berbeda)
              </li>
              <li className="font-base">
                Menggunakan tokenisasi khusus untuk bahasa Indonesia
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
