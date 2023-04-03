type SectionsType = {
  color: string;
  passwordStrength: string;
};
export const Sections = (props: SectionsType) => {
  const { color, passwordStrength } = props;
  const passwordEasyClass =
    color === "gray"
      ? "gray"
      : color === "red"
      ? "red"
      : passwordStrength === "easy"
      ? "red"
      : passwordStrength === "strong"
      ? "green"
      : passwordStrength === "medium"
      ? "yellow"
      : color;

  const passwordMediumClass =
    color === "gray"
      ? "gray"
      : color === "red"
      ? "red"
      : passwordStrength === "easy"
      ? "gray"
      : passwordStrength === "strong"
      ? "green"
      : passwordStrength === "medium"
      ? "yellow"
      : color;

  const passwordStrongClass =
    color === "gray"
      ? "gray"
      : color === "red"
      ? "red"
      : passwordStrength === "easy"
      ? "gray"
      : passwordStrength === "strong"
      ? "green"
      : passwordStrength === "medium"
      ? "gray"
      : color;

  return (
    <div className="mb-2">
      <div className={passwordEasyClass}>the password is easy</div>
      <div className={passwordMediumClass}>the password is medium</div>
      <div className={passwordStrongClass}>the password is strong</div>
    </div>
  );
};
