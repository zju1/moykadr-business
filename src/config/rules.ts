import { Rule } from "../@types";

export const requiredRule: Rule = {
  required: {
    value: true,
    message: "required",
  },
};

export const maxRule = (value: number): Rule => ({
  maxLength: {
    value,
    message: `maxLen-value-${value}`,
  },
});

export const maxValue = (value: number): Rule => ({
  max: {
    value,
    message: `maxValue-value-${value}`,
  },
});

export const minValue = (value: number): Rule => ({
  min: {
    value,
    message: `minValue-value-${value}`,
  },
});

export const noDecimalRule: Rule = {
  validate: (value) => (value - Math.floor(value) !== 0 ? "noDecimal" : true),
};

export const emailRule: Rule = {
  pattern: {
    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gi,
    message: "invalidEmail",
  },
};
