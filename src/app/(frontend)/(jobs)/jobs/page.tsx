import VacancyFilters from "@/components/JobFilters";
import SearchBar from "@/components/SearchBar";

export default function VacancyPage() {
  return (
    <main className="h-svh w-full">
      <section className="h-full w-full pt-10">
        <VacancyFilters />

        <SearchBar />
      </section>
    </main>
  );
}
