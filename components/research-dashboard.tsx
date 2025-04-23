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
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export function ResearchDashboard() {
  const [activeView, setActiveView] = useState("overview");
  const [showSidebar, setShowSidebar] = useState(false);
  const isMobile = useIsMobile();

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

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
      {/* Mobile Header */}
      {isMobile && (
        <div className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm border-b border-border flex items-center justify-between p-3 shadow-sm">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md border border-border hover:bg-secondary flex items-center justify-center"
            aria-label="Toggle sidebar"
          >
            {showSidebar ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
          <h1 className="font-heading text-lg truncate">
            Indonesian Hate Speech Detection
          </h1>
          <div className="w-9"></div> {/* Spacer for alignment */}
        </div>
      )}

      <div className="flex flex-1 relative">
        {/* Sidebar - shown based on screen size or toggle state */}
        <div
          className={`${
            isMobile
              ? showSidebar
                ? "fixed inset-y-0 left-0 z-10 pt-14 translate-x-0"
                : "fixed inset-y-0 left-0 z-10 pt-14 -translate-x-full"
              : "relative"
          } transition-transform duration-300`}
        >
          <ResearchSidebar
            activeView={activeView}
            setActiveView={(view) => {
              setActiveView(view);
              if (isMobile) {
                setShowSidebar(false);
              }
            }}
          />
        </div>

        {/* Main content */}
        <main
          className={`flex-1 p-4 md:p-6 overflow-auto ${
            isMobile ? "pt-2" : ""
          }`}
        >
          {renderView()}
        </main>

        {/* Overlay for mobile when sidebar is open */}
        {isMobile && showSidebar && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-5"
            onClick={() => setShowSidebar(false)}
            aria-hidden="true"
          />
        )}
      </div>

      <Footer />
    </div>
  );
}
