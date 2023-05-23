import { useCallback, useMemo } from "react";
import cx from 'classnames'

export default function Slider({ children, onChange, value }) {
  const backgroundStyle = useMemo(() => `input-range-style-${value}`, [value]);

  const handleChange = useCallback((event) => {
    onChange(event.target.value);
  }, [onChange]);

  return (
    <div className="w-full">
      {children}
      <input
        type="range"
        min={3}
        max={15}
        step={1}
        className={cx("input-range", backgroundStyle)}
        name="temp"
        list="values"
        value={value}
        onChange={handleChange}
      />

      <datalist id="values" className="flex items-center justify-between">
        <option className="text-base opacity-50" value="3" label="3"></option>
        <option className="text-base opacity-50" value="6" label="6"></option>
        <option className="text-base opacity-50" value="9" label="9"></option>
        <option className="text-base opacity-50" value="12" label="12"></option>
        <option className="text-base opacity-50" value="15" label="15"></option>
      </datalist>
    </div>
  );
}
