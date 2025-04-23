"use client";

import { useState } from "react";
import { ResearchSidebar } from "./research-sidebar";
import { DatasetView } from "./views/dataset-view";
import { DataExplorationView } from "./views/data-exploration-view";
import { PreprocessingView } from "./views/preprocessing-view";
import { ModelView } from "./views/model-view";
import { ConclusionView } from "./views/conclusion-view";
import { OverviewView } from "./views/overview-view";
import { PredictionView } from "./views/prediction-view";
import { Footer } from "./footer";

export function ResearchDashboard() {
  const [activeView, setActiveView] = useState("overview");

  const renderView = () => {
    switch (activeView) {
      case "dataset":
        return <DatasetView />;
      case "data-exploration":
        return <DataExplorationView />;
      case "preprocessing":
        return <PreprocessingView />;
      case "model":
        return <ModelView />;
      case "conclusion":
        return <ConclusionView />;
      case "prediction":
        return <PredictionView />;
      default:
        return <OverviewView />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex flex-1">
        <ResearchSidebar
          activeView={activeView}
          setActiveView={setActiveView}
        />
        <main className="flex-1 p-6 overflow-auto">{renderView()}</main>
      </div>
      <Footer />
    </div>
  );
}
