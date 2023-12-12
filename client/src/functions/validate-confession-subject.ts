export default function validateConfessionSubject(subject: string): boolean {
  return !(subject.length < 5 || subject.match(/[^a-zA-Z0-9]/));
}
