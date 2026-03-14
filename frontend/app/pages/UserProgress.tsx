import Spinner from "~/components/Spinner";
import { useMe } from "~/helpers/useMe";
import Header from "~/components/Header";
import { QuestionCard } from "~/components/QuestionCard";
import { useProgress, type userPitanje } from "~/hooks/useProgress";
import {
  FilterButtons,
  SearchProgress,
  SelectOrder,
} from "~/components/ProgressFilters";
import { useDarkMode } from "~/context/DarkModeContext";

function UserProgress() {
  const { loading } = useMe();
  const {
    sortDir,
    isPending,
    isError,
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
  } = useProgress();
  const { isDarkMode } = useDarkMode();
  if (loading || isPending) return <Spinner />;
  if (isError) return <div>Error loading questions</div>;
  return (
    <div
      className={`min-h-screen ${!isDarkMode ? " bg-background text-text border-border" : "bg-background-dark text-text-dark border-border-dark"}`}
    >
      <Header />
      {/* Header Placeholder */}

      <main className="px-4 py-4 pb-8">
        {/* Search Bar */}
        <SearchProgress
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Filter Buttons */}
        <FilterButtons
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />
        <SelectOrder
          sort={sort}
          setSort={setSort}
          setSortDir={setSortDir}
          sortDir={sortDir}
        />
        {/* Results Count */}
        <div className="mb-3 text-sm ">
          {filteredQuestions?.length}{" "}
          {filteredQuestions?.length === 1 ? "pitanje" : "pitanja"}
        </div>

        {/* Question List */}
        <div>
          {visibleQuestions?.length === 0 ? (
            <div className="text-center py-12 ">
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
                  className={`
  w-full py-3 mt-2 text-text-dark
                  ${!isDarkMode ? "bg-primary border-border hover:bg-primary/25" : "bg-primary-dark border-border-dark hover:bg-primary-dark/50"}
  border
  rounded-lg
  transition-colors
`}
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

export default UserProgress;
