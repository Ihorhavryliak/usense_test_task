type FieldType = {
  onChangeField: (e: string) => void;
};
export const Field = (props: FieldType) => {
  const { onChangeField } = props;
  return (
    <>
      <input type="text" onChange={(e) => onChangeField(e.target.value)} />
    </>
  );
};
