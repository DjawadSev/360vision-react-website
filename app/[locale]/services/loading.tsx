import { ServicesPageSkeleton } from "@/components/ui/page-skeletons";

export default function Loading() {
  return (
    <div role="status" aria-live="polite" aria-busy="true">
      <span className="sr-only">Loading</span>
      <ServicesPageSkeleton />
    </div>
  );
}
