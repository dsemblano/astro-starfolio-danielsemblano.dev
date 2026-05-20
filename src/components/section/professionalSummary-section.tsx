/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

export default function ProfessionalSummarySection() {
  return (
    <div className="w-full grid gap-6">
      {DATA.professionalSummary.map((item, index) => (
        <div
          key={item.text || index}
          className="w-full grid gap-2"
        >
          <h3 className="font-semibold leading-none text-foreground">
            {item.title}
          </h3>
          <p className="font-sans text-sm text-muted-foreground">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}

