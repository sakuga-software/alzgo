import { cn } from '../../../../../utils/cn';

function CoreNavbarMenuMobileTrigger({ onClick, isOpen }: { onClick: () => void; isOpen: boolean }) {
  return (
    <button className="absolute right-1 m-4 flex flex-col gap-1 laptop:hidden" onClick={onClick} type="button">
      <span
        className={cn(`block h-0.5 w-6 bg-second_blue transition-transform`, isOpen && 'translate-y-1.5 rotate-45')}
      />
      <span className={cn(`block h-0.5 w-6 bg-second_blue transition-opacity`, isOpen && 'opacity-0')} />
      <span
        className={cn(`block h-0.5 w-6 bg-second_blue transition-transform`, isOpen && '-translate-y-1.5 -rotate-45')}
      />
    </button>
  );
}

export default CoreNavbarMenuMobileTrigger;
