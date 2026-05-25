/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// 1. Tell TypeScript that this component expects the localized data object
interface WorkSectionProps {
  resumeData: {
    work: Array<{
      company: string;
      title: string;
      start: string;
      end?: string;
      description: string;
      logoUrl: string;
    }>;
    sections: {
      work: {
        presentLabel: string;
      };
    };
  };
}

// 2. Accept the resumeData prop right here in the function parameters
export default function WorkSection({ resumeData }: WorkSectionProps) {
  return (
    <Accordion type="single" collapsible className="w-full columns-1 lg:columns-2 gap-6 space-y-6">
      {/* 3. Changed DATA.work to resumeData.work */}
      {resumeData.work.map((work) => (
        <AccordionItem
          key={work.company}
          value={work.company}
          className="break-inside-avoid bg-muted/30 p-4 rounded-xl"
        >
          <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
            <div className="flex items-center gap-x-3 justify-between w-full text-left">
              <div className="flex items-center gap-x-3 flex-1 min-w-0">
                <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                  <div className="flex items-center gap-2">
                    {work.company}
                    <span className="text-xs text-muted-foreground whitespace-nowrap shrink-0">
                      {/* 4. Swapped static presentLabel fallback to use resumeData as well */}
                      {work.start} - {work.end ?? resumeData.sections.work.presentLabel}
                    </span>
                    <span className="relative inline-flex items-center w-3.5 h-3.5">
                      <ChevronRight
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out",
                          "translate-x-0 opacity-0",
                          "group-hover:translate-x-1 group-hover:opacity-100",
                          "group-data-[state=open]:opacity-0 group-data-[state=open]:translate-x-0"
                        )}
                      />
                      <ChevronDown
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200",
                          "opacity-0 rotate-0",
                          "group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180"
                        )}
                      />
                    </span>
                  </div>
                  <div className="font-sans text-sm text-muted-foreground professional-title">
                    {work.title}
                  </div>
                </div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-0 text-xs sm:text-sm text-muted-foreground professional-opening">
            {work.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}