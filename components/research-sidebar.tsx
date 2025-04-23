"use client";

import {
  Database,
  BarChart3,
  Home,
  BrainCircuit,
  Filter,
  CheckCircle,
  Play,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ResearchSidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

export function ResearchSidebar({
  activeView,
  setActiveView,
}: ResearchSidebarProps) {
  const menuItems = [
    { id: "overview", label: "Overview", subtitle: "Ringkasan", icon: Home },
    {
      id: "dataset",
      label: "Dataset",
      subtitle: "Kumpulan Data",
      icon: Database,
    },
    {
      id: "data-exploration",
      label: "Data Exploration",
      subtitle: "Eksplorasi Data",
      icon: BarChart3,
    },
    {
      id: "preprocessing",
      label: "Preprocessing",
      subtitle: "Pra-pemrosesan",
      icon: Filter,
    },
    {
      id: "model",
      label: "Model & Results",
      subtitle: "Model & Hasil",
      icon: BrainCircuit,
    },
    {
      id: "conclusion",
      label: "Conclusion",
      subtitle: "Kesimpulan",
      icon: CheckCircle,
    },
    {
      id: "prediction",
      label: "Prediction Hate Speech",
      subtitle: "Prediksi Hate Speech",
      icon: Play,
    },
  ];

  return (
    <div className="w-72 border-r-2 border-border bg-secondary-background min-h-screen">
      <div className="p-4 border-b-2 border-border bg-main">
        <h1 className="font-heading text-xl text-main-foreground">
          Indonesian Hate Speech Detection
        </h1>
        <p className="text-sm font-base text-main-foreground">Dashboard</p>
      </div>
      <nav className="p-4">
        <ul className="space-y-3">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveView(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 border-2 border-border font-base text-base transition-all rounded-base",
                  activeView === item.id
                    ? "bg-main text-main-foreground shadow-neo translate-y-[-2px]"
                    : "bg-secondary-background hover:bg-main hover:text-main-foreground hover:translate-y-[-2px] hover:shadow-neo"
                )}
              >
                <item.icon className="h-5 w-5" />
                <div className="text-left">
                  <div>{item.label}</div>
                  <div className="text-xs opacity-70">{item.subtitle}</div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
