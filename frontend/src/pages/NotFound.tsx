import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container className="text-center flex flex-col items-center gap-5">
        <span className="font-display text-7xl font-semibold text-forest-200">404</span>
        <h1 className="text-2xl font-semibold text-forest-900">This page doesn't exist.</h1>
        <p className="text-ink/65 max-w-sm">
          The page you're looking for may have moved or been removed. Let's get you back on track.
        </p>
        <Button to="/">Back to home</Button>
      </Container>
    </section>
  );
}
