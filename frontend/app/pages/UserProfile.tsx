import Header from "~/components/Header";
import { FaUser } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";
import { useMe } from "~/helpers/useMe";
import Spinner from "~/components/Spinner";
import Modal from "~/components/Modal";
import { useProfile } from "~/hooks/useProfile";
import { SelectCategory } from "~/components/RegisterHelpers";
import Input from "~/components/Input";
import { UserAvatar } from "~/components/UserAvatar";
import { ProfileActions, Window } from "~/components/ProfileActions";
import { useDarkMode } from "~/context/DarkModeContext";

function UserProfile() {
  const { loading } = useMe();
  let {
    username,
    setUsername,
    category,
    user,
    handleClick,
    handleDelete,
    handleLogout,
    toggleCategory,
  } = useProfile();
  const { isDarkMode } = useDarkMode();

  if (loading) return <Spinner />;
  return (
    <Modal>
      <div
        className={`min-h-screen ${!isDarkMode ? "bg-background text-text border-border" : "bg-background-dark text-text-dark border-border-dark"} pb-10`}
      >
        <Header />

        <main className="max-w-md mx-auto px-6 pt-10">
          {/* AVATAR SEKCIJA */}
          <UserAvatar username={user.username} />

          {/* FORMA ZA PODATKE */}
          <div className="space-y-4">
            {/* KORISNIČKO IME */}
            <div className={`group `}>
              <Input
                label={
                  <p className={`flex items-center gap-2`}>
                    <FaUser size={10} />
                    <span>Korisničko ime</span>
                  </p>
                }
                state={username}
                defaultValue={user.username}
                setState={setUsername}
              />
            </div>

            {/* KATEGORIJA */}
            <div className="group">
              <SelectCategory
                toggleCategory={toggleCategory}
                categories={category}
                user={user}
              />
            </div>

            {/* DUGME ZA SPAŠAVANJE */}
            <button
              onClick={handleClick}
              className={`w-full mt-4 ${!isDarkMode ? "bg-primary" : "bg-primary-dark"} text-text-dark  hover:bg-slate-800  font-bold py-4 rounded-2xl transition-all active:scale-[0.97] flex items-center justify-center gap-3 shadow-lg cursor-pointer`}
            >
              <FaSave /> Sačuvaj izmjene
            </button>
          </div>

          <ProfileActions />
        </main>
      </div>
      <Modal.Window name="obrisi">
        <Window handle={handleDelete} odjavi={false} />
      </Modal.Window>

      <Modal.Window name="odjavi">
        <Window handle={handleLogout} odjavi={true} />
      </Modal.Window>
    </Modal>
  );
}

export default UserProfile;
