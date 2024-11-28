import { RadioGroup, RadioProvider, Radio } from "@ariakit/react";

type Props = {
  onChange?: (value: unknown) => void;
  defaultValue?: string;
  options: { value: string; label: string }[];
};

export default function RadioGroupButtons(props: Props) {
  return (
    <RadioProvider setValue={props.onChange} defaultValue={props.defaultValue}>
      <RadioGroup className="space-y-2">
        {props.options.map((option) => (
          <Radio
            value={option.value}
            key={option.value}
            render={
              <button className="w-full border text-center border-stone-200 aria-checked:border-stone-700 aria-checked:outline aria-checked:outline-stone-700 shadow p-2 rounded-md inline-block">
                {option.label}
              </button>
            }
          />
        ))}
      </RadioGroup>
    </RadioProvider>
  );
}
