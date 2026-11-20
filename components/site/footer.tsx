import { company, footerLinks, products } from "@/lib/site-content"
import { Container } from "./primitives"

function Column({ title, links }: { title: string; links: { label: string; href: string; external?: boolean }[] }) {
  return (
    <div>
      <h3 className="text-[13px] font-semibold text-ink">{title}</h3>
      <ul className="mt-3 space-y-2">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-[13px] text-ink-2 transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-line">
      <Container className="py-12">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <div className="font-display text-base font-semibold text-ink">{company.name}</div>
            <p className="mt-2 text-[13px] text-ink-2">{company.tagline}</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-12">
            <Column title="Products" links={products.map((p) => ({ label: p.name, href: "#products" }))} />
            <Column title="Company" links={footerLinks.company} />
            <Column
              title="Contact"
              links={[
                { label: "WhatsApp", href: company.whatsappUrl, external: true },
                { label: "Email", href: `mailto:${company.email}` },
                { label: "Instagram", href: company.instagram, external: true },
              ]}
            />
          </div>
        </div>
        <p className="mt-12 text-xs text-ink-3">© {year} {company.name}</p>
      </Container>
    </footer>
  )
}
