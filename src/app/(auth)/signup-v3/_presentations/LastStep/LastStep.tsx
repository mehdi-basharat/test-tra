import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import { Select } from '@/components/ui/select';
import { Circle, CircleCheck } from 'lucide-react';
import useClickEvent from './usecase/use-click-event';

const LastStep = () => {
  const { selectedAge, selectedGender, handleAgeSelect, handleGenderSelect, onSubmit, loading } = useClickEvent();

  return (
    <div className="flex flex-1 flex-col items-center gap-3">
      <Card className="w-[23rem] max-w-xs border-none shadow-none sm:max-w-sm">
        <CardHeader>
          <CardTitle className="text-center text-[#1E2020]">Welcome to Tyr Rewards!</CardTitle>

          <CardDescription className="pt-4 text-center text-[#374151]">Let’s Personalize Your Offers</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-[#374151]">Gender</p>
          <div className="my-2 flex items-center gap-3">
            <Button
              className="flex w-full items-center gap-2 py-8"
              variant={selectedGender === 'female' ? 'default' : 'outline'}
              onClick={() => handleGenderSelect('female')}
            >
              <div className="flex items-center gap-4">
                {selectedGender === 'female' ? (
                  <CircleCheck className="text-[#2CB388]" fill="white" size={20} />
                ) : (
                  <Circle size={20} />
                )}

                <div className="flex items-center gap-1">
                  <BsGenderFemale size={20} />
                  <p>Female</p>
                </div>
              </div>
            </Button>

            <Button
              className="flex w-full items-center gap-2 py-8"
              variant={selectedGender === 'male' ? 'default' : 'outline'}
              onClick={() => handleGenderSelect('male')}
            >
              <div className="flex items-center gap-4">
                {selectedGender === 'male' ? (
                  <CircleCheck className="text-[#2CB388]" fill="white" size={20} />
                ) : (
                  <Circle size={20} />
                )}

                <div className="flex items-center gap-1">
                  <BsGenderMale size={20} />
                  <p>Male</p>
                </div>
              </div>
            </Button>
          </div>
          <p className="mb-2 mt-10 text-[#374151]">Age</p>

          <Select
            options={[...Array(100)].map((_, index) => ({ label: String(index), value: String(index) }))}
            // placeholder="Choose a country"
            value={selectedAge ? String(selectedAge) : undefined}
            onValueChange={e => {
              handleAgeSelect(Number(e));
            }}
          />
        </CardContent>
        <CardFooter>
          <Button className="mt-4 w-full" disabled={!selectedAge} loading={loading} type="button" onClick={onSubmit}>
            Finish
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LastStep;
