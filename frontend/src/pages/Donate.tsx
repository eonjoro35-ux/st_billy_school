import Container from "../components/ui/Container";
import PageHeader from "../components/ui/PageHeader";
import Icon from "../components/ui/Icon";

const uses = [
  { icon: "utensils", title: "Daily meals", body: "Keeps our feeding programme running for every learner, every school day." },
  { icon: "book-open", title: "Learning materials", body: "Books, uniforms, and supplies for children who couldn't otherwise afford them." },
  { icon: "home", title: "Facilities", body: "Maintaining and expanding classrooms as more children join the school." },
  { icon: "users", title: "Teacher support", body: "Fair pay and training for the teachers who show up for our children every day." },
];

export default function Donate() {
  return (
    <>
      <PageHeader
        title="Your support keeps the doors open."
        subtitle="St. Billy's runs entirely on community support, partner organisations, and well-wishers like you."
      />

      <section className="py-16">
        <Container className="grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <h2 className="text-2xl font-semibold text-forest-900 mb-6">Where your gift goes</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {uses.map((u) => (
                <div key={u.title} className="flex gap-4">
                  <div className="w-11 h-11 rounded-full bg-forest-700 text-paper flex items-center justify-center shrink-0">
                    <Icon name={u.icon} className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest-900 mb-1">{u.title}</h3>
                    <p className="text-sm text-ink/65 leading-relaxed">{u.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-forest-800 rounded-2xl p-8 sm:p-10">
            <h2 className="text-xl font-semibold text-paper mb-4">Ways to give</h2>
            <ul className="flex flex-col gap-4 text-paper/80 text-sm leading-relaxed">
              <li>
                <span className="font-semibold text-paper">M-Pesa Paybill:</span> Till/Paybill number to be added.
              </li>
              <li>
                <span className="font-semibold text-paper">Bank transfer:</span> Account details to be added.
              </li>
              <li>
                <span className="font-semibold text-paper">In-kind donations:</span> Uniforms, books, and food
                supplies — contact us to arrange drop-off.
              </li>
            </ul>
            <p className="text-xs text-paper/40 mt-6">
              Payment details are placeholders — add the school's real giving channels here before launch.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
