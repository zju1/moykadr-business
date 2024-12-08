import { CircularProgress, Stack } from "@mui/material";
import { useAttendance } from "../api/useAttendance";
import { FormSelect } from "../../../lib/shared/form-select/FormSelect";
import { useTranslation } from "react-i18next";
import { timeConstants } from "../../../config/timeConstants";
import { AttendanceTable } from "./attendance-list.style";

export function AttendanceList() {
  const { t } = useTranslation();
  const { control, data, isFetching } = useAttendance();
  const items = data?.data;
  return (
    <Stack display="grid" gap="12px">
      <Stack display="grid" gap="12px" gridTemplateColumns="150px 150px">
        <FormSelect
          control={control}
          name="year"
          label={t("year")}
          options={timeConstants.years}
          size="small"
        />
        <FormSelect
          control={control}
          name="month"
          label={t("month")}
          options={timeConstants.months.map((item) => ({
            ...item,
            label: t(item.label),
          }))}
          size="small"
        />
      </Stack>
      <AttendanceTable>
        <div className={isFetching ? "loading" : ""}>
          {isFetching ? (
            <CircularProgress />
          ) : (
            items && (
              <table border={1}>
                <thead>
                  <tr>
                    <th>№</th>
                    <th>{t("fullName")}</th>
                    <th className="totalHours">{t("totalHours")}</th>
                    {items?.[0]?.days.map((day) => (
                      <th key={`dayHeader-${day}`}>{day.day}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {items.map((employee, index) => (
                    <tr key={`employee-${employee.id}`}>
                      <td>{index + 1}</td>
                      <td>{employee.full_name}</td>
                      <td className="totalHours">
                        {employee.total_hours.toFixed(2)}
                      </td>
                      {employee.days.map((day) => (
                        <td key={`employee-${employee.id}_day-${day.day}`}>
                          {day.working_hour.toFixed(2)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            )
          )}
        </div>
      </AttendanceTable>
    </Stack>
  );
}
