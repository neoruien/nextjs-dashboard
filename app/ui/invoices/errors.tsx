import { Errors } from "@/app/lib/actions";

export default function ErrorMessages({
  errors,
  id,
}: {
  errors: Errors | undefined;
  id: keyof Errors;
}) {
  const errMsg: string[] = !errors ? [] : (errors[id] ?? []);
  return (
    <div id={`${id}-error`} aria-live="polite" aria-atomic="true">
      {errMsg.map((error) => (
        <p className="mt-2 text-sm text-red-500" key={error}>
          {error}
        </p>
      ))}
    </div>
  );
}
