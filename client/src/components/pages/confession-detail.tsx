interface detailProps {
  detail: string;
  setDetail(detail: string): void;
  setDetailValidity(isValid: boolean): void;
}

const ConfessionDetail: React.FC<detailProps> = ({
  detail,
  setDetail,
  setDetailValidity,
}) => {
  const isValid = validateConfessionDetail(detail);
  setDetailValidity(isValid);
  const borderColour = isValid ? "black" : "red";

  return (
    <label>
      Detail
      <textarea
        id="details"
        cols={40}
        rows={5}
        style={{ resize: "none", borderColor: borderColour }}
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
      />
    </label>
  );
};

const validateConfessionDetail = (detail: string): boolean => {
  return !(detail.trim().length < 30);
};
export default ConfessionDetail;
