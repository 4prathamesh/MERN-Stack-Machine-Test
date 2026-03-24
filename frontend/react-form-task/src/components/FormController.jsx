import { useFormContext } from "react-hook-form";

const FormController = ({ label, name, type, options = [], ...rest }) => {
  const { register, formState: { errors } } = useFormContext();

  const renderField = () => {
    switch (type) {
      case "select":
        return (
          <select {...register(name)} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option value="">Select...</option>
            {options.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        );

      case "checkbox":
        return <input type="checkbox" {...register(name)} className="w-4 h-4" />;

      default:
        return (
          <input
            type={type}
            {...register(name, { valueAsNumber: type === "number" })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...rest}
          />
        );
    }
  };

  return (
    <div className="mb-5">
      {type !== "checkbox" && label && (
        <label className="block mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <div className="flex items-center gap-2">
        {renderField()}
        {type === "checkbox" && label && (
          <label className="text-sm text-gray-700">{label}</label>
        )}
      </div>

      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default FormController;