
import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import React, { useState } from "react";
import { styled, css } from "@mui/material/styles";

const SelectWrapper = styled(Box)(
  ({ theme }) => css`
    width: 100%;
    background: #ffffff;
    z-index: 1;
    border-radius: 12px;
    border: 1px solid #e9e9e9;
    font-size: 15px;
    overflow: auto;
  `
);

const SelectItem = styled(Box)(
  ({ theme }) => css`
    padding: 0px 20px;
    position: relative;
    &.hasChild {
      padding-left: 12px;
      font-weight: bold;
      color: #fff;
      background: #000;
    }

    + div .hasChild {
      padding-left: 20px;
      background: #000000c9;
    }
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
    &.hasChild:hover {
      text-decoration: unset;
    }
  `
);

interface PropsMenu {
  items: any;
  onFilter: any;
}

const Menu = ({ items, onFilter }: PropsMenu) => {
  const [displayChildren, setDisplayChildren] = useState<any>({});

  return (
    <>
      {items.map((item: any) => {
        return (
          <Box key={item.label}>
            {item.children && item.children.length > 0 ? (
              <SelectItem
                className="hasChild"
                onClick={() => {
                  setDisplayChildren({
                    ...displayChildren,
                    [item.label]: !displayChildren[item.label],
                  });
                }}
              >
                {item.label}
                <Typography
                  sx={{ position: "absolute", right: "14px", top: "12px" }}
                >
                  {displayChildren[item.label] ? "-" : "+"}
                </Typography>
              </SelectItem>
            ) : (
              <SelectItem>
                <FormControlLabel
                  control={
                    <Checkbox
                      value={item.value}
                      onChange={(evt) => onFilter(evt)}
                    />
                  }
                  label={item.label}
                />
              </SelectItem>
            )}
            {displayChildren[item.label] && item.children && (
              <Box>
                <Menu items={item.children} onFilter={onFilter} />
              </Box>
            )}
          </Box>
        );
      })}
    </>
  );
};

const CheckBoxTree = (props: { onFilter?: any; items: Array<any> }) => {
  return (
    <SelectWrapper>
      <Menu items={props.items} onFilter={props.onFilter} />
    </SelectWrapper>
  );
};

export { CheckBoxTree };
