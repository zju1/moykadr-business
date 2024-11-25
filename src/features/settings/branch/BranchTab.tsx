import { Stack } from "@mui/material";
import { BranchList } from "./ui/BranchList";
import { CrudHeader } from "../../../widgets";
import { BranchForm } from "./ui/BranchForm";
import { useBranchForm } from "./api/useBranchForm";

export function BranchTab() {
  const { handleOpen } = useBranchForm();

  return (
    <Stack gap="12px">
      <CrudHeader onCreate={handleOpen} />
      <BranchList />
      <BranchForm />
    </Stack>
  );
}
