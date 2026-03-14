import { useDarkMode } from "~/context/DarkModeContext";
import { OptionCard } from "./OptionCard";
interface pitanje {
  question_id: number;
  question_text: string;
  answer_1_text: string;
  answer_2_text: string;
  answer_3_text?: string;
  answer_4_text?: string;
  answer_5_text?: string;
  correct_answer: number[];
  categories: string;
  type: string;
}

function Izaberi({
  trenutnoPitanje,
  answers,
  setAnswers,
}: {
  trenutnoPitanje: pitanje;
  answers: string[];
  setAnswers?: Function;
}) {
  const { isDarkMode } = useDarkMode();
  return (
    <div className="space-y-3">
      <OptionCard
        isDarkMode={isDarkMode}
        label="A"
        text={trenutnoPitanje?.answer_1_text || ""}
        checked={answers.includes("a")}
        onChange={() =>
          setAnswers &&
          setAnswers((a: string[]) =>
            a.includes("a") ? a.filter((ans) => ans !== "a") : [...a, "a"],
          )
        }
      />
      <OptionCard
        isDarkMode={isDarkMode}
        label="B"
        text={trenutnoPitanje?.answer_2_text || ""}
        checked={answers.includes("b")}
        onChange={() =>
          setAnswers &&
          setAnswers((a: string[]) =>
            a.includes("b") ? a.filter((ans) => ans !== "b") : [...a, "b"],
          )
        }
      />
      {trenutnoPitanje?.answer_3_text && (
        <OptionCard
          isDarkMode={isDarkMode}
          label="C"
          text={trenutnoPitanje.answer_3_text}
          checked={answers.includes("c")}
          onChange={() =>
            setAnswers &&
            setAnswers((a: string[]) =>
              a.includes("c") ? a.filter((ans) => ans !== "c") : [...a, "c"],
            )
          }
        />
      )}
      {trenutnoPitanje?.answer_4_text && (
        <OptionCard
          isDarkMode={isDarkMode}
          label="D"
          text={trenutnoPitanje.answer_4_text}
          checked={answers.includes("d")}
          onChange={() =>
            setAnswers &&
            setAnswers((a: string[]) =>
              a.includes("d") ? a.filter((ans) => ans !== "d") : [...a, "d"],
            )
          }
        />
      )}
      {trenutnoPitanje?.answer_5_text && (
        <OptionCard
          isDarkMode={isDarkMode}
          label="E"
          text={trenutnoPitanje.answer_5_text}
          checked={answers.includes("e")}
          onChange={() =>
            setAnswers &&
            setAnswers((a: string[]) =>
              a.includes("e") ? a.filter((ans) => ans !== "e") : [...a, "e"],
            )
          }
        />
      )}
    </div>
  );
}

export default Izaberi;
