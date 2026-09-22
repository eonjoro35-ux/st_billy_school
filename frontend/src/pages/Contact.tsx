import Container from "../components/ui/Container";
import PageHeader from "../components/ui/PageHeader";
import ContactForm from "../components/contact/ContactForm";
import Icon from "../components/ui/Icon";
import { assetPath } from "../lib/assets";

export default function Contact() {
  return (
    <>
      <PageHeader title="We'd love to hear from you." subtitle="Questions, partnerships, volunteering — reach out any time." />

      <section className="py-16">
        <Container className="grid lg:grid-cols-[1fr_1.3fr] gap-14">
          <div className="flex flex-col gap-6">
            <ContactRow icon="home" label="Location" value="Dandora, Nairobi, Kenya" />
            <ContactRow icon="heart" label="Email" value="stbilleducationalcentre@gmail.com" href="mailto:stbilleducationalcentre@gmail.com" />
            <ContactRow icon="users" label="Phone" value="+254 729 974 353" href="tel:+254729974353" />

            <div className="mt-4 rounded-lg overflow-hidden border border-line h-56 relative">
              <img src={assetPath("images/school-community.jpg")} alt="The St. Bill school community in Dandora" className="w-full h-full object-cover" />
              <span className="absolute bottom-3 left-3 rounded-full bg-forest-900/85 text-paper px-3 py-1.5 text-xs font-medium">
                Dandora, Nairobi, Kenya
              </span>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactRow({ icon, label, value, href }: { icon: string; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-center gap-4">
      <div className="w-11 h-11 rounded-full bg-forest-700 text-paper flex items-center justify-center shrink-0">
        <Icon name={icon} className="w-5 h-5" />
      </div>
      <div>
        <p className="text-xs text-ink/50">{label}</p>
        <p className="font-medium text-forest-900">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="hover:opacity-80 transition-opacity">
      {content}
    </a>
  ) : (
    content
  );
}
