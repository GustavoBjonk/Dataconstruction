import { Organization } from "@/data/donations";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface OrganizationCardProps {
  organization: Organization;
}

export function OrganizationCard({ organization }: OrganizationCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 transition-colors duration-150 hover:border-slate-300">
      <Badge variant="accent">{organization.category}</Badge>

      <h3 className="mt-4 text-lg font-semibold leading-snug text-slate-900">
        {organization.name}
      </h3>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
        {organization.description}
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button
          href={organization.officialSiteUrl}
          external
          variant="secondary"
          className="w-full"
        >
          Site oficial
        </Button>
        <Button href={organization.donationUrl} external variant="primary" className="w-full">
          Doar agora
        </Button>
      </div>
    </article>
  );
}
