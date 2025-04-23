import { useEffect, useState } from "react";
import Papa from "papaparse";

interface TweetData {
  Tweet: string;
  HS: string;
}

export function DatasetView() {
  const [data, setData] = useState<TweetData[]>([]);
  const [stats, setStats] = useState({
    total: 0,
    hateSpeech: 0,
    nonHateSpeech: 0,
  });
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

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

            // Calculate statistics
            const total = parsedData.length;
            const hateSpeech = parsedData.filter(
              (tweet) => tweet.HS === "1"
            ).length;

            setStats({
              total,
              hateSpeech,
              nonHateSpeech: total - hateSpeech,
            });
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

  // Calculate pagination values
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="space-y-8">
      <div className="section-header">
        <h1 className="text-4xl font-heading tracking-tight">Dataset</h1>
        <p className="text-main-foreground font-base mt-2">
          Indonesian Abusive and Hate Speech Twitter Text Multi-Labeled Hate
          Speech and Abusive Indonesian Twitter Text
        </p>
      </div>

      {loading ? (
        <div className="text-center">Loading dataset...</div>
      ) : (
        <>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="neo-card p-6">
              <h2 className="text-xl font-heading mb-1">Total Dataset</h2>
              <div className="text-4xl font-heading text-main">
                {stats.total}
              </div>
            </div>
            <div className="neo-card p-6">
              <h2 className="text-xl font-heading mb-1">Hate Speech</h2>
              <div className="text-4xl font-heading text-main">
                {((stats.hateSpeech / stats.total) * 100).toFixed(2)}%
              </div>
              <p className="text-sm font-base mt-2">
                Bobot kelas: {(stats.total / (stats.hateSpeech * 2)).toFixed(4)}
              </p>
            </div>
            <div className="neo-card p-6">
              <h2 className="text-xl font-heading mb-1">Non-Hate Speech</h2>
              <div className="text-4xl font-heading text-main">
                {((stats.nonHateSpeech / stats.total) * 100).toFixed(2)}%
              </div>
              <p className="text-sm font-base mt-2">
                Bobot kelas:{" "}
                {(stats.total / (stats.nonHateSpeech * 2)).toFixed(4)}
              </p>
            </div>
          </div>

          <div className="neo-card p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-heading bg-main inline-block px-3 -ml-2 border-2 border-border rounded-base text-main-foreground">
                Dataset
              </h2>
              <div className="flex items-center gap-4">
                <label className="text-sm">
                  Items per page:
                  <select
                    className="ml-2 p-1 border rounded"
                    value={itemsPerPage}
                    onChange={(e) => {
                      setItemsPerPage(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                  >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border-2 border-border bg-main text-main-foreground p-3 text-left">
                      No.
                    </th>
                    <th className="border-2 border-border bg-main text-main-foreground p-3 text-left">
                      Tweet
                    </th>
                    <th className="border-2 border-border bg-main text-main-foreground p-3 text-left">
                      Label
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((item, index) => (
                    <tr
                      key={index}
                      className={
                        index % 2 === 0
                          ? "bg-secondary-background"
                          : "bg-background"
                      }
                    >
                      <td className="border-2 border-border p-3">
                        {indexOfFirstItem + index + 1}
                      </td>
                      <td className="border-2 border-border p-3">
                        {item.Tweet}
                      </td>
                      <td
                        className={`border-2 border-border p-3 font-base ${
                          item.HS === "1" ? "text-red-500" : "text-green-500"
                        }`}
                      >
                        {item.HS === "1" ? "Hate Speech" : "Non-Hate Speech"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex justify-between items-center">
              <div className="text-sm text-muted-foreground">
                Showing {indexOfFirstItem + 1} to{" "}
                {Math.min(indexOfLastItem, data.length)} of {data.length}{" "}
                entries
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => paginate(1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1 border rounded disabled:opacity-50"
                >
                  First
                </button>
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1 border rounded disabled:opacity-50"
                >
                  Previous
                </button>
                <div className="flex items-center gap-2">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }
                    return (
                      <button
                        key={i}
                        onClick={() => paginate(pageNum)}
                        className={`px-3 py-1 border rounded ${
                          currentPage === pageNum
                            ? "bg-main text-main-foreground"
                            : ""
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 border rounded disabled:opacity-50"
                >
                  Next
                </button>
                <button
                  onClick={() => paginate(totalPages)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 border rounded disabled:opacity-50"
                >
                  Last
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
