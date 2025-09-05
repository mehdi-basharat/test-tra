import { Badge } from '@/components/ui/badge';
import { TypographyH3 } from '@/components/ui/typography';

import DynamicChannel from './_components/DynamicChannel';
import TrendingWidget from './_components/TrendingWidget';
import TopOfferApp from './_presentation/TopOfferApp';

const categories = [
  'Action',
  'Adventure',
  'Board',
  'Card',
  'Casino',
  'Casual',
  'Educational',
  'Family',
  'Music',
  'Puzzle',
  'Racing',
  'Role playing',
  'Simulation',
  'Sports',
  'Strategy',
  'Trivia',
  'Word',
];
export default async function AppRoute() {
  return (
    <div className="mx-auto flex w-full flex-1 flex-col gap-12 overflow-hidden p-6">
      <TopOfferApp />
      <div className="flex flex-col gap-4">
        <TypographyH3>Trending Action Games</TypographyH3>
        <div className="mb-5 flex flex-wrap gap-2">
          {categories.map((category, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Badge key={index} className="text-sm" variant="outline">
              {category}
            </Badge>
          ))}
        </div>
        <TrendingWidget
          data={[
            {
              title: 'Kingdom Guard: Tower of Defense',
              image: '/image2.png',
              points: 41520000,
              rewards: 20,
              url: '/a/android',
              thumbnail: '/small2.png',
              categories: ['Puzzle', 'Easy'],
            },
          ]}
        />
      </div>
      <DynamicChannel
        data={[
          {
            title: 'Kingdom Guard: Tower of Defense',
            image: '/image2.png',
            points: 41520000,
            rewards: 20,
            url: '/a/android',
            thumbnail: '/small2.png',
            categories: ['Puzzle', 'Easy'],
          },
        ]}
        title="Top rewarding games in Indonesia"
      />
      <DynamicChannel
        data={[
          {
            title: 'Magician Lady',
            image: '/image3.png',
            points: 41520000,
            rewards: 20,
            url: '/a/android',
            thumbnail: '/small3.png',
            categories: ['Puzzle', 'Easy'],
          },
        ]}
        title="Newly released games"
      />
    </div>
  );
}
