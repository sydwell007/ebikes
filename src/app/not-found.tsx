import PageHero from "@/components/marketing/PageHero";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <PageHero
      eyebrow="Page not found"
      title="We couldn't find that page"
      intro="The page you're looking for may have moved. Try the product showcase, or head back home."
      actions={
        <>
          <ButtonLink href="/" variant="primary">
            Back Home
          </ButtonLink>
          <ButtonLink href="/product">Explore the E-Bike</ButtonLink>
        </>
      }
    />
  );
}
