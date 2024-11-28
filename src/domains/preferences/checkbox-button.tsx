import { Checkbox } from "@ariakit/react";

type Props = {
  label: string;
  /** when using group checkbox */
  value?: string;
};

export default function CheckboxButton(props: Props) {
  return (
    <Checkbox
      value={props.value}
      className="w-full border border-stone-200 aria-checked:border-stone-700 aria-checked:outline aria-checked:outline-stone-700 shadow p-2 rounded-md"
      render={<button />}
    >
      {props.label}
    </Checkbox>
  );
}
