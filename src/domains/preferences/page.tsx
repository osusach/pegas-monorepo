import { CheckboxProvider, Group, GroupLabel } from "@ariakit/react";
import { useState } from "react";
import CheckboxButton from "./checkbox-button";
import RadioGroupButtons from "./radio-group-buttons";
import { z } from "zod";
import { areaTags, seniorityTags } from "../shared/types";
import { Button } from "../shared/ui/button";
import { useNavigate } from "react-router";
import { usePreferences } from "./hook";

export default function PreferencePage() {
  const [step, setStep] = useState<1 | 2>(1);

  const seniorityOptions = [
    {
      label: "Buscando prácticas",
      value: "INTERNSHIP",
    },
    {
      label: "Recién titulado",
      value: "NEW-GRAD",
    },
    {
      label: "Junior (<2 años de experiencia)",
      value: "JUNIOR",
    },
  ];

  const [seniority, setSeniority] = useState<(typeof seniorityTags)[number]>();
  const [areas, setAreas] = useState<typeof areaTags | []>([]);

  const navigate = useNavigate();
  const preferences = usePreferences();

  function onConfirm() {
    if (!seniority || areas.length === 0) return;
    const { ok } = preferences.set(seniority, areas);
    if (ok) navigate("/");
  }

  return (
    <div className="mx-auto max-w-sm p-4">
      {step === 1 && (
        <div className="h-screen space-y-4 flex flex-col justify-center">
          <Group className="space-y-4 flex items-center flex-col justify-center">
            <GroupLabel className="font-semibold text-lg text-center">
              ¿Qué tipo de perfil te define mejor?
            </GroupLabel>
            <div className="space-y-2">
              <RadioGroupButtons
                onChange={(value) => {
                  const validation = z.enum(seniorityTags).safeParse(value);
                  setSeniority(
                    validation.success ? validation.data : undefined
                  );
                }}
                defaultValue={seniority}
                options={
                  seniorityOptions as unknown as {
                    value: string;
                    label: string;
                  }[]
                }
              />
            </div>
          </Group>
          <Button
            type="submit"
            disabled={seniority === undefined}
            onClick={() => setStep(2)}
          >
            Siguente
          </Button>
        </div>
      )}
      {step === 2 && (
        <div className="h-screen space-y-4 flex flex-col justify-center">
          <CheckboxProvider
            setValue={(value) => {
              setAreas(value ? (value as unknown as typeof areaTags) : []);
            }}
            defaultValue={areas as unknown as string[]}
          >
            <Group className="space-y-4 flex items-center flex-col justify-center">
              <GroupLabel className="font-semibold text-lg text-center">
                ¿En qué área estás buscando?
              </GroupLabel>
              <div className="space-y-2">
                <CheckboxButton label="Backend / Server-side" value="BACKEND" />
                <CheckboxButton
                  label="Frontend / Client-side"
                  value="FRONTEND"
                />
                <CheckboxButton label="Full stack" value="FULLSTACK" />
                <CheckboxButton label="Inteligencia Artificial" value="AI" />
              </div>
            </Group>
          </CheckboxProvider>
          <div className="w-full grid grid-cols-2 gap-4">
            <Button onClick={() => setStep(1)} variant={"ghost"}>
              Volver
            </Button>
            <Button
              disabled={areas.length === 0 || !seniority}
              onClick={onConfirm}
            >
              Ver ofertas
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
