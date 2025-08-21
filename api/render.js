export default async function handler(req, res) {
  const svg =
`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1100" viewBox="0 0 800 1100">
  <rect width="100%" height="100%" fill="#FAFAF7"/>
  <g fill="none" stroke="#0B2B4A" stroke-width="2">
    <ellipse cx="400" cy="130" rx="50" ry="70"/>
    <path d="M380,200 C 340,300 340,450 380,600 L420,600 C460,450 460,300 420,200 Z"/>
  </g>
</svg>`;

  const png = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFfQJbYqH+VwAAAABJRU5ErkJggg==";

  res.status(200).json({
    svg,
    png,
    meta: { units: "cm", scale_px_per_cm: 3.0, pose: "POSE01" }
  });
}
