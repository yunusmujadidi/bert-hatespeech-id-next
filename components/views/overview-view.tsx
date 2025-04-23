export function OverviewView() {
  return (
    <div className="space-y-8">
      <div className="section-header">
        <h1 className="text-4xl font-heading tracking-tight">Overview</h1>
        <p className="text-main-foreground font-base mt-2">
          Indonesian Hate Speech Detection
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="neo-card p-6">
          <h2 className="text-xl font-heading mb-1">Dataset Size</h2>
          <p className="text-sm font-base mb-2">Total seluruh dataset</p>
          <div className="text-4xl font-heading text-main">13170</div>
        </div>
        <div className="neo-card p-6">
          <h2 className="text-xl font-heading mb-1">Dataset Distribution</h2>
          <div className="flex justify-between">
            <div>
              <span className="text-sm font-base">Hate Speech</span>
              <div className="text-4xl font-heading text-main">42.44%</div>
            </div>
            <div>
              <span className="text-sm font-base">Non-Hate Speech</span>
              <div className="text-4xl font-heading text-main">57.56%</div>
            </div>
          </div>
        </div>
        <div className="neo-card p-6">
          <h2 className="text-xl font-heading mb-1">Best Model Accuracy</h2>
          <p className="text-sm font-base mb-2">
            Model IndoBERT indobenchmark/indobert-base-p1
          </p>
          <div className="text-4xl font-heading text-main">89.47%</div>
        </div>
      </div>

      <div className="neo-card p-6">
        <h2 className="text-2xl font-heading mb-4 bg-main inline-block px-3 -ml-2 border-2 border-border rounded-base text-main-foreground">
          Abstrak Penelitian
        </h2>
        <p className="font-base leading-relaxed">
          Transformasi digital telah meningkatkan penggunaan media sosial, namun
          juga memunculkan tantangan berupa peningkatan hate speech, khususnya
          pada platform Twitter. Hate speech berpotensi memengaruhi kesehatan
          mental, termasuk meningkatkan risiko depresi dan bunuh diri.
          Penelitian ini bertujuan mendeteksi hate speech pada tweet berbahasa
          Indonesia dengan membandingkan performa algoritma Support Vector
          Machine (SVM) dan tiga varian model Bidirectional Encoder
          Representations from Transformers (BERT): IndoBERT
          (indobenchmark/indobert-base-p1), IndoBERTweet
          (indolem/indobertweet-base-uncased), dan BERT multilingual
          (google-bert/bert-base-multilingual-uncased).
        </p>
        <p className="font-base leading-relaxed mt-4">
          Dataset dengan ketidakseimbangan kelas ringan (42,44% hate speech,
          57,56% non-hate speech) ditangani menggunakan class weighting (1,1512
          untuk hate speech, 0,8488 untuk non-hate speech). Proses preprocessing
          meliputi data cleaning, case folding, normalisasi kata slang, stopword
          removal, dan stemming. SVM menggunakan fitur TF-IDF, sedangkan model
          BERT menggunakan BertTokenizer dengan padding (max length 128) dan
          token khusus [CLS] serta [SEP].
        </p>
        <p className="font-base leading-relaxed mt-4">
          Evaluasi dengan 5-fold cross validation menunjukkan IndoBERT dengan
          learning rate 3e-5 menghasilkan performa terbaik: akurasi 89,47%,
          precision 89,45%, recall 89,46%, dan F1-score 89,45%, mengungguli
          IndoBERTweet (88,70%), BERT multilingual (83,24%), dan SVM (82,00%).
          IndoBERT unggul karena kemampuan bidirectional dan pelatihan pada
          korpus bahasa Indonesia, memungkinkan identifikasi konteks seperti
          kata &quot;anjing&quot; dalam kalimat negatif (hate speech) maupun
          non-negatif (non-hate speech). Penelitian ini menegaskan efektivitas
          IndoBERT untuk deteksi hate speech otomatis di media sosial.
        </p>
      </div>
    </div>
  );
}
