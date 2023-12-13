const ConfessButton: React.FC<{ enabled: boolean }> = ({ enabled }) => {
  return enabled ? (
    <button id="confess">Confess</button>
  ) : (
    <button id="confess" disabled>
      Confess
    </button>
  );
};

export default ConfessButton;
