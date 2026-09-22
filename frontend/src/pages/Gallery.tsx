import Container from "../components/ui/Container";
import PageHeader from "../components/ui/PageHeader";
import GalleryGrid from "../components/gallery/GalleryGrid";

export default function Gallery() {
  return (
    <>
      <PageHeader title="Life at St. Billy's" subtitle="A look at our classrooms, campus, and community — in pictures." />
      <section className="py-16">
        <Container>
          <GalleryGrid />
        </Container>
      </section>
    </>
  );
}
