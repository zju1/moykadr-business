import type { PropsWithChildren } from "react";
import { PageHeader, PageWrapper } from "./page.style";
import { Stack } from "@mui/material";

export function Page(
  props: PropsWithChildren<{ title: string; subTitle?: string }>
) {
  return (
    <PageWrapper>
      <PageHeader>
        <h1>{props.title}</h1>
        {props.subTitle && <p> {props.subTitle} </p>}
      </PageHeader>
      <Stack p="24px">{props.children}</Stack>
    </PageWrapper>
  );
}
