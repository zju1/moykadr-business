export const generateParams = (entityName: string) => {
  return {
    form: `${entityName}Form`,
    current: `${entityName}Id`,
  };
};
