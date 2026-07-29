import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Bike,
  Battery,
  BatteryCharging,
  Bell,
  BriefcaseBusiness,
  Building2,
  Check,
  Cpu,
  Factory,
  Gauge,
  Handshake,
  HeartHandshake,
  Landmark,
  Leaf,
  Lock,
  Megaphone,
  Package,
  Pill,
  Radar,
  Route,
  School,
  ShieldCheck,
  ShoppingBag,
  Signal,
  Sparkles,
  Sprout,
  Sun,
  Truck,
  Users,
  Utensils,
  Wallet,
  Wrench,
  Zap,
  ZapOff,
} from "lucide-react";

type Tone = "blue" | "gold";

const iconMap: Record<string, LucideIcon> = {
  "🚲": Bike,
  "🚚": Truck,
  "🔋": Battery,
  "⚡": Zap,
  "🔌": ZapOff,
  "📡": Signal,
  "🛡": ShieldCheck,
  "🛒": ShoppingBag,
  "🍔": Utensils,
  "💊": Pill,
  "📦": Package,
  "🏫": School,
  "🏛": Landmark,
  "📢": Megaphone,
  "⚙": Cpu,
  "🔒": Lock,
  "🧭": Route,
  "📈": Gauge,
  "🏗": Factory,
  "🤝": Handshake,
  "💛": HeartHandshake,
  "🌱": Sprout,
  "🌍": Leaf,
  "☀": Sun,
  "🔧": Wrench,
  "🧑‍🤝‍🧑": Users,
  "💼": BriefcaseBusiness,
  "🏢": Building2,
  "🔔": Bell,
  "🔍": Radar,
  "🔋⚡": BatteryCharging,
  "💰": Wallet,
};

export function IconBadge({ icon, tone = "blue" }: { icon: string; tone?: Tone }) {
  const Icon = iconMap[icon] ?? Sparkles;

  return (
    <span className={["icon", tone === "gold" ? "gold" : ""].filter(Boolean).join(" ")} aria-hidden="true">
      <Icon size={21} strokeWidth={1.8} />
    </span>
  );
}

export function MiniList({ items }: { items: readonly string[] }) {
  return (
    <ul className="miniList">
      {items.map((item) => (
        <li key={item}>
          <span className="tick" aria-hidden="true">
            <Check size={13} strokeWidth={2.8} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function InfoCard({
  icon,
  tone,
  title,
  text,
  bullets,
}: {
  icon: string;
  tone?: Tone;
  title: string;
  text: string;
  bullets?: readonly string[];
}) {
  return (
    <article className="card infoCard">
      <IconBadge icon={icon} tone={tone} />
      <h4>{title}</h4>
      <p>{text}</p>
      {bullets ? <MiniList items={bullets} /> : null}
    </article>
  );
}

export function SectionTitle({
  title,
  kicker = "Civitas Cargo E-Bikes",
  children,
  action,
}: {
  title: string;
  kicker?: string;
  children?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="sectionTitle">
      <div>
        <span className="sectionKicker">{kicker}</span>
        <h2>{title}</h2>
        {children ? <p>{children}</p> : null}
      </div>
      {action ? <div className="sectionAction">{action}</div> : null}
    </div>
  );
}
