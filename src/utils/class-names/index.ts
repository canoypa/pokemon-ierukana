export type Falsy = false | null | undefined | "" | 0;

type classNamesValue = string | Record<string, unknown> | Falsy;

const classNameValueToString = (val: Exclude<classNamesValue, Falsy>) => {
  if (typeof val === "string") return val;
  if (typeof val === "object") {
    let str = "";
    Object.entries(val).forEach(([cn, cond]) => cond && (str += cn));
    return str;
  }
  return "";
};

export const classNames = (...classnames: classNamesValue[]) => {
  let classes: string = "";
  classnames.forEach((val) => {
    if (val) {
      classes && (classes += " ");
      classes += classNameValueToString(val);
    }
  });
  return classes;
};
