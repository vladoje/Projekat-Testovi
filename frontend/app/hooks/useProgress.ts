import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { getQuestions } from "~/helpers/questions";
import { useUser } from "~/userStore";
export const questionTypes = ["all", "pitanje", "znak", "raskrsnica", "pomoc"];
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
export function useProgress() {
  const { data, isPending, isError } = useQuery({
    queryKey: ["question_progress"],
    queryFn: getQuestions,
    staleTime: 1000 * 60 * 60,
  });
  const questions: userPitanje[] = data?.questions ?? [];

  const userCategories = useUser().user?.category;
  const [selectedType, setSelectedType] = useState<string>("all");
  const [sort, setSort] = useState<string>("k");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(5);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

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
    switch (sort) {
      case "k": {
        const order = ["pitanje", "znak", "raskrsnica", "pomoc"];
        filtered = [...filtered].sort((a, b) => {
          const res =
            order.indexOf(a.question_type) - order.indexOf(b.question_type);
          return sortDir === "asc" ? res : -res;
        });
        break;
      }

      case "a": {
        filtered = [...filtered].sort((a, b) => {
          const res = a.question_text.localeCompare(b.question_text);
          return sortDir === "asc" ? res : -res;
        });
        break;
      }

      case "t": {
        filtered = [...filtered].sort((a, b) => {
          const res = a.consecutive_correct - b.consecutive_correct;
          return sortDir === "asc" ? res : -res;
        });
        break;
      }

      case "n": {
        filtered = [...filtered].sort((a, b) => {
          const res = Number(a.last_result) - Number(b.last_result);
          return sortDir === "asc" ? res : -res;
        });
        break;
      }

      case "v": {
        filtered = [...filtered].sort((a, b) => {
          const res = a.times_seen - b.times_seen;
          return sortDir === "asc" ? res : -res;
        });
        break;
      }
    }
    return filtered;
  }, [questions, selectedType, searchQuery, userCategories, sort, sortDir]);

  const visibleQuestions = filteredQuestions.slice(0, visibleCount);
  const hasMore = visibleCount < filteredQuestions.length;
  return {
    sortDir,
    setSortDir,
    visibleCount,
    setVisibleCount,
    searchQuery,
    setSearchQuery,
    sort,
    setSort,
    selectedType,
    setSelectedType,
    visibleQuestions,
    hasMore,
    filteredQuestions,
    isPending,
    isError,
  };
}
