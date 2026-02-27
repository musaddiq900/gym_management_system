export default function FeatureSection({
  features,
  toggleFeature,
}: any) {
  return (
    <div>
      <h2 className="font-semibold mb-3">
        Feature Control Panel
      </h2>

      <div className="grid grid-cols-2 gap-3">

        {Object.keys(features).map((key) => (
          <label key={key} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={features[key]}
              onChange={() => toggleFeature(key)}
            />
            {key}
          </label>
        ))}

      </div>
    </div>
  )
}