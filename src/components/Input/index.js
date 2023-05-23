import { useCallback } from "react";


export default function Input({ value, onChange, placeholder }) {
  const handleChange = useCallback((event) => {
    onChange(event.target.value)
  }, [onChange])

  return (
    <input
      className="focus-visible:none focus:outline-none focus:border-focus w-full rounded-md border-[3px] border-solid border-white border-opacity-50 bg-transparent px-4 py-5"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
}
