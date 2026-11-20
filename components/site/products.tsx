"use client"

import { ArrowRight } from "lucide-react"
import { company, products, productsSection, type Product } from "@/lib/site-content"
import { cn } from "@/lib/utils"
import { buttonStyles, Container, CountUp, Reveal, SectionIntro, selectProduct, useInView } from "./primitives"

function PhoneScreen({ product, start }: { product: Product; start: boolean }) {
  const { screen } = product
  return (
    <div
      className={cn(
        "mx-auto w-[15rem] rounded-t-[1.6rem] border border-b-0 border-line-strong bg-white p-1.5 pb-0 shadow-[0_-4px_40px_rgba(0,0,0,0.06)] transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1.5 sm:w-[16rem]",
        start ? "translate-y-0" : "translate-y-16",
      )}
    >
      <div className="rounded-t-[1.25rem] border border-b-0 border-line bg-paper-2 px-4 pb-4 pt-4">
        <div className="flex items-center justify-between">
          <span className="text-[13px] font-semibold text-ink">{product.appLabel}</span>
          <span className="h-2 w-2 rounded-full" style={{ background: product.dot }} />
        </div>
        <div className="mt-3 text-[11px] text-ink-2">{screen.headline.label}</div>
        <div className="font-display text-[1.65rem] font-semibold leading-tight tracking-tight text-ink tabular-nums">
          {screen.headline.prefix}
          <CountUp value={screen.headline.value} start={start} />
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {screen.tiles.map((tile) => (
            <div key={tile.label} className="rounded-lg border border-line bg-white px-2.5 py-2">
              <div className="text-[10px] text-ink-2">{tile.label}</div>
              <div className="text-[13px] font-semibold text-ink">{tile.value}</div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex justify-between border-t border-line pt-2.5 text-[11px] text-ink-2">
          <span>{screen.row.left}</span>
          <span>{screen.row.right}</span>
        </div>
      </div>
    </div>
  )
}

function ProductCard({ product, delay }: { product: Product; delay: number }) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.35 })
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white">
        <div
          ref={ref}
          className="relative flex h-52 items-end overflow-hidden border-b border-line bg-[radial-gradient(ellipse_at_50%_100%,#fbfbf8_0%,#efefea_75%)] sm:h-56"
        >
          <span className="absolute right-3 top-3 z-10 hidden text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-3 sm:block">
            Demo data
          </span>
          <div className="w-full">
            <PhoneScreen product={product} start={inView} />
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-[1.4rem]">{product.name}</h3>
            <span className="rounded-full border border-line px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-ink-2">
              {product.audience}
            </span>
          </div>
          <p className="mb-5 mt-3 text-sm leading-6 text-ink-2">{product.body}</p>
          <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-4">
            <span className="text-[13px] text-ink-2">
              {product.priceFrom ? (
                <>
                  From <strong className="font-semibold text-ink">Rs {product.priceFrom}</strong>/month
                </>
              ) : (
                "Pricing on request"
              )}
            </span>
            <a href="#demo" onClick={() => selectProduct(product.id)} className={cn(buttonStyles.signal, "px-4 py-2.5 text-[13px]")}>
              Book a demo
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export function Products() {
  const { inDevelopment, suggest } = productsSection
  return (
    <section id="products" className="py-16 sm:py-24">
      <Container>
        <SectionIntro eyebrow={productsSection.eyebrow} title={productsSection.title} body={productsSection.body} />

        <div className="mt-12 grid gap-3 md:grid-cols-2">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} delay={i * 120} />
          ))}
        </div>

        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {inDevelopment.map((item, i) => (
            <Reveal
              key={item.title + i}
              delay={i * 100}
              className={cn(inDevelopment.length === 1 && "md:col-span-2")}
            >
              <div className="h-full rounded-2xl border border-dashed border-line-strong p-5">
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-3">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink-3 opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ink-3" />
                  </span>
                  In development
                </div>
                <div className="mt-3 text-base font-semibold text-ink">{item.title}</div>
                <p className="mt-1 text-[13px] text-ink-2">{item.body}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={200}>
            <a
              href={company.suggestBusinessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full rounded-2xl border border-line bg-white p-5 transition-shadow hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
            >
              <div className="text-base font-semibold text-ink">{suggest.title}</div>
              <p className="mt-1 text-[13px] leading-5 text-ink-2">{suggest.body}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink">
                {suggest.cta}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
