import { ExternalLink } from "lucide-react";

export function PredictionView() {
  return (
    <div className="space-y-8">
      <div className="section-header">
        <h1 className="text-4xl font-heading tracking-tight">
          Live Prediction
        </h1>
        <p className="text-main-foreground font-base mt-2">
          Uji model IndoBERT untuk deteksi ujaran kebencian secara langsung
        </p>
      </div>

      <div className="neo-card p-6">
        <h2 className="text-2xl font-heading mb-4 bg-main inline-block px-3 -ml-2 border-2 border-border rounded-base text-main-foreground">
          Coba Model IndoBERT
        </h2>
        <p className="font-base mb-6">
          Model IndoBERT telah di-fine-tune khusus untuk mendeteksi ujaran
          kebencian dalam bahasa Indonesia.
        </p>

        <div className="flex justify-center mb-6">
          <a
            href="https://test123-7ycmbj5dsvwjd6zxy7e5a5.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="neo-button flex items-center gap-2 px-6 py-3 text-lg"
          >
            Prediksi Hate Speech Bahasa Indonesia{" "}
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>

        <div className="bg-secondary-background p-4 border-2 border-border rounded-base mb-6">
          <p className="font-base">
            <strong>Model Repository:</strong>{" "}
            <a
              href="https://huggingface.co/blacklotusid/id-hs-indobert"
              target="_blank"
              rel="noopener noreferrer"
              className="text-main underline hover:no-underline"
            >
              blacklotusid/id-hs-indobert
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
