import React from "react";
import Checkbox, {
  CheckboxProps,
  ICheckbox,
} from "@/lib/Form/Checkbox/Checkbox";
import styles from "./GroupedCheckbox.scss";

export interface IGroupedCheckbox extends ICheckbox {
  group: Array<ICheckbox>;
}
export interface GroupedCheckboxProps
  extends IGroupedCheckbox,
    Omit<CheckboxProps, "onChange"> {
  //@ts-ignore
  onChange: ({ id, label, checked, group }: IGroupedCheckbox) => void;
}
const GroupedCheckbox = ({
  //@ts-ignore
  id,
  label,
  checked,
  icon,
  group,
  onChange,
}: GroupedCheckboxProps) => {
  //@ts-ignore
  const handleAllChecked = ({ id, label, checked }: ICheckbox) => {
    onChange({
      //@ts-ignore
      id,
      label,
      checked,
      group: group.map((curr) => ({ ...curr, checked })),
    });
  };

  const handleChildChecked = (child: ICheckbox) => {
    // toggle parent input check if all child are checked
    let allChecked = 0;
    const newValues = group.map((curr) => {
      if (
        //@ts-ignore
        (curr.id !== child.id && curr.checked) ||
        //@ts-ignore
        (curr.id === child.id && child.checked)
      )
        allChecked++;
      return {
        ...curr,
        //@ts-ignore
        checked: curr.id === child.id ? child.checked : curr.checked,
      };
    });

    onChange({
      //@ts-ignore
      id,
      label,
      checked: allChecked === group.length,
      group: newValues,
    });
  };

  return (
    <>
      <Checkbox
        icon={icon}
        //@ts-ignore
        id={id}
        label={label}
        checked={checked}
        onChange={handleAllChecked}
      />
      <ul>
        {group.map((curr) => {
          return (
            //@ts-ignore
            <li key={curr.id} className={styles.GroupedCheckbox}>
              <Checkbox {...curr} onChange={handleChildChecked} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default GroupedCheckbox;
