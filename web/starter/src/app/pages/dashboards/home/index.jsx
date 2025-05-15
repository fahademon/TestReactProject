import { Page } from "components/shared/Page";
import { BreedListPage } from "components/BreedsList"

export default function Home() {
  return (
    <Page title="Homepage">
      <div className="transition-content w-full px-(--margin-x) pt-5 lg:pt-6">
        <div className="min-w-0">
          <h2 className="truncate text-xl font-medium tracking-wide text-gray-800 dark:text-dark-50 pb-3">
            Cats For Adoption
          </h2>
          <BreedListPage></BreedListPage>
        </div>
      </div>
    </Page>
  );
}
