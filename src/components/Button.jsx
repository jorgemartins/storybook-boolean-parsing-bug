export default function Button({ disabled }) {
  console.log("parsed disabled = ", disabled, "is of type ", typeof disabled);
  return (
    <button disabled={disabled}>{disabled ? "disabled" : "enabled"}</button>
  );
}
