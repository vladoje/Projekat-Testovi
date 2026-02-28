import { useQuery } from "@tanstack/react-query";
import Spinner from "~/components/Spinner";
import { getQuestions } from "~/helpers/questions";
import { useMe } from "~/helpers/useMe";

import Header from "~/components/Header";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { useUser } from "~/userStore";
export interface userPitanje {
  question_progress_id: number;
  question_id: number;
  recommended_until: number;
  consecutive_correct: number;
  last_seen_at: number;
  question_type: string;
  times_seen: number;
  last_result: boolean;
  question_categories: string;
  question_text: string;
}
function UserProgress() {
  const { loading } = useMe();
  const { data, isPending, isError } = useQuery({
    queryKey: ["question_progress"],
    queryFn: getQuestions,
    staleTime: 1000 * 60 * 60,
  });
  const questions = data?.questions ?? [];

  const userCategories = useUser().user?.category;
  const [selectedType, setSelectedType] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(5);

  const questionTypes = ["all", "pitanje", "znak", "raskrsnica", "pomoc"];

  // Filter and search logic
  const filteredQuestions = useMemo(() => {
    let filtered = questions ?? [];
    filtered = filtered.filter((q: userPitanje) =>
      q.question_categories
        .split(",")
        .some((cat) => userCategories?.includes(cat)),
    );
    if (selectedType !== "all") {
      filtered = filtered.filter(
        (q: userPitanje) => q.question_type === selectedType,
      );
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((q: userPitanje) =>
        q.question_text.toLowerCase().includes(query),
      );
    }

    return filtered;
  }, [questions, selectedType, searchQuery, userCategories]);

  const visibleQuestions = filteredQuestions.slice(0, visibleCount);
  const hasMore = visibleCount < filteredQuestions.length;

  if (loading || isPending) return <Spinner />;
  if (isError) return <div>Error loading questions</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Header Placeholder */}

      <main className="px-4 py-4 pb-8">
        {/* Search Bar */}
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Pretraži pitanja..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-gray-700 w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-4 scrollbar-hide">
          {questionTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                selectedType === type
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              {type === "all"
                ? "Sve"
                : type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="mb-3 text-sm text-gray-600">
          {filteredQuestions?.length}{" "}
          {filteredQuestions?.length === 1 ? "pitanje" : "pitanja"}
        </div>

        {/* Question List */}
        <div>
          {visibleQuestions?.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <p>Nema pronađenih pitanja</p>
            </div>
          ) : (
            <>
              {visibleQuestions?.map((question: userPitanje) => (
                <QuestionCard
                  key={question.question_progress_id}
                  question={question}
                />
              ))}

              {/* Load More Button */}
              {hasMore && (
                <button
                  onClick={() => setVisibleCount((prev) => prev + 5)}
                  className="w-full py-3 mt-2 bg-white text-blue-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Učitaj još ({filteredQuestions?.length - visibleCount}{" "}
                  preostalo)
                </button>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}

interface QuestionCardProps {
  question: userPitanje;
}

export function QuestionCard({ question }: QuestionCardProps) {
  // Calculate flag based on question data
  const getFlag = () => {
    if (question.times_seen === 0) return "new";
    if (question.consecutive_correct >= 3) return "mastered";
    if (question.consecutive_correct === 0 && question.times_seen >= 3)
      return "potential threat";
    return null;
  };

  const flag = getFlag();
  const hasImage =
    question.question_type === "znak" ||
    question.question_type === "raskrsnica";

  // Calculate correct and incorrect counts (mock logic based on data)
  const correctCount = question.consecutive_correct;
  const incorrectCount = Math.max(
    0,
    question.times_seen - question.consecutive_correct,
  );

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-3">
      <div className="flex justify-between items-start mb-2">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs text-gray-500 uppercase tracking-wide">
              {question.question_type}
            </span>
            {flag && (
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  flag === "new"
                    ? "bg-blue-100 text-blue-700"
                    : flag === "mastered"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                }`}
              >
                {flag}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-900 leading-relaxed">
            {question.question_text}
          </p>
        </div>
      </div>

      {hasImage && (
        <div className="my-3">
          <img
            loading="lazy"
            src={`/pitanja-slike/${question.question_id}.webp`}
            className="
    w-full
    max-h-64
    object-contain
    rounded-md
  "
          />
        </div>
      )}

      <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
        <div className="flex items-center gap-3">
          {/* Correct/Incorrect dots */}
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-xs text-gray-600">{correctCount}</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span className="text-xs text-gray-600">{incorrectCount}</span>
            </div>
          </div>

          {/* Times seen */}
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span>{question.times_seen}x</span>
          </div>
        </div>

        {question.question_categories && (
          <span className="text-xs text-gray-400">
            {question.question_categories}
          </span>
        )}
      </div>
    </div>
  );
}

export default UserProgress;
