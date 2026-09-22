import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import PageHeader from "../components/ui/PageHeader";
import Icon from "../components/ui/Icon";
import { useFetch } from "../lib/useFetch";
import { api } from "../lib/api";
import { ApiListResponse, TeamMember } from "../types";
import { assetPath } from "../lib/assets";

const values = [
  { icon: "heart", title: "Inclusion", body: "Every child is welcome, whatever their background or circumstance." },
  { icon: "shield", title: "Dignity", body: "We treat every learner and family with respect, never charity as pity." },
  { icon: "users", title: "Community", body: "We work alongside parents, local leaders, and partners, not apart from them." },
  { icon: "sprout", title: "Growth", body: "We measure success in confidence and character, not only test scores." },
];

export default function About() {
  const { data } = useFetch(() => api.get<ApiListResponse<TeamMember>>("/team"), []);
  const team = data?.data || [];

  return (
    <>
      <PageHeader
        title="Built from two students and one teacher, into a home for hundreds."
        subtitle="The story of St. Billy's Community School, and the community that keeps it going."
      />

      <section className="py-16">
        <Container className="grid lg:grid-cols-[1fr_1.3fr] gap-12">
          <SectionHeading title="Our story" />
          <div className="flex flex-col gap-5 text-ink/75 leading-relaxed max-w-prose">
            <p>
              St. Billy's Community School was founded in 2008 in the Dandora slums of Nairobi, where most families
              live in extreme poverty and access to education is far from guaranteed. It began with just two
              students and one teacher meeting under difficult conditions, driven by a simple belief: every child,
              regardless of circumstance, deserves the chance to learn.
            </p>
            <p>
              Over the years that followed, the school grew into a full community education centre — welcoming
              children between the ages of 4 and 15 with diverse learning needs, from every socio-economic,
              cultural, and religious background. Today it serves as both a classroom and a safety net, offering
              basic education alongside a daily feeding programme, community outreach, and support for the
              rehabilitation of vulnerable children and youth.
            </p>
            <p>
              Kenya's constitution guarantees every child the right to education. St. Billy's exists to make that
              right real for children who might otherwise be left out — orphaned, underprivileged, and disadvantaged
              learners — nurturing them into well-behaved, hardworking, and productive members of their community. The
              school is registered with the relevant government authorities and works closely with local
              organisations, well-wishers, and government partners to reach as many children as possible.
            </p>
          </div>
        </Container>
        <Container className="mt-12">
          <img
            src={assetPath("images/school-community.jpg")}
            alt="Children and community members learning together"
            className="w-full h-64 sm:h-80 object-cover rounded-[2rem] border-4 border-paper shadow-card"
            loading="lazy"
          />
        </Container>
      </section>

      <section className="py-16 bg-forest-50/50 border-y border-line">
        <Container>
          <SectionHeading title="What guides us" align="center" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {values.map((v) => (
              <div key={v.title} className="text-center flex flex-col items-center gap-3 px-2">
                <div className="w-14 h-14 rounded-full bg-forest-700 text-paper flex items-center justify-center">
                  <Icon name={v.icon} className="w-7 h-7" />
                </div>
                <h3 className="font-semibold text-forest-900">{v.title}</h3>
                <p className="text-sm text-ink/65 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {team.length > 0 && (
        <section className="py-16">
          <Container>
            <SectionHeading
              title="The people behind the school"
              subtitle="Staff, coordinators, and a volunteer board keeping the school running day to day."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {team.map((member) => (
                <div key={member._id} className="border border-line rounded-lg p-5 bg-paper">
                  <div className="w-16 h-16 rounded-full bg-forest-100 text-forest-700 flex items-center justify-center font-display text-xl font-semibold mb-4">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="font-semibold text-forest-900">{member.name}</h3>
                  <p className="text-sm text-marigold-700 mb-2">{member.role}</p>
                  {member.bio && <p className="text-sm text-ink/65 leading-relaxed">{member.bio}</p>}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
