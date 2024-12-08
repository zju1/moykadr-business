import { useForm, useWatch } from "react-hook-form";
import { useGetTabelQuery } from "../../../app/store/services/reports.service";
import { AttendanceFilters } from "../model/AttendanceDTO";
import moment from "moment";

const defaultValues: AttendanceFilters = {
  month: moment().get("month") + 1,
  year: moment().get("year"),
};

export function useAttendance() {
  const { control } = useForm<AttendanceFilters>({ defaultValues });

  const filters = useWatch({ control });

  const { data, isFetching } = useGetTabelQuery(filters, {
    refetchOnMountOrArgChange: true,
  });

  return { control, data, isFetching };
}
