import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const RedeemPageLoader = () => {
  return (
    <section className="mx-auto flex w-full flex-1 sm:pt-10 sm:max-w-screen-3xl">
      <Card className="m-0 h-full w-full border-none shadow-none sm:m-auto sm:max-w-[90vw] sm:rounded-2xl sm:border-gray-100 sm:drop-shadow-md">
        <CardContent className="flex flex-col items-center justify-center gap-2 p-3 sm:gap-4 sm:p-10 sm:py-10">
          <Skeleton className="h-[25vw] max-h-[17rem] min-h-[11rem] w-full rounded-2xl" />
          <div className="grid w-full grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {Array(10)
              .fill(null)
              .map(idx => {
                return <Skeleton key={idx} className="h-auto max-h-[15rem] min-h-[12rem] w-full rounded-2xl" />;
              })}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default RedeemPageLoader;
