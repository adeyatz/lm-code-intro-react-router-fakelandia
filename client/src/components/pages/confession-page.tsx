import ConfessButton from "./confess-button";
import ConfessionDetail from "./confession-detail";
import ConfessionReason from "./confession-reason";
import ConfessionSubject from "./confession-subject";

const ConfessionPage: React.FC = () => (
  <>
    <p>
      It's very difficult to catch people committing misdemeanours so
      <br /> we appreciate it when citizens confess to us directly
    </p>
    <p>
      However, if you're just having a hard day and need to vent then <br />
      you're welome to contact us here too. Up to you!
    </p>
    <form>
      <ConfessionSubject />
      <ConfessionReason />
      <ConfessionDetail />
      <ConfessButton />
    </form>
  </>
);

export default ConfessionPage;
