import { useNavigate } from "react-router";
import { useMe } from "~/helpers/useMe";
import { useUser } from "~/userStore";

export default function OauthSuccess() {
  useMe();
  const user = useUser().user;
  console.log(user);
  const navigate = useNavigate();
  if (user?.username) navigate("/");

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-500">Učitavanje vašeg naloga...</p>
    </div>
  );
}
