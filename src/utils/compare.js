export default function compare(a, b) {
  const fieldName = 'order';
  return a[fieldName] - b[fieldName];
}
