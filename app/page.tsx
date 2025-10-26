import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { events } from "@/lib/constants";



const Page = () => {
  return (
    <section>
      <h1 className="text-center">
        The Hub for every Dev <br /> Event you can't miss{" "}
      </h1>
      <p className="text-center mt-5">
        Hackathons , Meetup and Conferences , All in one place{" "}
      </p>
      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>

        <ul className="events no-bullets">
          {events.map((event) => (
            <li key={event.title}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Page;
