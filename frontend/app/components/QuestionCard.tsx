import { useDarkMode } from "~/context/DarkModeContext";
import type { userPitanje } from "~/hooks/useProgress";

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
  const incorrectCount = Number(!question.last_result);
  const { isDarkMode } = useDarkMode();
  return (
    <div
      className={`${!isDarkMode ? "bg-surface border-border text-text" : "text-text-dark bg-surface-dark border-border-dark"} rounded-lg shadow-sm border  p-4 mb-3`}
    >
      <div className="flex justify-between items-start mb-2">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs  uppercase tracking-wide">
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
          <p className="text-sm  leading-relaxed">{question.question_text}</p>
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

      <div
        className={`flex items-center justify-between mt-3 pt-3 border-t ${!isDarkMode ? "border-border" : "border-border-dark"}`}
      >
        <div className="flex items-center gap-3">
          {/* Correct/Incorrect dots */}
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-[#81A6C6]"></div>
              <span className="text-xs text-gray-600">{correctCount}</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full  bg-[#D2C4B4]"></div>
              <span className="text-xs text-gray-600">{incorrectCount}</span>
            </div>
          </div>

          {/* Times seen */}
          <div className="flex items-center gap-1 text-xs ">
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
          <span className="text-xs ">{question.question_categories}</span>
        )}
      </div>
    </div>
  );
}

//KONCEPT
function Krugovi({
  correctCount,
  incorrectCount,
}: {
  correctCount: number;
  incorrectCount: number;
}) {
  if (!incorrectCount) return <div>{}</div>;
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-1">
        <div className="w-3 h-3 rounded-full bg-[#81A6C6]"></div>
        <span className="text-xs text-gray-600">{correctCount}</span>
      </div>
      <div className="flex items-center gap-1">
        <div className="w-3 h-3 rounded-full  bg-[#D2C4B4]"></div>
        <span className="text-xs text-gray-600">{incorrectCount}</span>
      </div>
    </div>
  );
}
