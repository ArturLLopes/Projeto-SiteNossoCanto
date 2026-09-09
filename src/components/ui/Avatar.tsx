interface AvatarProps {
  src?: string;
  label?: string;
}

export function Avatar({
  src,
  label = "Foto de perfil reservada",
}: AvatarProps) {
  if (src) {
    return (
      <div className="relative aspect-square w-28 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-lg sm:w-36">
        <img src={src} alt={label} className="h-full w-full object-cover" />
      </div>
    );
  }

  return (
    <div
      className="placeholder-sheen flex aspect-square w-28 shrink-0 items-center justify-center rounded-full border-4 border-white text-center text-xs font-medium text-[#6f736c] shadow-lg sm:w-36"
      role="img"
      aria-label={label}
    >
      <span className="px-3">
        FOTO
        <br />
        PERFIL
      </span>
    </div>
  );
}
