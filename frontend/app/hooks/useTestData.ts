import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useMe } from "~/helpers/useMe";
import { useTestStore } from "~/testStore";
import { useUser } from "~/userStore";
export interface pitanje {
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
export const mapType = (l?: string) =>
  l === "S"
    ? "pitanje"
    : l === "Z"
      ? "znak"
      : l === "R"
        ? "raskrsnica"
        : "pomoc";
//
export default function useTestData(i: number) {
  const { loading } = useMe(); // ⬅️ UVIJEK SE ZOVE
  const user = useUser((s) => s.user);

  const [pitanja, setPitanja] = [
    useTestStore().pitanja,
    useTestStore().setPitanja,
  ];
  const location = useLocation().pathname.split("/").at(-2);

  useEffect(() => {
    if (loading || !user) return; // ⬅️ samo guard

    const fetchTest = async () => {
      const url =
        location === "A" ||
        location === "B" ||
        location === "C" ||
        location === "D" ||
        location === "T"
          ? `/test/generate-test/${location}`
          : `/test/generate-test-type/${mapType(location)}`;
      console.log(url);
      const res = await fetch(`http://127.0.0.1:5000${url}`, {
        credentials: "include",
      });

      const data = await res.json();
      setPitanja(data.pitanja);
    };

    fetchTest();
  }, [loading, user, location]);

  const trenutnoPitanje = pitanja[i - 1] ?? pitanja[0];

  return { trenutnoPitanje, loading };
}
