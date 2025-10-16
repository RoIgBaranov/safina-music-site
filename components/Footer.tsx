import Link from "next/link";

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container-max py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-gray-500">© {year} Safina Music School, Holon</p>

        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-[var(--brand)]">
            Политика конфиденциальности
          </Link>
          <Link href="/terms" className="hover:text-[var(--brand)]">
            Публичная оферта
          </Link>
        </div>
      </div>
    </footer>
  );
};
