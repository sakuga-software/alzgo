export default function CoreNavbarMenuMobileTrigger({
  onClick,
  isOpen,
}: {
  onClick: () => void;
  isOpen: boolean;
}) {
  return (
    <button
      className="laptop:hidden absolute flex flex-col gap-1 right-1 m-4"
      onClick={onClick}
    >
      <span
        className={`block w-6 h-0.5 bg-second_blue transition-transform ${
          isOpen ? "rotate-45 translate-y-1.5" : ""
        }`}
      />
      <span
        className={`block w-6 h-0.5 bg-second_blue transition-opacity ${
          isOpen ? "opacity-0" : ""
        }`}
      />
      <span
        className={`block w-6 h-0.5 bg-second_blue transition-transform ${
          isOpen ? "-rotate-45 -translate-y-1.5" : ""
        }`}
      />
    </button>
  );
}
