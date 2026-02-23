import { FaShieldHalved, FaLock, FaEnvelope } from "react-icons/fa6";
import { Link } from "react-router";

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0f172a] pb-20">
      <div className="mt-6 flex justify-center">
        <Link
          to="/register"
          className="text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          ← Nazad na registraciju
        </Link>
      </div>
      <main className="max-w-md mx-auto px-6 pt-10">
        {/* HEADER SEKCIJA */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center text-3xl mb-4">
            <FaShieldHalved />
          </div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Politika Privatnosti
          </h1>
          <p className="text-slate-400 text-xs mt-2 uppercase tracking-widest font-bold">
            Vaša privatnost je prioritet
          </p>
        </div>

        {/* SADRŽAJ */}
        <div className="space-y-8 animate-fadeIn">
          <section className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-indigo-500">
              <FaLock size={18} />
              <h3 className="text-sm font-black uppercase tracking-wider">
                1. Prikupljanje podataka
              </h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Prikupljamo vaše ime, prezime, email adresu i rezultate na probnim
              testovima isključivo u svrhu poboljšanja vašeg iskustva i
              stvaranja testova krojenih prema vašem napretku.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-indigo-500">
              <FaShieldHalved size={18} />
              <h3 className="text-sm font-black uppercase tracking-wider">
                2. Upotreba podataka
              </h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Vaši podaci se koriste isključivo unutar našeg sistema. Nikada ih
              ne dijelimo sa trećim stranama niti ih koristimo za neželjeni
              marketing (SPAM).
            </p>
          </section>

          {/* KONTAKT BOX */}
          <section className="bg-indigo-50 dark:bg-indigo-900/10 p-5 rounded-2xl border border-indigo-100 dark:border-indigo-900/20">
            <div className="flex items-start gap-4">
              <div className="text-indigo-500 mt-1">
                <FaEnvelope size={20} />
              </div>
              <div>
                <p className="text-xs text-indigo-700 dark:text-indigo-400 leading-relaxed italic font-medium">
                  Zadnja izmjena: 17.12.2025. <br />
                  Ukoliko imate pitanja, kontaktirajte nas na: <br />
                  <span className="font-bold not-italic">
                    support@drivetest.ba
                  </span>
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* MALI FOOTER ZA STRANICU */}
        <p className="mt-10 text-center text-[10px] text-slate-400">
          Korištenjem aplikacije pristajete na gore navedene uslove.
        </p>
      </main>
    </div>
  );
}

export default PrivacyPolicy;
