interface detailProps {
  detail: string;
  setDetail(detail: string): void;
}

const ConfessionDetail: React.FC<detailProps> = ({ detail, setDetail }) => {
  return (
    <label>
      details
      <textarea
        id="details"
        cols={40}
        rows={5}
        style={{ resize: "none" }}
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
      />
    </label>
  );
};

export default ConfessionDetail;
