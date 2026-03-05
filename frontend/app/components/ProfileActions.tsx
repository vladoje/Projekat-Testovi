import type { MouseEventHandler } from "react";
import { FaShieldHalved } from "react-icons/fa6";
import { Link } from "react-router";
import Modal from "./Modal";
import { useModal } from "~/hooks/useModal";

export function CloseButton() {
  const { close } = useModal();
  return (
    <button
      onClick={close}
      className="flex-1 px-4 py-3 text-sm font-bold text-gray-500 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
    >
      Odustani
    </button>
  );
}
export function ProfileActions() {
  return (
    <div className="mt-8 flex flex-col items-center gap-4">
      <Modal.Open opens="odjavi">
        <button className="text-red-400 text-xs font-bold hover:text-red-500 transition-colors cursor-pointer">
          Odjavi se sa profila
        </button>
      </Modal.Open>
      <Modal.Open opens="obrisi">
        <button className="text-red-400 text-xs font-bold hover:text-red-500 transition-colors cursor-pointer">
          Obrisi profil
        </button>
      </Modal.Open>
      <Link
        to="/privacy-policy"
        className="flex items-center gap-2 text-slate-400 hover:text-indigo-500 text-[10px] font-bold uppercase tracking-widest transition-colors"
      >
        <FaShieldHalved size={12} /> Politika Privatnosti
      </Link>
    </div>
  );
}
export function Window({
  handle,
  odjavi = false,
}: {
  handle: MouseEventHandler<HTMLButtonElement>;
  odjavi?: boolean;
}) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-bold text-gray-800">
        {odjavi
          ? " Da li ste sigurni da želite da se odjavite?"
          : " Da li ste sigurni da želite obrisati ovaj element?"}
      </h2>
      <p className="text-gray-500 text-sm">
        {odjavi
          ? " Nakon odjave, moraćete ponovo da se ulogujete da biste pristupili svom nalogu."
          : " Ova akcija se ne može poništiti."}
      </p>
      <div className="flex justify-end gap-3">
        <CloseButton />
        <button
          onClick={handle}
          className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
        >
          {odjavi ? " Odjavi se" : "Obriši"}
        </button>
      </div>
    </div>
  );
}
