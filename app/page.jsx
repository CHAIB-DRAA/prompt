import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'>  GPT prompt ideas</span>
    </h1>
    <p className='desc text-center'>
    Unleash your imagination on your exceptional profile page. Share outstanding prompts and inspire with the power of creativity. Together, let's inspire the world with our talents!
    </p>

    <Feed />
  </section>
);

export default Home;
