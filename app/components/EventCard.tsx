import Link from "next/link";

interface EventCardProps {
  id: string;
  title: string;
  sport: string;
  date: string;
  location: string;
  image: string;
  result: string;
}

export default function EventCard({
  id,
  title,
  sport,
  date,
  location,
  image,
  result,
}: EventCardProps) {
  return (
    <Link href={`/events/${id}`} className="event-card">
      <img src={image} alt={title} />
      <div className="event-info">
        <h3>{title}</h3>
        <p className="sport">{sport}</p>
        <p>📅 {date}</p>
        <p>📍 {location}</p>
        <div className="event-result">{result}</div>
      </div>
    </Link>
  );
}

