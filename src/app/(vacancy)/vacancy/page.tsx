import VacancyFilters from "@/components/VacancyFilters";

export default function VacancyPage() {
  return (
    <main className="h-svh w-full ">
      <section className="w-full h-full px-5 pt-16 flex justify-center">
        
        {/* header */}
        <div className="flex w-full max-h-max justify-between items-start gap-10">
          <h2 className="self-center text-nowrap">Вакансии: 662</h2>

          {/* filters */}
          <div className="w-full">
            <VacancyFilters />
          </div>

        </div>
      </section>
    </main>
  );
}