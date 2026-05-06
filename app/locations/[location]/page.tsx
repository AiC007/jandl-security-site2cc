import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle, Phone, MessageSquare, MapPin, Shield, Camera, Flame, Lock, Lightbulb, Clock, ArrowRight } from 'lucide-react';
import QuickQuoteForm from '@/components/QuickQuoteForm';
import { COMPANY_INFO } from '@/lib/utils';
import { locations, services, serviceLocationMatrix } from '@/lib/data';
import { generateLocalBusinessSchema, generateFAQPageSchema, generateBreadcrumbSchema } from '@/lib/schema';

// ─── Extended per-location content ──────────────────────────────────────────

const locationExtended: Record<string, {
  description: string;
  population: string;
  commuting: string;
  whyLocal: string;
  residential: string[];
}> = {
  ilford: {
    description: 'Major East London town with excellent transport links to Central London via the Elizabeth Line and TfL Rail. Ilford is one of the most densely populated areas in Greater London, making security systems an important consideration for both residential and commercial properties.',
    population: '~168,000',
    commuting: 'Elizabeth Line to Liverpool Street in 22 minutes; Stratford in 15 minutes.',
    whyLocal: 'Our engineers are regularly working across Ilford IG1–IG6, with rapid response times for emergency call-outs and same-day surveys available throughout the area.',
    residential: ['Valentines', 'Seven Kings', 'Goodmayes', 'Newbury Park', 'Gants Hill', 'Redbridge', 'Chadwell Heath'],
  },
  romford: {
    description: 'Historic market town and major retail centre in East London, now part of the London Borough of Havering. Romford is home to a large residential population alongside a busy commercial and hospitality sector, creating demand for everything from domestic alarm systems to commercial CCTV.',
    population: '~122,000',
    commuting: 'Elizabeth Line to Bond Street in 35 minutes; Liverpool Street in 28 minutes.',
    whyLocal: 'Based in Brentwood, J&L Security\'s engineers know the area well. We regularly install systems throughout RM1–RM7 and can offer some of the fastest response times in the area.',
    residential: ['Gidea Park', 'Harold Wood', 'Rise Park', 'Collier Row', 'Heath Park', 'Rush Green'],
  },
  chelmsford: {
    description: 'The county town of Essex and one of the fastest-growing cities in the East of England. Chelmsford has a thriving business district, university, and a large and expanding residential population, all of which drive strong demand for professional security systems.',
    population: '~180,000',
    commuting: 'Direct rail to London Liverpool Street in 35 minutes.',
    whyLocal: 'We have an established customer base across Chelmsford CM1–CM3, including a large number of commercial clients in the business park areas and residential customers throughout the expanding new-build estates.',
    residential: ['Great Baddow', 'Galleywood', 'Springfield', 'Writtle', 'Broomfield', 'Moulsham'],
  },
  brentwood: {
    description: 'An affluent Essex town known for excellent schools, green spaces, and easy rail access to London. Brentwood has a high proportion of family homes and high-value properties, making comprehensive home security a priority for many residents.',
    population: '~76,000',
    commuting: 'Elizabeth Line to Liverpool Street in 45 minutes; Shenfield to London in 38 minutes.',
    whyLocal: 'J&L Security serves customers throughout Brentwood CM13–CM15, Shenfield, and surrounding villages. Our engineers regularly work across the borough and provide fast same-day survey availability.',
    residential: ['Shenfield', 'Hutton', 'Ingrave', 'Herongate', 'South Weald', 'Ingatestone'],
  },
  basildon: {
    description: 'One of Essex\'s largest towns with a major retail and business centre. Basildon encompasses a wide area including Laindon, Pitsea, Vange, and Wickford outskirts, with a mix of residential estates and substantial industrial and retail parks.',
    population: '~185,000',
    commuting: 'C2C line to London Fenchurch Street in 45 minutes.',
    whyLocal: 'We cover the whole Basildon SS13–SS16 district including the major retail parks and industrial estates, as well as the residential areas. Fire alarm systems for commercial clients and HMOs are a particular strength in this area.',
    residential: ['Laindon', 'Pitsea', 'Vange', 'Kingswood', 'Langdon Hills', 'Noak Bridge'],
  },
  hornchurch: {
    description: 'A popular suburban town in the London Borough of Havering, known for its historic high street, excellent country parks, and strong community. Hornchurch has a mix of period properties and modern new builds that benefit from discreet wireless alarm systems.',
    population: '~43,000',
    commuting: 'District Line to Westminster in 50 minutes; Elizabeth Line interchange at Romford.',
    whyLocal: 'Being part of the Havering borough, Hornchurch is well within our core coverage area. Our engineers regularly cover RM11–RM12 and can usually offer next-day surveys.',
    residential: ['Emerson Park', 'Ardleigh Green', 'Elm Park', 'Hacton', 'St Andrews', 'Harold Wood'],
  },
  barking: {
    description: 'A busy East London town in the London Borough of Barking and Dagenham. Barking is undergoing significant regeneration and has a rapidly growing residential and commercial property base, with a particular demand for commercial CCTV and access control.',
    population: '~90,000',
    commuting: 'District and Hammersmith & City Line to Central London; Overground to Stratford.',
    whyLocal: 'Our engineers cover IG11 and the surrounding area regularly. The ongoing regeneration around Barking Riverside has brought a number of new commercial and residential clients to our customer base.',
    residential: ['Barking Riverside', 'Longbridge', 'River Road', 'Gascoigne', 'Chadwell Heath'],
  },
  dagenham: {
    description: 'A large town in the London Borough of Barking and Dagenham. Dagenham has a significant industrial heritage and a large residential population, with strong demand for both domestic alarm systems and commercial security across its industrial estates.',
    population: '~110,000',
    commuting: 'District Line to Central London; C2C line from Dagenham Dock.',
    whyLocal: 'J&L Security regularly works across RM9–RM10 Dagenham, covering both the residential estates and the industrial areas along the A13 corridor.',
    residential: ['Becontree', 'Chadwell Heath', 'Rush Green', 'Marks Gate', 'Heathway', 'Gale Street'],
  },
  redbridge: {
    description: 'The London Borough of Redbridge covers a large area of North East London including Ilford, Wanstead, Woodford, and Gants Hill. It is one of the most populous London boroughs and has a diverse mix of residential and commercial properties.',
    population: '~310,000 (borough)',
    commuting: 'Central Line from Gants Hill and Woodford; Elizabeth Line from Ilford.',
    whyLocal: 'As one of our most active coverage areas, the Redbridge borough accounts for a significant proportion of our customer base. Our engineers know the area thoroughly and response times are excellent.',
    residential: ['Ilford', 'Wanstead', 'South Woodford', 'Woodford Green', 'Barkingside', 'Gants Hill'],
  },
  enfield: {
    description: 'A large North London borough with a mix of urban and semi-rural areas. The London Borough of Enfield includes Enfield Town, Palmers Green, Southgate, and Edmonton, with a substantial commercial sector and large residential population.',
    population: '~330,000 (borough)',
    commuting: 'Piccadilly and Victoria lines; Overground from Enfield Chase and Enfield Lock.',
    whyLocal: 'We serve the Enfield borough across EN1–EN3, covering both the residential areas and the commercial districts including the industrial estates around Brimsdown.',
    residential: ['Enfield Town', 'Palmers Green', 'Southgate', 'Edmonton', 'Winchmore Hill', 'Cockfosters'],
  },
  stratford: {
    description: 'One of East London\'s fastest-growing areas, Stratford E15 has been transformed by Olympic regeneration and is now home to Westfield Stratford City, the Queen Elizabeth Olympic Park, and thousands of new residential units. The area has significant demand for commercial CCTV and access control.',
    population: '~50,000 (ward)',
    commuting: 'Stratford International: Javelin service to St Pancras in 7 minutes. Underground, DLR, and Overground connections.',
    whyLocal: 'The ongoing development in Stratford provides regular commercial security work including construction site CCTV, new-build access control, and commercial fire alarms.',
    residential: ['Stratford New Town', 'Maryland', 'Forest Gate', 'West Ham', 'Leyton', 'Bow'],
  },
  'canary-wharf': {
    description: 'London\'s secondary financial district on the Isle of Dogs, home to the headquarters of major global banks, media companies, and professional services firms. Canary Wharf has some of the most demanding commercial security requirements in the country, including access control, CCTV, and fire alarm systems.',
    population: '~25,000 residents (E14)',
    commuting: 'Jubilee Line to Waterloo in 11 minutes; Elizabeth Line (Crossrail) to Paddington in 17 minutes.',
    whyLocal: 'We install and maintain commercial security systems across E14 and the wider Docklands area, including fire alarm servicing, access control maintenance, and CCTV for commercial developments.',
    residential: ['Canary Wharf', 'Isle of Dogs', 'Poplar', 'Millwall', 'Cubitt Town', 'South Quay'],
  },
  greenwich: {
    description: 'The Royal Borough of Greenwich in South East London combines a rich maritime heritage with significant commercial development. The area includes Greenwich town centre, the O2 entertainment complex, Royal Arsenal Riverside, and extensive residential areas from Blackheath through Charlton to Woolwich.',
    population: '~290,000 (borough)',
    commuting: 'DLR to Bank in 20 minutes; Elizabeth Line from Woolwich; National Rail from Greenwich to London Bridge.',
    whyLocal: 'Our engineers service customers across SE10 and the wider Greenwich borough, including BAFE-certified fire alarm work for the commercial properties along the riverside, domestic intruder alarms for the residential streets around Blackheath and Charlton, and access control for the new-build developments at Royal Arsenal Riverside and Kidbrooke Village.',
    residential: ['Greenwich', 'Blackheath', 'Charlton', 'Kidbrooke', 'Eltham', 'Woolwich'],
  },
  harlow: {
    description: 'A new town in West Essex, designed post-war with a distinctive layout of residential neighbourhoods surrounding a town centre. Harlow has a significant industrial and business park sector, particularly in the Pinnacles and Templefields areas, alongside a large residential population.',
    population: '~90,000',
    commuting: 'Direct rail to London Liverpool Street in 40 minutes.',
    whyLocal: 'We serve clients across Harlow CM17–CM20, from domestic alarm installations in the residential areas to commercial fire alarms and CCTV for the business parks.',
    residential: ['The Pinnacles', 'Potter Street', 'Great Parndon', 'Netteswell', 'Staple Tye', 'Kingsmoor'],
  },
  epping: {
    description: 'A market town at the southern edge of Epping Forest in West Essex, Epping serves as a gateway to the forest and is the terminus of the Central Line. The town has a mix of period residential properties and small businesses, with many homeowners investing in home security.',
    population: '~12,000',
    commuting: 'Central Line to Central London (Bank/Liverpool Street area in ~50 minutes).',
    whyLocal: 'We regularly cover Epping CM16 and the surrounding Essex villages. Many of our customers in this area are looking for wireless alarm systems suitable for older and listed properties.',
    residential: ['Epping', 'Theydon Bois', 'North Weald', 'Coopersale', 'Thornwood', 'Toot Hill'],
  },
  islington: {
    description: 'A central inner London borough running from the City fringes at Angel up through Highbury and Holloway. Islington combines high-density Georgian and Victorian terraced housing with a dense commercial base of offices, restaurants, and independent retail along Upper Street and Old Street. Demand is driven by high-value residential properties, owner-managed businesses, and small commercial premises that need straightforward, reliable security without disruption.',
    population: '~245,000 (borough)',
    commuting: 'Northern, Victoria, and Piccadilly Lines; Overground from Highbury & Islington and Caledonian Road & Barnsbury.',
    whyLocal: 'Our engineers operate routinely across Islington N1 and the wider EC1 fringe. Wireless installations are well suited to the borough\'s period properties where minimising visible cabling matters, and we extend the same residential and small-commercial coverage we offer across our Essex base.',
    residential: ['Angel', 'Highbury', 'Canonbury', 'Holloway', 'Barnsbury', 'Finsbury Park'],
  },
  hackney: {
    description: 'A dynamic East London borough covering an area from Shoreditch in the south up through London Fields, Hackney Central, Clapton, and Stoke Newington. Hackney has experienced sustained regeneration over the past decade and now combines period housing stock, new-build apartments, and one of London\'s most active small business and creative-industry sectors. Property crime patterns make wireless intruder alarms and CCTV a priority for both residential and commercial customers.',
    population: '~285,000 (borough)',
    commuting: 'Overground from Hackney Central, Hackney Wick, and Dalston Junction; rail to Liverpool Street; Central Line at Stratford.',
    whyLocal: 'We extend our coverage across the full Hackney borough including E2, E5, E8, E9, and N16. The mix of period terraces, new-build flats, and converted commercial premises is well suited to wireless Grade 2 systems with app integration, and we work regularly with both residential customers and small commercial clients across the area.',
    residential: ['Hackney Central', 'London Fields', 'Stoke Newington', 'Clapton', 'Dalston', 'Hackney Wick'],
  },
  clapton: {
    description: 'A residential area in the north of the London Borough of Hackney, covering Upper and Lower Clapton along the western edge of the River Lea. Clapton has a mix of large Victorian houses, converted flats, and a growing new-build sector around Lea Bridge Road. The area\'s period properties make wireless security systems particularly suitable, with no need to disturb existing decoration or run surface cabling.',
    population: '~30,000',
    commuting: 'Overground from Clapton and Hackney Downs to Liverpool Street in around 15 minutes.',
    whyLocal: 'We work regularly across Clapton E5 and the wider Hackney borough. Our wireless Grade 2 packages suit the converted Victorian houses common in the area, and we offer both standalone installations and integration with CCTV for shared-entrance properties.',
    residential: ['Upper Clapton', 'Lower Clapton', 'Lea Bridge', 'Hackney Downs', 'Clapton Pond'],
  },
  dalston: {
    description: 'A high-density area in the south of the London Borough of Hackney centred on Kingsland High Street and Ridley Road. Dalston has a particularly strong commercial base, with independent retail, restaurants, and night-time venues alongside dense residential blocks and converted period housing. The mix drives steady demand for both commercial CCTV and access control as well as residential intruder alarms.',
    population: '~25,000',
    commuting: 'Overground from Dalston Junction and Dalston Kingsland; under 10 minutes to Liverpool Street and Shoreditch.',
    whyLocal: 'Our engineers regularly cover Dalston E8 for both residential customers and the local commercial base along Kingsland Road. Door entry, access control, and CCTV are common requirements for small commercial premises and converted residential blocks in the area.',
    residential: ['Dalston Junction', 'Dalston Kingsland', 'Kingsland', 'De Beauvoir Town', 'Haggerston'],
  },
  camden: {
    description: 'A central North London borough covering Camden Town, Kentish Town, Primrose Hill, Belsize Park, and Hampstead. Camden combines major retail, music, and tourism (notably Camden Market) with high-value residential streets and a strong creative-industry commercial sector. Demand spans residential intruder alarms in the period housing stock, commercial CCTV and access control for shops and venues, and fire alarms for HMOs and shared accommodation.',
    population: '~270,000 (borough)',
    commuting: 'Northern Line; Overground from Camden Road; main-line interchanges at King\'s Cross, St Pancras, and Euston.',
    whyLocal: 'We cover Camden NW1, NW3, and NW5 routinely. The area\'s period terraces and converted properties suit our wireless Grade 2 packages, and we install fire alarms to BS 5839 for the borough\'s significant HMO and shared-accommodation stock.',
    residential: ['Camden Town', 'Kentish Town', 'Primrose Hill', 'Belsize Park', 'Chalk Farm', 'Tufnell Park'],
  },
  southwark: {
    description: 'A South East London borough running along the south bank of the Thames from London Bridge through Bankside, Bermondsey, and down to Peckham, Walworth, and Camberwell. Southwark has one of London\'s largest commercial property bases, including Tate Modern and the Shard, alongside dense residential stock and significant new-build developments around Elephant and Castle. The mix drives demand for commercial fire alarms, access control, CCTV, and residential intruder alarms in roughly equal measure.',
    population: '~310,000 (borough)',
    commuting: 'Jubilee, Northern, and Bakerloo Lines; National Rail from London Bridge, Waterloo East, and Peckham Rye.',
    whyLocal: 'Our engineers extend coverage to Southwark across SE1, SE15, SE16, and SE17. Commercial premises along the South Bank, residential blocks in Bermondsey and Walworth, and HMOs across the borough are all served regularly.',
    residential: ['Bankside', 'Bermondsey', 'Peckham', 'Walworth', 'Camberwell', 'Elephant and Castle'],
  },
  woolwich: {
    description: 'A historic riverside town in the south of the Royal Borough of Greenwich, with a substantial regeneration pipeline centred on Royal Arsenal Riverside and the new Elizabeth Line connection. Woolwich combines new-build apartments, converted Victorian terraces, and a busy commercial high street, with steady demand for residential intruder alarms, commercial CCTV, and access control for new-build estates.',
    population: '~85,000',
    commuting: 'Elizabeth Line from Woolwich to Canary Wharf in 8 minutes and Bond Street in 25 minutes; DLR; Woolwich Ferry.',
    whyLocal: 'We service the SE18 area as part of our wider South East London coverage, including Royal Arsenal Riverside developments, residential streets across Plumstead and Charlton, and the commercial base along Powis Street and the high street.',
    residential: ['Royal Arsenal', 'Plumstead', 'Charlton', 'Shooters Hill', 'Thamesmead', 'Eltham'],
  },
  westminster: {
    description: 'A central London borough covering some of the highest-value residential and commercial property in the United Kingdom: Mayfair, Marylebone, Belgravia, Pimlico, Soho, Westminster, and the West End. The security requirements span high-net-worth residential properties, embassies, professional services and financial offices, retail, hospitality, and historic buildings. Wireless and discreet installations are routinely required where listed-building or conservation considerations apply.',
    population: '~210,000 (borough)',
    commuting: 'Multiple Underground lines including Bakerloo, Central, Jubilee, Piccadilly, and Victoria; mainline at Victoria, Charing Cross, and Paddington.',
    whyLocal: 'We extend coverage to Westminster for residential and commercial customers across SW1, W1, W2, and WC1/WC2. Our wireless Grade 2 systems and SSAIB-approved monitored installations are well suited to high-value properties and listed buildings where minimising visible installation work is important.',
    residential: ['Mayfair', 'Marylebone', 'Pimlico', 'Belgravia', 'Soho', 'St James\'s'],
  },
  hammersmith: {
    description: 'A West London town and the centre of the London Borough of Hammersmith and Fulham. Hammersmith is a major commercial centre with a substantial office base and strong retail and hospitality presence, alongside a large residential population in period terraces, mansion blocks, and modern apartments. Demand is split between commercial CCTV and access control for offices and shopfronts, and residential intruder alarms for the borough\'s mixed housing stock.',
    population: '~75,000',
    commuting: 'Hammersmith and City, District, Piccadilly, and Circle Lines; bus interchange at Hammersmith Broadway.',
    whyLocal: 'Our engineers cover Hammersmith W6, W12, and W14 as part of our extended West London coverage. Wireless Grade 2 systems suit the period properties, and we install commercial fire alarm and CCTV systems for the office and retail sector.',
    residential: ['Hammersmith Broadway', 'Brook Green', 'Ravenscourt Park', 'Shepherd\'s Bush', 'Olympia', 'West Kensington'],
  },
  battersea: {
    description: 'A South West London area in the London Borough of Wandsworth, covering Battersea, Nine Elms, and the south bank of the Thames opposite Pimlico. Battersea has been substantially redeveloped in the past decade with the Power Station regeneration and the Northern Line extension to Battersea Power Station; the area combines new-build apartments, period mansion blocks, and commercial premises along the riverside. Wireless intruder alarms and access control for new-build blocks are core demand.',
    population: '~75,000',
    commuting: 'Northern Line from Battersea Power Station and Nine Elms; Clapham Junction main-line; Overground.',
    whyLocal: 'We extend our coverage to Battersea SW8 and SW11 for residential customers in the Power Station and Nine Elms developments, period mansion blocks across Battersea Square, and commercial premises along the riverside.',
    residential: ['Battersea Park', 'Nine Elms', 'Clapham Junction', 'Battersea Square', 'Queenstown', 'Wandsworth'],
  },
  fulham: {
    description: 'A high-value residential area in the south of the London Borough of Hammersmith and Fulham, with a strong period housing stock and an active small-commercial sector along North End Road and Fulham Road. Fulham is a settled residential market with insurance-driven demand for monitored, inspectorate-approved alarms, and a steady commercial requirement for CCTV and access control along the main retail streets.',
    population: '~85,000',
    commuting: 'District Line; Overground from West Brompton; Imperial Wharf and Fulham Broadway National Rail.',
    whyLocal: 'Our engineers cover Fulham SW6 and SW10 routinely. Wireless Grade 2 packages suit the period terraces and converted flats, and our SSAIB approval supports customers with insurance policies that require an inspectorate-approved system.',
    residential: ['Fulham Broadway', 'Parsons Green', 'Sands End', 'Imperial Wharf', 'Bishops Park', 'West Brompton'],
  },
  streatham: {
    description: 'A South London area straddling the boroughs of Lambeth and Wandsworth, with a long high street running from Streatham Hill through Streatham Common. Streatham combines large Victorian and Edwardian houses, converted flats, and an active commercial high street with strong demand for both residential intruder alarms and commercial CCTV. The high concentration of converted houses and shared accommodation also drives BS 5839-6 fire alarm requirements.',
    population: '~70,000',
    commuting: 'National Rail from Streatham, Streatham Hill, and Streatham Common; Victoria Line via Brixton.',
    whyLocal: 'We work regularly across Streatham SW2 and SW16, with installations covering wireless intruder alarms for residential customers, BS 5839-6 fire alarms for HMOs and shared accommodation, and commercial CCTV and access control along the high street.',
    residential: ['Streatham Hill', 'Streatham Common', 'Streatham Vale', 'Norbury', 'Furzedown', 'Tooting Bec'],
  },
  finchley: {
    description: 'A North London suburban area in the London Borough of Barnet, covering Finchley Central, North Finchley, East Finchley, and Whetstone. Finchley has a high proportion of family homes, period semi-detached and detached houses, and converted flats, alongside a steady commercial high street. Demand is led by residential intruder alarms for family homes and converted flats, with insurance-driven preference for monitored systems where contents values are higher.',
    population: '~110,000',
    commuting: 'Northern Line from Finchley Central, North Finchley (via Woodside Park), East Finchley, and West Finchley.',
    whyLocal: 'Our engineers cover Finchley N2, N3, and N12 across the full borough span. Wireless Grade 2 packages suit the period semi-detached stock, and our SSAIB approval supports the higher-value residential market where insurance policies require an inspectorate-approved system.',
    residential: ['Finchley Central', 'North Finchley', 'East Finchley', 'West Finchley', 'Whetstone', 'Woodside Park'],
  },
  barnet: {
    description: 'The northernmost of the London boroughs, covering High Barnet, New Barnet, Cockfosters, Hadley Wood, and Totteridge. The Barnet area includes a high proportion of family homes, large detached and semi-detached properties, and a settled residential market with strong insurance-driven demand for monitored, inspectorate-approved alarms. Commercial demand is concentrated along Barnet High Street and the business areas around Whetstone and New Barnet.',
    population: '~395,000 (borough)',
    commuting: 'Northern Line terminus at High Barnet; Piccadilly Line at Cockfosters; Overground at New Barnet.',
    whyLocal: 'We extend our coverage across the Barnet borough EN4, EN5, and N20. The area\'s family homes and high-value residential stock suit wireless Grade 2 packages with monitored options, and we provide SSAIB-approved installations for customers whose insurance policies require an inspectorate-approved alarm.',
    residential: ['High Barnet', 'New Barnet', 'Cockfosters', 'Hadley Wood', 'Totteridge', 'Whetstone'],
  },
};

const serviceIcons = {
  'burglar-alarms': Shield,
  'cctv-systems': Camera,
  'fire-alarms': Flame,
  'access-control': Lock,
  'security-lighting': Lightbulb,
} as const;

const locationFaqs = (locationName: string) => [
  {
    question: `Do you offer same-day security surveys in ${locationName}?`,
    answer: `Yes. We offer free same-day security surveys across ${locationName} and the surrounding area. Call us before noon and we can usually arrange an afternoon visit.`,
  },
  {
    question: `How quickly can you respond to an emergency alarm fault in ${locationName}?`,
    answer: `For customers on our maintenance contract we aim to respond to emergency call-outs in ${locationName} within 2–4 hours, 24 hours a day, 7 days a week.`,
  },
  {
    question: `What security systems do you install in ${locationName}?`,
    answer: `We install the full range of security systems in ${locationName}: burglar alarms (wired and wireless), CCTV, fire alarms (domestic and commercial), access control, door entry, and security lighting.`,
  },
  {
    question: `Are you based near ${locationName}?`,
    answer: `J&L Security is based in Brentwood, Essex — giving us excellent coverage across ${locationName} and the surrounding areas. Our engineers work throughout Essex and Greater London daily.`,
  },
  {
    question: `Do you provide maintenance contracts in ${locationName}?`,
    answer: `Yes. We offer annual maintenance contracts for all systems we install in ${locationName}, covering regular servicing visits, priority emergency response, and software updates.`,
  },
  {
    question: `Do you install and service fire alarms in ${locationName}?`,
    answer: `Yes. We are a BAFE-certified fire alarm maintainer covering ${locationName} and the surrounding area. We install commercial systems to BS 5839-1, domestic and HMO systems to BS 5839-6, and provide 6-monthly servicing contracts for both. We also carry out fire risk assessments where required.`,
  },
  {
    question: `Can you install or repair smoke alarms in ${locationName}?`,
    answer: `Yes. We carry out smoke alarm installs and smoke alarm repair for domestic properties and HMOs in ${locationName} under BS 5839-6, including Grade D mains-powered interlinked systems suitable for landlord licensing requirements.`,
  },
];

// ─── Page component ──────────────────────────────────────────────────────────

type Props = { params: Promise<{ location: string }> };

export async function generateStaticParams() {
  return locations.map((l) => ({ location: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location: locationSlug } = await params;
  const location = locations.find((l) => l.slug === locationSlug);
  if (!location) return {};
  return {
    title: `Security Systems ${location.name} — Alarms, CCTV & Fire Protection`,
    description: `Professional security system installation in ${location.name}, ${location.county}. Burglar alarms, CCTV, fire alarms, access control. Free surveys, same-day service. Call J&L Security.`,
    keywords: [
      `security systems ${location.name}`,
      `burglar alarm ${location.name}`,
      `CCTV installation ${location.name}`,
      `fire alarm ${location.name}`,
      `alarm installer ${location.name}`,
      `security company ${location.name}`,
      `${location.postcode} security`,
    ],
    alternates: { canonical: `${COMPANY_INFO.website}/locations/${locationSlug}` },
    openGraph: {
      title: `Security Systems ${location.name}`,
      description: `Burglar alarms, CCTV, fire alarms & access control in ${location.name}. Free surveys, same-day service.`,
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { location: locationSlug } = await params;
  const location = locations.find((l) => l.slug === locationSlug);
  if (!location) notFound();

  const ext = locationExtended[locationSlug];
  const faqs = locationFaqs(location.name);

  // Service-location pages for this area
  const localPages = serviceLocationMatrix.filter(
    (item) => item.location.toLowerCase().replace(/ /g, '-') === locationSlug
  );

  const localBusinessSchema = generateLocalBusinessSchema();
  const faqSchema = generateFAQPageSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: COMPANY_INFO.website },
    { name: 'Locations', url: `${COMPANY_INFO.website}/locations` },
    { name: location.name, url: `${COMPANY_INFO.website}/locations/${locationSlug}` },
  ]);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([localBusinessSchema, faqSchema, breadcrumbSchema]),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-primary-200 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{location.name}</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-6 text-sm font-medium">
                <MapPin className="h-4 w-4" />
                {location.county} · {location.postcode}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Security Systems in {location.name}
              </h1>
              <p className="text-xl text-primary-100 mb-8">
                Professional burglar alarms, CCTV, fire alarms and access control — installed and maintained by local engineers across {location.name} and surrounding areas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col gap-1">
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="bg-white text-primary-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors text-center"
                  >
                    Call {COMPANY_INFO.phone}
                  </a>
                  <a
                    href={`tel:${COMPANY_INFO.phone2}`}
                    className="text-primary-200 hover:text-white text-sm text-center transition-colors"
                  >
                    or call {COMPANY_INFO.phone2}
                  </a>
                </div>
                <Link
                  href="/contact"
                  className="bg-primary-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-400 border-2 border-primary-400 transition-colors text-center"
                >
                  Free Survey in {location.name}
                </Link>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1">
              <QuickQuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us / local info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Security Services in {location.name}
              </h2>
              {ext && (
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">{ext.description}</p>
              )}
              {ext && (
                <p className="text-gray-700 leading-relaxed mb-6">{ext.whyLocal}</p>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="bg-primary-50 rounded-xl p-5">
                  <Clock className="h-6 w-6 text-primary-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">Same-Day Surveys</h3>
                  <p className="text-sm text-gray-600">Free security assessments available today across {location.name}</p>
                </div>
                <div className="bg-primary-50 rounded-xl p-5">
                  <Shield className="h-6 w-6 text-primary-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">24/7 Emergency Cover</h3>
                  <p className="text-sm text-gray-600">Round-the-clock emergency callouts for alarm faults and break-ins</p>
                </div>
                <div className="bg-primary-50 rounded-xl p-5">
                  <CheckCircle className="h-6 w-6 text-primary-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">Accredited Engineers</h3>
                  <p className="text-sm text-gray-600">SSAIB, CHAS, FIA and BAFE certified — installation to SSAIB standards</p>
                </div>
                <div className="bg-primary-50 rounded-xl p-5">
                  <MapPin className="h-6 w-6 text-primary-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">Locally Based</h3>
                  <p className="text-sm text-gray-600">Engineers working from our Brentwood base cover {location.name} daily</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Local Area</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Postcode:</span>
                    <span className="text-gray-600 ml-2">{location.postcode}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">County:</span>
                    <span className="text-gray-600 ml-2">{location.county}</span>
                  </div>
                  {ext && (
                    <div>
                      <span className="font-medium text-gray-700">Population:</span>
                      <span className="text-gray-600 ml-2">{ext.population}</span>
                    </div>
                  )}
                  {ext && (
                    <div>
                      <span className="font-medium text-gray-700">Transport:</span>
                      <span className="text-gray-600 ml-2">{ext.commuting}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Key Landmarks</h3>
                <ul className="space-y-1">
                  {location.landmarks.map((landmark) => (
                    <li key={landmark} className="text-sm text-gray-600 flex items-center gap-2">
                      <MapPin className="h-3 w-3 text-primary-400 flex-shrink-0" />
                      {landmark}
                    </li>
                  ))}
                </ul>
              </div>
              {ext && ext.residential.length > 0 && (
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Areas We Cover</h3>
                  <div className="flex flex-wrap gap-2">
                    {ext.residential.map((area) => (
                      <span key={area} className="bg-white border border-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services available */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Security Services Available in {location.name}
            </h2>
            <p className="text-gray-600 text-lg">All services installed and maintained by our local engineers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = serviceIcons[service.slug as keyof typeof serviceIcons] ?? Shield;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:border-primary-300 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                      <Icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">{service.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <ul className="space-y-1 mb-4">
                    {service.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
                        <CheckCircle className="h-3 w-3 text-primary-500 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <span className="text-primary-600 text-sm font-medium group-hover:text-primary-700 inline-flex items-center gap-1">
                    Learn More <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specific local service pages */}
      {localPages.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Specialist Services in {location.name}
              </h2>
              <p className="text-gray-600">Dedicated pages for common security requests in your area</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {localPages.map((item) => {
                const locationSlugPart = item.location.toLowerCase().replace(/ /g, '-');
                const serviceSlugPart = item.slug.replace(`-${locationSlugPart}`, '');
                return (
                  <Link
                    key={item.slug}
                    href={`/${serviceSlugPart}/${locationSlugPart}`}
                    className="bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-400 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-800 group-hover:text-primary-600 transition-colors">
                        {item.service} in {item.location}
                      </p>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary-600 transition-colors flex-shrink-0 ml-2" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Nearby areas */}
      {location.nearbyAreas.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              We Also Cover Near {location.name}
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {location.nearbyAreas.map((area) => {
                const areaSlug = area.toLowerCase().replace(/ /g, '-');
                const hasPage = locations.some((l) => l.slug === areaSlug);
                return hasPage ? (
                  <Link
                    key={area}
                    href={`/locations/${areaSlug}`}
                    className="bg-white border-2 border-transparent hover:border-primary-400 text-gray-700 hover:text-primary-600 px-4 py-2 rounded-full text-sm font-medium shadow-sm transition-all"
                  >
                    {area}
                  </Link>
                ) : (
                  <span key={area} className="bg-white text-gray-600 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    {area}
                  </span>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Security Questions for {location.name}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 border-l-4 border-l-primary-500 p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-800 to-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get a Free Security Survey in {location.name}</h2>
          <p className="text-xl mb-8 text-primary-100">
            Our qualified engineers cover {location.name} and all surrounding areas. No-obligation assessment — same-day appointments available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex flex-col gap-1">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call {COMPANY_INFO.phone}
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone2}`}
                className="text-primary-200 hover:text-white text-sm text-center transition-colors"
              >
                or call {COMPANY_INFO.phone2}
              </a>
            </div>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi, I'd like a free security survey in ${location.name}`}
              className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="h-4 w-4" />
              WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-400 border-2 border-primary-400 transition-colors"
            >
              Book Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
