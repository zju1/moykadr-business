import { useGetEmployeesQuery } from "../../../app/store/services/employees.service";

export function useUsersList() {
  const { data, isFetching } = useGetEmployeesQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );

  return {
    data,
    loading: isFetching,
  };
}
