import Header from "~/components/Header";
import { useRjesenja } from "~/store";
import { useTestStore } from "~/testStore";
import { useEffect } from "react";
import { useMe } from "~/helpers/useMe";
import Spinner from "~/components/Spinner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateQuestions } from "~/helpers/questions";
import type { pitanje } from "~/hooks/useTestData";
import { Polozio } from "~/components/Polozio";
import { RjesenoPitanje } from "~/components/RjesenoPitanje";
import { useDarkMode } from "~/context/DarkModeContext";

function Results() {
  const { loading } = useMe("results");
  const queryClient = useQueryClient();
  const { isDarkMode } = useDarkMode();
  const mutation = useMutation({
    mutationFn: (args: { pitanja: pitanje[]; rjesenja: boolean[] }) =>
      updateQuestions(args.pitanja, args.rjesenja),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["question_progress"] });
    },
  });

  const rjesenja = useRjesenja().rjesenja;
  const choises = useRjesenja().choises;
  const pitanja = useTestStore().pitanja;

  useEffect(() => {
    mutation.mutate({ pitanja, rjesenja });
  }, []);
  if (loading || mutation.isPending) return <Spinner />;
  if (mutation.isError) return <div>Error: {mutation.error.message}</div>;
  return (
    <div
      className={`min-h-screen ${!isDarkMode ? " bg-background text-text border-border" : "bg-background-dark text-text-dark border-border-dark"} pb-20`}
    >
      <Header />

      <main className="max-w-2xl mx-auto px-6 pt-10">
        {/* GLAVNI SCORE CARD */}
        <Polozio rjesenja={rjesenja} duz={pitanja.length} />
        {/* DETALJAN PREGLED PITANJA */}
        <h3 className="text-xl font-black mb-4 ">Pregled grešaka</h3>
        <div className="space-y-12">
          {pitanja.map((pitanje, idx) => {
            const isCorrect = rjesenja[idx];
            return (
              <RjesenoPitanje
                key={idx}
                pitanje={pitanje}
                idx={idx}
                isCorrect={isCorrect}
                choises={choises}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
export default Results;
