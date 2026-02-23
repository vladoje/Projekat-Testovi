import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useRjesenja } from "~/store";
import { useUser } from "~/userStore";

export function useMe(results?: string) {
  const navigate = useNavigate();
  const setUser = useUser((s) => s.setUser);
  const resetState = useRjesenja().resetState;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!results) resetState();
    let alive = true;

    const fetchMe = async () => {
      try {
        const res = await fetch(
          "https://projekat-testovi.onrender.com/user/me",
          {
            credentials: "include",
          },
        );

        const data = await res.json();

        if (!alive) return;

        if (data.message) {
          navigate("/login", { replace: true });
        } else {
          setUser(data.user);
        }
      } catch {
        navigate("/login", { replace: true });
      } finally {
        alive && setLoading(false);
      }
    };

    fetchMe();

    return () => {
      alive = false;
    };
  }, [navigate, setUser]);

  return { loading };
}
