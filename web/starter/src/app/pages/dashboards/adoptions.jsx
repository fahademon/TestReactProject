import { Page } from "components/shared/Page";
import { AdoptionPage } from "components/Adoptions";

export default function Adoptions() {
  return (
    <Page title="Adoption Records">
      <div className="transition-content w-full px-(--margin-x) pt-5 lg:pt-6">
        <div className="min-w-0">
          <h2 className="truncate text-xl font-medium tracking-wide text-gray-800 dark:text-dark-50 pb-3">
            Your Adopted Cats
          </h2>
          <AdoptionPage></AdoptionPage>
        </div>
      </div>
    </Page>
  );
}
