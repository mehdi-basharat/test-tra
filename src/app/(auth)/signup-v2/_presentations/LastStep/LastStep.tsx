import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

import { cn } from '@/lib/utils';

import useClickEvent from './usecase/use-click-event';

const LastStep = () => {
  const { selectedAge, selectedGender, handleAgeSelect, handleGenderSelect, onSubmit, loading } = useClickEvent();

  return (
    <div className="flex flex-1 flex-col items-center gap-3">
      <Card className="w-[23rem] max-w-xs border-none shadow-none sm:max-w-sm">
        <CardHeader>
          <CardTitle className="text-center text-primary">
            Last step..
            <br />
            You&apos;re almost there!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mt-10 text-center text-xl font-semibold text-primary">Choose your gender</p>
          <div className="my-2 flex justify-center gap-3">
            <Button
              className="h-20 w-20"
              variant={selectedGender === 'male' ? 'default' : 'secondary'}
              onClick={() => handleGenderSelect('male')}
            >
              <BsGenderMale size={40} />
            </Button>
            <Button
              className="h-20 w-20"
              variant={selectedGender === 'female' ? 'default' : 'secondary'}
              onClick={() => handleGenderSelect('female')}
            >
              <BsGenderFemale size={40} />
            </Button>
          </div>
          <p className="mt-8 text-center text-xl font-semibold text-primary">Choose your age</p>
          <ScrollArea className="w-96">
            <div className="flex items-center gap-3">
              {[...Array(100)].map((_, index) => (
                <Button
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  className={cn('h-16 w-16 text-lg', selectedAge === index + 13 ? 'text-primary' : 'text-gray-300')}
                  variant={selectedAge === index + 1 ? 'secondary' : 'ghost'}
                  onClick={() => handleAgeSelect(index + 13)}
                >
                  {index + 13}
                </Button>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <Button className="w-full" disabled={!selectedAge} loading={loading} type="submit" onClick={onSubmit}>
            Continue
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LastStep;
