import { Skeleton } from "@/components/ui/skeleton";
import { FC } from "react";

interface Props {}

const JobsShimmer: FC<Props> = () => {
  return (
    <>
      <div className="">
        <div className="mb-4 flex gap-10">
          <Skeleton className="w-30 h-10"></Skeleton>
          <div className="w-full flex gap-3 ">
            {Array.from({ length: 4 }).map((_, id) => (
              <Skeleton className="flex-1 h-10 max-sm:not-last:hidden" key={id} />
            ))}
          </div>
        </div>
        <Skeleton className="w-full h-10"></Skeleton>
      </div>

      <section className="grid min-h-[478px] grid-cols-3 gap-4 pt-3 pb-20 max-lg:grid-cols-2 max-lg:gap-3 max-sm:grid-cols-1 max-sm:pb-12">

        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton
            key={i}
            className="bg-popover text-popover-foreground flex h-full min-h-[360px] flex-col rounded-lg p-5 max-sm:min-h-[280px]"
          >
            <div className="flex w-full items-center justify-between gap-2">
              <Skeleton className="min-h-8 min-w-8 overflow-hidden rounded-full" />
              <Skeleton className="h-7 w-full" />
            </div>
            <Skeleton className="my-10 h-14 w-full"></Skeleton>

            <ul className="mt-auto flex basis-full items-end gap-1.5">
              <Skeleton className="h-7 flex-1 rounded-full"></Skeleton>
              <Skeleton className="h-7 flex-1 rounded-full"></Skeleton>
              <Skeleton className="h-7 flex-1 rounded-full"></Skeleton>
            </ul>
          </Skeleton>
        ))}
      </section>
    </>
  );
};
export default JobsShimmer;
