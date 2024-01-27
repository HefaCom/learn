import AboutCoverSection from "@/src/components/About/AboutCoverSection";
import Skills from "@/src/components/About/Skills";
import Link from "next/link";


export const metadata = {
  title: "About Me",
  description: `Here are some details about my self.`,
};

export default function About() {
  return (
    <>
      <AboutCoverSection />
      <Skills />
      <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal"> 
      Have a project in mind? Reach out to me through <Link href="mailto:okokohhezron254@gmail.com"  className="!underline underline-offset-2"   >email</Link> <Link href="https://wa.link/vgm104"  className="!underline underline-offset-2"   >WhatsApp </Link>and let's make it happen.
      </h2>
    </>
  );
}
