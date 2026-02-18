import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useUser } from "~/userStore";

export function useMe() {
  const navigate = useNavigate();
  const setUser = useUser((s) => s.setUser);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;

    const fetchMe = async () => {
      try {
        const res = await fetch("http://127.0.0.1:5000/user/me", {
          credentials: "include",
        });

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
