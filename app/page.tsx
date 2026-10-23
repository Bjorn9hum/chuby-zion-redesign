import Image from "next/image";
import ThemeToggle from "./theme-toggle";

const products = [
  { name: "Chuby-Zion Collection 01", category: "WHISKEY & SPIRITS", image: "/images/chubyzion-product-0.jpg" },
  { name: "Chuby-Zion Collection 02", category: "SIGNATURE SELECTION", image: "/images/chubyzion-product-1.jpg" },
  { name: "Chuby-Zion Collection 03", category: "BOTANICAL SPIRITS", image: "/images/chubyzion-product-2.jpg" },
  { name: "Chuby-Zion Collection 04", category: "OUR RANGE", image: "/images/chubyzion-product-3.jpg" },
  { name: "Chuby-Zion Collection 05", category: "SIGNATURE SELECTION", image: "/images/chubyzion-product-4.jpg" },
  { name: "Chuby-Zion Collection 06", category: "WHISKEY & SPIRITS", image: "/images/chubyzion-product-5.jpg" },
  { name: "Chuby-Zion Collection 07", category: "OUR RANGE", image: "/images/chubyzion-product-6.jpg" },
  { name: "Chuby-Zion Collection 08", category: "BOTANICAL SPIRITS", image: "/images/chubyzion-product-7.jpg" },
  { name: "Chuby-Zion Collection 09", category: "SIGNATURE SELECTION", image: "/images/chubyzion-product-8.jpg" },
  { name: "Chuby-Zion Collection 10", category: "WHISKEY & SPIRITS", image: "/images/chubyzion-product-9.jpg" },
  { name: "Chuby-Zion Collection 11", category: "OUR RANGE", image: "/images/chubyzion-product-10.jpg" },
  { name: "Chuby-Zion Collection 12", category: "BOTANICAL SPIRITS", image: "/images/chubyzion-product-11.jpg" },
  { name: "Chuby-Zion Collection 13", category: "SIGNATURE SELECTION", image: "/images/chubyzion-product-12.jpg" },
];

const gallery = [
  { image: "/images/chubyzion-splash-1.jpg", alt: "Chuby-Zion brand photography" },
  { image: "/images/chubyzion-splash-3.jpg", alt: "Chuby-Zion spirits collection" },
  { image: "/images/chubyzion-splash-6.jpg", alt: "Chuby-Zion product presentation" },
  { image: "/images/chubyzion-splash-8.jpg", alt: "Chuby-Zion brand atmosphere" },
  { image: "/images/chubyzion-splash-13.jpg", alt: "Chuby-Zion spirits imagery" },
  { image: "/images/chubyzion-splash-19.jpg", alt: "Chuby-Zion collection photography" },
  { image: "/images/chubyzion-splash-22.jpg", alt: "Chuby-Zion featured spirits" },
];

const orderUrl = "https://chubyzion.com.ng/chuby-zion-industries-place-order.html";
const aboutUrl = "https://chubyzion.com.ng/chuby-zion-industries-about-us.html";
const contactUrl = "https://chubyzion.com.ng/chuby-zion-industries-contact-us.html";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-[#8C9B86]">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#F2EEE4] text-[#292D27]">
      <div className="bg-[#173D30] px-4 py-2.5 text-center text-[9px] font-semibold uppercase tracking-[0.2em] text-[#f6eaf1] sm:text-[10px]">
        Chuby-Zion Industry Nigerian Limited <span className="mx-2 text-[#C6A66A]">✦</span> Established 2011
      </div>

      <header className="z-40 border-b border-[#173D30]/10">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-14">
          <a href="#home" aria-label="Chuby-Zion home" className="shrink-0">
            <Image
              src="/images/chuby-zion-industry-logo.png"
              alt="Chuby-Zion Industry Nigerian Limited logo"
              width={180}
              height={90}
              priority
              className="h-auto w-[105px] sm:w-[140px] lg:w-[160px]"
            />
          </a>

          <nav aria-label="Main navigation" className="flex items-center gap-3 sm:gap-6 lg:gap-9">
            <a href="#home" className="text-[9px] font-semibold uppercase tracking-[0.1em] hover:text-[#8C9B86] sm:text-[10px]">Welcome</a>
            <a href="#about" className="text-[9px] font-semibold uppercase tracking-[0.1em] hover:text-[#8C9B86] sm:text-[10px]">About Us</a>
            <a href="#products" className="text-[9px] font-semibold uppercase tracking-[0.05em] hover:text-[#8C9B86] sm:text-[10px] sm:tracking-[0.1em]">Our Products</a>
            <a href="#contact" className="text-[9px] font-semibold uppercase tracking-[0.05em] hover:text-[#8C9B86] sm:text-[10px] sm:tracking-[0.1em]">Contact</a>
          </nav>

          <ThemeToggle />

          <a href={orderUrl} className="shrink-0 bg-[#173D30] px-3 py-3 text-[8px] font-bold uppercase tracking-[0.1em] text-white transition hover:bg-[#245744] sm:px-5 sm:text-[10px]">
            Place an order <span className="ml-1">↗</span>
          </a>
        </div>
      </header>

      <section id="home" className="relative">
        <div className="mx-auto grid max-w-[1440px] lg:min-h-[680px] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-center px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <Eyebrow>Nigerian heritage · Since 2011</Eyebrow>
            <h1 className="max-w-[650px] font-serif text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.91] tracking-[-0.065em]">
              A spirit
              <br />
              of its <span className="italic text-[#8C9B86]">own.</span>
            </h1>
            <div className="mt-7 h-px w-16 bg-[#8C9B86]" />
            <p className="mt-6 max-w-md text-sm leading-7 text-[#68746A] sm:text-base">
              A Nigerian family-owned spirits company with a proud story, a distinctive identity, and a commitment to its place in the industry.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#products" className="bg-[#173D30] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:bg-[#245744]">
                Explore our range <span className="ml-3">↗</span>
              </a>
              <a href={aboutUrl} className="border-b border-[#8C9B86] pb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#173D30] hover:text-[#8C9B86]">
                Our story
              </a>
            </div>
            <div className="mt-14 grid max-w-md grid-cols-2 border-t border-[#173D30]/15 pt-5">
              <div>
                <p className="font-serif text-3xl text-[#173D30]">2011</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-[#68746A]">Year established</p>
              </div>
              <div className="border-l border-[#173D30]/15 pl-6">
                <p className="font-serif text-3xl text-[#173D30]">Nigeria</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-[#68746A]">Our home</p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden bg-[#E4E8DC] sm:min-h-[560px] lg:min-h-full">
            <Image
              src="/images/chubyzion-splash-20.jpg"
              alt="Featured Chuby-Zion spirits brand image"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#21121f]/45 via-transparent to-[#173D30]/5" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white sm:bottom-10 sm:left-10 sm:right-10">
              <div>
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/80">Our identity</p>
                <p className="mt-2 font-serif text-3xl sm:text-4xl">Rooted in Nigeria.</p>
              </div>
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/70 text-xl">↗</span>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#173D30] px-5 py-5 text-[#F2EEE4]">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center text-[9px] font-semibold uppercase tracking-[0.2em] sm:justify-between sm:text-[10px]">
          <span>Family-owned roots</span><span className="text-[#C6A66A]">✦</span>
          <span>Established 2011</span><span className="text-[#C6A66A]">✦</span>
          <span>Nigerian heritage</span><span className="text-[#C6A66A]">✦</span>
          <span>Whiskey &amp; herbal liquor</span>
        </div>
      </div>

      <section id="about" className="scroll-mt-24 px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-24">
          <div className="relative mx-auto w-full max-w-[440px]">
            <div className="absolute -left-3 -top-3 h-full w-full border border-[#8C9B86]/40 sm:-left-5 sm:-top-5" />
            <div className="relative aspect-[4/5] overflow-hidden bg-[#E4E8DC]">
              <Image
                src="/images/chubyzion-splash-8.jpg"
                alt="Chuby-Zion brand and product imagery"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover transition duration-700 hover:scale-[1.03]"
              />
            </div>
            <div className="absolute -bottom-5 right-0 bg-[#173D30] px-5 py-4 text-white sm:-right-5 sm:px-7">
              <p className="font-serif text-3xl">Since 2011</p>
              <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-[#E4E8DC]">A Nigerian story</p>
            </div>
          </div>

          <div className="pt-4 lg:pt-0">
            <Eyebrow>Our story · Our roots</Eyebrow>
            <h2 className="max-w-xl font-serif text-4xl leading-[1.08] tracking-[-0.04em] sm:text-6xl">
              Built on heritage.
              <br />
              <span className="italic text-[#8C9B86]">Looking forward.</span>
            </h2>
            <div className="mt-7 h-px w-14 bg-[#8C9B86]" />
            <p className="mt-7 max-w-xl text-sm leading-8 text-[#68746A] sm:text-base">
              Chuby-Zion Industry Nigerian Limited is an indigenous, family-owned company established in 2011. With roots in Ogun State, Nigeria, the company has built its identity around its Nigerian heritage and its presence in the spirits industry.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-8 text-[#68746A] sm:text-base">
              Discover the company, explore its range, and get in touch with the team for enquiries and orders.
            </p>
            <a href={aboutUrl} className="mt-8 inline-flex items-center gap-4 border-b border-[#8C9B86] pb-3 text-[10px] font-bold uppercase tracking-[0.17em] text-[#173D30] transition hover:text-[#8C9B86]">
              More about Chuby-Zion <span className="text-lg">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section id="products" className="scroll-mt-24 bg-[#eee5eb] px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <Eyebrow>Discover the collection</Eyebrow>
              <h2 className="font-serif text-4xl tracking-[-0.045em] sm:text-6xl">Explore our range.</h2>
            </div>
            <a href={orderUrl} className="inline-flex w-fit items-center gap-3 border-b border-[#8C9B86] pb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#173D30] hover:text-[#8C9B86]">
              Enquire about an order <span className="text-lg">↗</span>
            </a>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-7 text-[#68746A]">
            Explore product photography from the Chuby-Zion collection. Contact the company directly for product information, availability, and orders.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product, index) => (
              <article key={product.image} className="group min-w-0">
                <a href={orderUrl} aria-label={`Enquire about ${product.name}`} className="block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#f8f4f5]">
                    <Image
                      src={product.image}
                      alt={`Chuby-Zion product image ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 48vw, (max-width: 1024px) 31vw, 24vw"
                      className="object-cover transition duration-700 ease-out group-hover:scale-[1.045]"
                    />
                    <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#F2EEE4]/90 font-serif text-xs text-[#173D30] sm:left-4 sm:top-4 sm:h-9 sm:w-9">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#173D30] text-lg text-white transition group-hover:bg-[#245744] sm:bottom-4 sm:right-4">
                      ↗
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-2 py-4">
                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#8C9B86] sm:text-[9px]">{product.category}</p>
                      <h3 className="mt-2 font-serif text-base leading-tight sm:text-xl">{product.name}</h3>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
          <p className="mt-5 text-[10px] leading-6 text-[#68746A]">
            For accurate product names and current availability, please confirm directly with Chuby-Zion Industry.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <Eyebrow>More than a bottle</Eyebrow>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-6xl">
                A closer look
                <br />
                <span className="italic text-[#8C9B86]">at our world.</span>
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-8 text-[#68746A]">
              Explore more of the imagery behind the Chuby-Zion name, from product highlights to the visual identity of the brand.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
            {gallery.map((item, index) => (
              <div key={item.image} className={`group relative overflow-hidden bg-[#E4E8DC] ${index === 0 || index === 5 ? "aspect-[4/5]" : "aspect-[4/5] sm:mt-8"}`}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 48vw, 32vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#21121f]/40 via-transparent to-transparent opacity-70 transition group-hover:opacity-100" />
                <span className="absolute bottom-4 left-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-white sm:bottom-6 sm:left-6">
                  Chuby-Zion · {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#173D30] text-[#F2EEE4]">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[1fr_1fr]">
          <div className="flex flex-col justify-center px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <Eyebrow>Our Nigerian story</Eyebrow>
            <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-6xl">
              Proud of our
              <br />
              <span className="italic text-[#C6A66A]">roots.</span>
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-8 text-white/70">
              From our base in Ogun State to our wider connections, Chuby-Zion Industry continues to build its story as a Nigerian spirits company.
            </p>
            <a href={contactUrl} className="mt-8 inline-flex w-fit items-center gap-4 border-b border-[#C6A66A] pb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white hover:text-[#E4E8DC]">
              Connect with our team <span className="text-lg">↗</span>
            </a>
          </div>
          <div className="relative min-h-[400px] bg-[#245744] sm:min-h-[540px]">
            <Image
              src="/images/chubyzion-splash-22.jpg"
              alt="Chuby-Zion spirits brand photography"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#173D30]/10" />
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-20">
          <div className="relative mx-auto w-full max-w-[360px]">
            <div className="absolute -right-3 -top-3 h-full w-full border border-[#8C9B86]/40 sm:-right-5 sm:-top-5" />
            <div className="relative aspect-[4/5] overflow-hidden bg-[#E4E8DC]">
              <Image
                src="/images/boss.jpg"
                alt="Chuby-Zion company leadership portrait"
                fill
                sizes="(max-width: 1024px) 85vw, 35vw"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <Eyebrow>Leadership · Legacy</Eyebrow>
            <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-6xl">
              A name with
              <br />
              <span className="italic text-[#8C9B86]">a story.</span>
            </h2>
            <p className="mt-7 max-w-xl text-sm leading-8 text-[#68746A] sm:text-base">
              Chuby-Zion Industry Nigerian Limited was established in 2011 and continues to build on its identity as an indigenous, family-owned Nigerian company.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-8 text-[#68746A] sm:text-base">
              Learn more about the company’s background, values, and journey through its company information.
            </p>
            <a href={aboutUrl} className="mt-8 inline-flex items-center gap-4 border-b border-[#8C9B86] pb-3 text-[10px] font-bold uppercase tracking-[0.17em] text-[#173D30] hover:text-[#8C9B86]">
              Read our company story <span className="text-lg">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 bg-[#E4E8DC] px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <Eyebrow>We would love to hear from you</Eyebrow>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-6xl">
                Let’s start
                <br />
                <span className="italic text-[#8C9B86]">a conversation.</span>
              </h2>
              <p className="mt-6 max-w-md text-sm leading-8 text-[#68746A]">
                For orders, product enquiries, or general information, contact the Chuby-Zion team directly.
              </p>
              <a href={orderUrl} className="mt-8 inline-flex items-center gap-4 bg-[#173D30] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-white transition hover:-translate-y-0.5 hover:bg-[#245744]">
                Place an order <span className="text-lg">↗</span>
              </a>
            </div>

            <div className="grid gap-8 border-t border-[#173D30]/15 pt-8 sm:grid-cols-2 lg:pt-2">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#8C9B86]">Orders &amp; enquiries</p>
                <a href="tel:+2348060017513" className="mt-4 block font-serif text-2xl text-[#173D30] hover:text-[#8C9B86]">+234 806 001 7513</a>
                <a href="mailto:order@chubyzion.com.ng" className="mt-2 block break-all text-sm text-[#68746A] hover:text-[#173D30]">order@chubyzion.com.ng</a>
              </div>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#8C9B86]">General enquiries</p>
                <a href="tel:+2349081114111" className="mt-4 block font-serif text-2xl text-[#173D30] hover:text-[#8C9B86]">+234 908 111 4111</a>
                <a href="mailto:info@chubyzion.com.ng" className="mt-2 block break-all text-sm text-[#68746A] hover:text-[#173D30]">info@chubyzion.com.ng</a>
              </div>
              <div className="sm:col-span-2">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#8C9B86]">Head office</p>
                <p className="mt-3 max-w-sm text-sm leading-7 text-[#68746A]">No. 1 Soji Olu Road, Orile-Ifo, Ogun State, Nigeria.</p>
              </div>
              <div className="sm:col-span-2">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#8C9B86]">Branch office</p>
                <p className="mt-3 max-w-sm text-sm leading-7 text-[#68746A]">Plot 162–169 Ibute Ameke, Ngwo Uno, Udi L.G.A., Enugu State, Nigeria.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#21121f] px-6 py-10 text-[#F2EEE4] sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <a href="#home" aria-label="Back to top" className="w-fit bg-white p-2">
            <Image
              src="/images/chuby-zion-industry-logo.png"
              alt="Chuby-Zion Industry logo"
              width={140}
              height={70}
              className="h-auto w-[110px]"
            />
          </a>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/75">
            <a href={aboutUrl} className="hover:text-[#E4E8DC]">About Us</a>
            <a href={orderUrl} className="hover:text-[#E4E8DC]">Place Order</a>
            <a href={contactUrl} className="hover:text-[#E4E8DC]">Contact</a>
            <a href="https://www.instagram.com/chubyzion_/" target="_blank" rel="noreferrer" className="hover:text-[#E4E8DC]">Instagram ↗</a>
            <a href="https://www.facebook.com/onorik5/" target="_blank" rel="noreferrer" className="hover:text-[#E4E8DC]">Facebook ↗</a>
          </div>
        </div>
        <div className="mx-auto mt-8 flex max-w-[1440px] flex-col gap-3 border-t border-white/15 pt-6 text-[9px] leading-5 text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Chuby-Zion Industry Nigerian Limited. All rights reserved.</p>
          <a href="#home" className="w-fit uppercase tracking-[0.16em] hover:text-white">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
