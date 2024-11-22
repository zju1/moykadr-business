import { useGetBranchesQuery } from "../../../../app/store/services/config.service";

export function useBranchList() {
  const { data, isFetching } = useGetBranchesQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );

  return {
    data,
    loading: isFetching,
  };
}
