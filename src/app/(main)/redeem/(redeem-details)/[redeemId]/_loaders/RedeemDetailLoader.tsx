import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { TypographyH4 } from '@/components/ui/typography';

const RedeemDetailLoader = () => {
  return (
    <div className="mx-auto flex w-full flex-1 sm:pt-10 sm:max-w-screen-3xl">
      <Card className="m-auto min-h-full w-full rounded-none border-none sm:max-w-[90vw] sm:rounded-2xl sm:border-gray-100 sm:drop-shadow-md">
        <CardContent className="flex flex-col gap-3 p-3 sm:gap-4 sm:p-10 sm:py-10">
          <Skeleton className="h-[25vw] max-h-[15rem] min-h-[11rem] w-full rounded-2xl" />
          <section>
            <TypographyH4 className="mb-3">Redeem Instruction</TypographyH4>
            <details className="text-muted-foreground">
              <summary className="mb-2 text-sm">See Details</summary>
              <Skeleton className="h-5 w-28" />
            </details>
          </section>
          <section>
            <TypographyH4 className="mb-3">Gifts</TypographyH4>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {Array(3)
                .fill(null)
                .map(idx => {
                  return <Skeleton key={idx} className="h-fit max-h-[15rem] min-h-[6rem] w-full rounded-xl" />;
                })}
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default RedeemDetailLoader;
