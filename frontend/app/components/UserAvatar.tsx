export function UserAvatar({ username }: { username: string }) {
  return (
    <div className="flex flex-col items-center mb-10">
      <div className="w-24 h-24 bg-indigo-500 rounded-full flex items-center justify-center text-white text-3xl font-black shadow-xl shadow-indigo-200 dark:shadow-none mb-4">
        {username.at(0)?.toUpperCase()}
      </div>
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
        {username}
      </h1>
      <p className="text-slate-400 text-sm italic">Kandidat za vozača</p>
    </div>
  );
}
