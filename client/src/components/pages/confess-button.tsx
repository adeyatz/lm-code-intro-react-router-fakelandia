const ConfessButton: React.FC<{ enabled: boolean; postConfession(): void }> = ({
  enabled,
  postConfession,
}) => {
  return enabled ? (
    <button id="confess" type="submit" onClick={postConfession}>
      Confess
    </button>
  ) : (
    <button id="confess" type="submit" disabled>
      Confess
    </button>
  );
};

export default ConfessButton;
