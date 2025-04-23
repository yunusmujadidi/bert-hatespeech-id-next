export function ConclusionView() {
  return (
    <div className="space-y-8">
      <div className="section-header">
        <h1 className="text-4xl font-heading tracking-tight">Conclusion</h1>
        <p className="text-main-foreground font-base mt-2">Kesimpulan</p>
      </div>

      <div className="neo-card p-6">
        <h2 className="text-2xl font-heading mb-4 bg-main inline-block px-3 -ml-2 text-main-foreground border-2 border-border rounded-base">
          Konklusi
        </h2>
        <ul className="space-y-3 pl-5 list-disc">
          <li className="font-base">
            IndoBERT menunjukkan performa superior dengan akurasi 89,47%,
            precision 89,45%, recall 89,47%, dan F1-score 89,45%
          </li>
          <li className="font-base">
            SVM mencapai hasil yang lebih rendah dengan akurasi 82,00%,
            precision 81,00%, recall 82,00%, dan F1-score 82,00%
          </li>
          <li className="font-base">
            Penerapan class weighting (1,18 untuk hate speech, 0,87 untuk
            non-hate speech) efektif mengatasi ketidakseimbangan data
          </li>
          <li className="font-base">
            Preprocessing data meliputi pembersihan simbol, normalisasi kata
            slang, case folding, stopword removal, dan stemming
          </li>
          <li className="font-base">
            Evaluasi menggunakan stratified 5-fold cross-validation menunjukkan
            konsistensi performa model
          </li>
        </ul>
      </div>
    </div>
  );
}
