import { DialogContent, DialogTitle, type DialogProps } from "@mui/material";
import { DialogBaseWrapper } from "./dialog-base.style";

export function DialogBase(props: DialogProps & { header?: string }) {
  return (
    <DialogBaseWrapper {...props}>
      <DialogTitle>{props.header}</DialogTitle>
      <DialogContent>{props.children}</DialogContent>
    </DialogBaseWrapper>
  );
}
