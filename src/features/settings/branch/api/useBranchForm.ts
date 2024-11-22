import type { BranchDTO } from "../model/BranchDTO";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const defaultValues: BranchDTO = {
  name: "",
  phone: "",
  address: "",
  inn: "",
  comment: "",
};

export function useBranchForm() {
  const [params, setParams] = useSearchParams();

  const { control, handleSubmit, reset, clearErrors } = useForm<BranchDTO>({
    defaultValues,
  });

  const open = params.get("branchForm");

  const handleClose = () => {
    params.delete("branchForm");
    setParams(params);
    reset(defaultValues);
    clearErrors();
  };

  const handleOpen = () => {
    params.set("branchForm", "open");
    setParams(params);
  };

  const onSubmit = handleSubmit(async (data: BranchDTO) => {
    console.log(data);
  });

  return {
    onSubmit,
    control,
    open: !!open,
    handleClose,
    handleOpen,
  };
}
