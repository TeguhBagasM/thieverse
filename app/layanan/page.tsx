import { Metadata } from "next";
import InsightRoll from "@/components/insight-roll";
import { FaWhatsapp, FaCode, FaUsers, FaGlobe, FaRegNewspaper } from "react-icons/fa";
import { ButtonLink } from "@/components/ui-kit/button-link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Laravel tutoring for beginners to intermediate learners: personal mentoring, group classes, and guidance on real projects.",
  alternates: { canonical: "/layanan" },
};

const insights: string[] = [
  "Laravel tutoring from basics to deployment",
  "Learn CRUD, Auth, and Laravel APIs",
  "Guidance on university or freelance projects",
  "Practical materials: Laravel 11, Filament, and MySQL",
  "Relaxed mentoring with a clear direction",
];

const whatsappNumber = "+6281321821374";

const createWhatsAppURL = (serviceName: string, price: string) => {
  const message = `Hi! I am interested in joining *${serviceName}* (${price}) to learn Laravel. Could we talk first?`;
  return `https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(message)}`;
};

const createConsultationURL = () => {
  const message =
    "Hi! I would like a free consultation about Laravel tutoring (materials, schedule, and learning needs).";
  return `https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(message)}`;
};

const serviceCards = [
  {
    icon: <FaCode className="h-8 w-8 text-primary" />,
    title: "Private Laravel Tutoring",
    description: "One-on-one mentoring to build a solid Laravel foundation until you understand how a project fits together",
    price: "From Rp 75,000/session",
    features: [
      "A learning roadmap matched to your level",
      "Routing, migrations, controllers, and Blade",
      "Instant feedback while you code",
    ],
  },
  {
    icon: <FaUsers className="h-8 w-8 text-primary" />,
    title: "Laravel Group Class",
    description: "Learn alongside friends in a small group with structured project practice",
    price: "From Rp 40,000/person",
    features: [
      "Small groups keep discussion focused",
      "Practice case studies in CRUD and authentication",
      "Recordings and class notes for every session",
    ],
  },
  {
    icon: <FaGlobe className="h-8 w-8 text-primary" />,
    title: "Laravel Project Support",
    description: "Suited to final projects, portfolios, or client work built on Laravel",
    price: "From Rp 120,000/meeting",
    features: [
      "Review of project architecture and database",
      "Help with debugging errors and optimizing queries",
      "Guidance on deploying to hosting or a VPS",
    ],
  },
];

const laravelAdvantages = [
  {
    title: "Learn from Real Cases",
    description:
      "Lessons go beyond theory. You practice building features commonly used in real Laravel projects.",
  },
  {
    title: "Flexible Curriculum",
    description:
      "Start from zero or jump straight to advanced topics such as APIs, queues, or Filament, based on your needs.",
  },
  {
    title: "Step-by-Step Approach",
    description:
      "Each session is structured so you understand the reasoning behind the code, not just copy and paste it.",
  },
  {
    title: "Support After Sessions",
    description:
      "You can keep asking questions over chat about minor blockers after the class ends.",
  },
  {
    title: "Ready for the Workplace",
    description:
      "Practice standard workflows, from Git and project structure to the debugging techniques development teams use.",
  },
  {
    title: "Clear Outcomes",
    description:
      "Every package has measurable results, such as a finished CRUD app, a working API, or a successfully deployed project.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <InsightRoll insights={insights} />

      <section className="container flex flex-col items-center">
        <div className="relative flex w-full flex-col items-center justify-center py-16 sm:py-20">
          <h1 className="mb-4 inline-block text-center text-4xl font-semibold md:text-5xl">
            Services
          </h1>
          <p className="max-w-3xl text-center text-base text-muted-foreground sm:text-lg md:text-xl">
            Structured sessions, hands-on practice, and project guidance to help you master Laravel
            and finish your project.
          </p>
        </div>

        <div className="mb-16 grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((service, index) => (
            <div
              key={index}
              className="rounded-lg border border-line bg-surface p-6 transition-colors duration-150 hover:border-foreground/30"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-accent-soft">
                {service.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <div className="mb-4 text-lg font-bold text-primary">{service.price}</div>
              <ul className="mb-6 space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <span className="mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <ButtonLink
                href={createWhatsAppURL(service.title, service.price)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                Choose Service
              </ButtonLink>
            </div>
          ))}
        </div>

        <div className="mb-16 w-full rounded-lg bg-accent-soft p-8 sm:p-12">
          <h2 className="mb-6 text-center text-2xl font-bold text-foreground sm:text-3xl">
            Why Learn Laravel Here?
          </h2>
          <div className="mb-6 text-center">
            <span className="inline-block rounded-full bg-surface px-4 py-2 text-sm font-medium text-foreground">
              ✨ Focused on Laravel, No Mixed-Up Materials
            </span>
          </div>
          <p className="mb-8 text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
            Lessons are designed around your needs, from the basics of Laravel syntax to building
            complete end-to-end applications with best practices.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <ButtonLink
              href={createConsultationURL()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="mr-2" />
              Free Consultation
            </ButtonLink>
            <ButtonLink href="/projects" variant="secondary" size="lg" className="w-full sm:w-fit">
              <FaRegNewspaper className="mr-2 h-6 w-6" />
              View My Projects
            </ButtonLink>
          </div>
        </div>

        <div className="w-full">
          <h2 className="mb-12 text-center text-2xl font-bold text-foreground sm:text-3xl">
            What Sets Laravel Tutoring Here Apart
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {laravelAdvantages.map((feature, index) => (
              <div
                key={index}
                className="rounded-lg border border-line bg-surface p-6 transition-colors duration-150 hover:border-foreground/30"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent-soft">
                    <span className="text-xl font-bold text-primary">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full py-16 text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
            Ready to Level Up in Laravel?
          </h2>
          <p className="mb-8 text-base text-muted-foreground sm:text-lg">
            Tell me your learning goals, and I will help you build the Laravel learning path that fits best.
          </p>
          <ButtonLink
            href={createConsultationURL()}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
          >
            <FaWhatsapp className="mr-2 text-xl" />
            Chat on WhatsApp
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
