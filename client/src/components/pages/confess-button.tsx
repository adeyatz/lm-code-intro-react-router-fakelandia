const ConfessButton: React.FC<{ enabled: boolean }> = ({ enabled }) => {
  return enabled ? (
    <button id="confess" type="submit">
      Confess
    </button>
  ) : (
    <button id="confess" type="submit" disabled>
      Confess
    </button>
  );
};

export default ConfessButton;
