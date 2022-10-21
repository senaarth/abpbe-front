import React from "react";
import Typography from "@mui/material/Typography";

import { AccordionDetails } from "./Details";
import { Accordion } from "./StyledAccordion";
import { AccordionSummary } from "./Summary";

import { Container } from "./styles";

type Question = {
  summary: string;
  details: string;
};

interface AccordionProps {
  questions: Question[];
}

export function AccordionComponent({ questions = [] }: AccordionProps) {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Container>
      {questions?.map((item, index) => {
        return (
          <Accordion
            key={item.summary}
            expanded={expanded === `panel${index + 1}`}
            onChange={handleChange(`panel${index + 1}`)}
          >
            <AccordionSummary
              aria-controls={`panel${index + 1}d-content`}
              id={`panel${index + 1}d-header`}
            >
              <Typography>{item?.summary}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item?.details}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Container>
  );
}
