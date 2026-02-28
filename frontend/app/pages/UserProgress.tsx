import { useQuery } from "@tanstack/react-query";
import Spinner from "~/components/Spinner";
import { getQuestions } from "~/helpers/questions";
import { useMe } from "~/helpers/useMe";
import { type pitanje } from "../hooks/useTestData";
import Header from "~/components/Header";

function UserProgress() {
  const { loading } = useMe();
  const { data, isPending, isError } = useQuery({
    queryKey: ["question_progress"],
    queryFn: getQuestions,
  });

  if (loading || isPending) return <Spinner />;
  if (isError) return <div>Error loading questions</div>;

  return (
    <div>
      <Header />
      {data?.map((q: pitanje) => (
        <div key={q.question_id}>{q.question_text}</div>
      ))}
    </div>
  );
}

export default UserProgress;
