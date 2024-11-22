import { Button, InputAdornment, OutlinedInput } from "@mui/material";
import { CrudHeaderWrapper } from "./crud-header.style";
import { useTranslation } from "react-i18next";
import { Add, Search } from "@mui/icons-material";

export interface CrudHeaderProps {
  onCreate?: () => void;
}

export function CrudHeader(props: CrudHeaderProps) {
  const { t } = useTranslation();
  return (
    <CrudHeaderWrapper>
      <OutlinedInput
        startAdornment={
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        }
        size="small"
        placeholder={t("search")}
      />
      <Button
        onClick={() => props.onCreate?.()}
        startIcon={<Add />}
        size="small"
        variant="contained"
      >
        {t("create")}
      </Button>
    </CrudHeaderWrapper>
  );
}
