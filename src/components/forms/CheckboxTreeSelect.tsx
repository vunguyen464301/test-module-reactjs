/* eslint-disable prettier/prettier */
import { Box, Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled, css } from "@mui/material/styles";
import { PropsItemOption } from "../../Filter";

const Wrapper = styled(Box)(
  ({ theme }) => css`
    width: 100%;
    border-radius: 12px;
    font-size: 15px;
  `
);

const SelectItem = styled(Box)(
  ({ theme }) => css`
    padding: 0px 10px;
    position: relative;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  `
);

interface PropsMenu {
  items: any[];
  onChange: any;
}

const Menu = ({ items, onChange }: PropsMenu) => {
  return (
    <>
      {items.map((item: any, index) => {
        return (
          <>
            {item?.children?.length ? (
              <Accordion sx={{ border: "1px solid #e9e9e9" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel-form-${index}`}
                  id={`panel-form-${index}`}
                  sx={{
                    borderBottom: "1px solid #e9e9e9",
                  }}
                >
                  <SelectItem>
                    <FormControlLabel
                      control={
                        <Checkbox
                          value={item.value}
                          onChange={(evt) => onChange(evt)}
                        />
                      }
                      label={item.label}
                      key={item.label}
                    />
                  </SelectItem>
                </AccordionSummary>
                {item.children && (
                  <AccordionDetails sx={{ pt: 0 }}>
                    <Menu items={item.children} onChange={onChange} />
                  </AccordionDetails>
                )}
              </Accordion>
            ) : (
              <SelectItem sx={{ pl: 4 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value={item.value}
                      onChange={(evt) => onChange(evt)}
                    />
                  }
                  label={item.label}
                />
              </SelectItem>
            )}
          </>
        );
      })}
    </>
  );
};

interface Props<T>{
  onChange:any;
  items: any[];
}

const CheckBoxTreeSelect = <T extends any>(props:Props<T>) => {
  const {items,onChange}=props;
  return (
    <Wrapper>
      <Menu items={items} onChange={onChange} />
    </Wrapper>
  );
};

export { CheckBoxTreeSelect };
