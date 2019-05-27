export const BMI_SET = "BMI_SET";

export function setBMI(name, value) {
  return { type: BMI_SET, name, value };
}
