import Wrapper from '../common/Wrapper';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="from-kawaii-mint/30 to-kawaii-lavender/30 dark:to-kawaii-lavender/10 min-h-screen bg-gradient-to-br pt-30 pb-20 dark:bg-gradient-to-b dark:from-neutral-900"
    >
      <Wrapper>
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-family-bubblegum text-center text-4xl font-semibold">
            About Vertika
          </h1>
          <div className="bg-kawaii-pink h-1 w-20"></div>
        </div>

        <div className="mt-20 grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-4">
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-lg font-semibold">Machine Learning Engineer</h2>
              <p>
                I am a machine learning engineer with a passion for building machine learning
                models. I am a quick learner and I am always looking to expand my knowledge.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold">Education & Skills</h2>
              <ul className="list-disc pl-4">
                <li>Third year Computer Science student</li>
                <li>Data Structure and Algorithm in Java</li>
                <li>
                  <span className="font-semibold">Languages:</span> C++, C, Java, JavaScript, Python
                </li>
                <li>
                  <span className="font-semibold">Backend Development :</span> Node.js, Express,
                  REST APIs, Authentication
                </li>
                <li>
                  <span className="font-semibold">Machine Learning:</span> scikit-learn, Pandas,
                  NumPy, matplotlib{' '}
                </li>
                <li>
                  <span className="font-semibold">Cloud & DevOps:</span> Git, GitHub
                </li>
              </ul>
            </div>
          </div>

          <div className="order-first mx-auto w-full sm:w-sm md:order-last">
            <div className="border-kawaii-pink rounded-3xl border-3 p-6 shadow-sm transition-transform duration-300 hover:scale-105 hover:rotate-6">
              <div className="bg-kawaii-pink mb-8 h-80 w-full overflow-hidden rounded-3xl border-2 border-pink-200 p-2">
                <img
                  src="/images/about-vertika.jpg"
                  alt="about"
                  className="h-full w-full rounded-2xl object-cover"
                />
              </div>

              <div className="text-center">
                <div className="mx-auto flex w-fit items-center gap-2">
                  <span className="bg-kawaii-pink size-3 rounded-full"></span>
                  <span className="bg-kawaii-lavender size-3 rounded-full"></span>
                  <span className="bg-kawaii-mint size-3 rounded-full"></span>
                </div>

                <h2 className="mt-3 text-lg font-semibold">My skills</h2>
                <p className="text-sm">machine learning ʚɞ backend</p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
