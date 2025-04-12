import CurrentWeather from "@/modules/Weather";
import Users from "@/modules/Users";

export default function Home() {
  return (
    <div className="">
      <main className="my-6 ">
        <article className="space-y-8">
          <section>
            <h1 className="text-center mb-4 text-2xl text-gray-400">Client Side Render</h1>
            <CurrentWeather />
          </section>
          <section>
            <h1 className="text-center mb-4 text-2xl text-gray-400">Server Side Render</h1>
            <Users />
          </section>
        </article>
      </main>
    </div>
  );
}
