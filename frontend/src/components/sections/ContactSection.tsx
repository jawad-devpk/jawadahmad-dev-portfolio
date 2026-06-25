import { Send } from "lucide-react";
import { type FormEvent, useEffect, useRef, useState } from "react";
import ContactInfoCard from "../cards/ContactInfoCard";
import Container from "../common/Container";
import { contactInfo, contactSocialLinks } from "../../data/contact";
import { submitContactForm } from "../../services/contact.service";

type FormStatus = {
  type: "success" | "error";
  message: string;
} | null;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>(null);
  const statusTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showFormStatus = (status: FormStatus) => {
    if (statusTimerRef.current) {
      clearTimeout(statusTimerRef.current);
    }

    setFormStatus(status);

    statusTimerRef.current = setTimeout(() => {
      setFormStatus(null);
    }, 5000);
  };

  useEffect(() => {
    return () => {
      if (statusTimerRef.current) {
        clearTimeout(statusTimerRef.current);
      }
    };
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      location: String(formData.get("location") || ""),
      budget: String(formData.get("budget") || ""),
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      setIsSubmitting(true);
      setFormStatus(null);

      await submitContactForm(payload);

      showFormStatus({
        type: "success",
        message: "Message sent successfully! I will contact you soon.",
      });

      form.reset();
    } catch (error) {
      showFormStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-[82px] min-h-[calc(100vh-82px)] overflow-hidden bg-[#1B242E] pt-4 pb-20 text-white sm:pt-6 sm:pb-24 lg:pt-8 lg:pb-28"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] lg:gap-20">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <h2 className="whitespace-normal text-[27px] font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-[34px] md:text-[38px] lg:whitespace-nowrap lg:text-[40px] xl:text-[42px]">
              Let&apos;s discuss your Project
            </h2>

            <p className="mx-auto mt-5 max-w-[500px] text-[15px] font-medium leading-7 text-[#AAB3BE] sm:text-[17px] sm:leading-8 lg:mx-0">
              I&apos;m available for freelance work. Drop me a line if you have
              a project you think I&apos;d be a good fit for.
            </p>

            {/* Desktop contact info */}
            <div className="mt-10 hidden max-w-[390px] gap-5 lg:grid">
              {contactInfo.map((item) => (
                <ContactInfoCard
                  key={item.id}
                  label={item.label}
                  value={item.value}
                  icon={item.icon}
                />
              ))}
            </div>

            {/* Desktop social icons */}
            <div className="mt-4 hidden gap-5 lg:flex">
              {contactSocialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.id}
                    href={item.href}
                    aria-label={item.label}
                    className="flex h-9 w-9 items-center justify-center rounded-md text-[#9D22F2] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#9D22F2] hover:text-white"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right form */}
          <div className="flex flex-col">
            <p className="order-2 mx-auto mt-8 max-w-[680px] text-center text-[15px] font-medium leading-7 text-[#AAB3BE] sm:text-[17px] sm:leading-8 lg:order-1 lg:mx-0 lg:mt-0 lg:text-left">
              I&apos;m always open to discussing product design work or
              partnership opportunities.
            </p>

            <form
              onSubmit={handleSubmit}
              className="order-1 mt-0 space-y-5 lg:order-2 lg:mt-7"
            >
              <input
                type="text"
                name="name"
                required
                minLength={2}
                maxLength={80}
                placeholder="Name*"
                className="w-full border-0 border-b border-white/15 bg-transparent px-0 pb-2.5 text-[16px] font-semibold text-white outline-none transition-colors placeholder:text-[#7D8794] focus:border-[#9D22F2] sm:text-[17px]"
              />

              <input
                type="email"
                name="email"
                required
                maxLength={120}
                placeholder="Email*"
                className="w-full border-0 border-b border-white/15 bg-transparent px-0 pb-2.5 text-[16px] font-semibold text-white outline-none transition-colors placeholder:text-[#7D8794] focus:border-[#9D22F2] sm:text-[17px]"
              />

              <input
                type="text"
                name="location"
                required
                minLength={2}
                maxLength={120}
                placeholder="Location*"
                className="w-full border-0 border-b border-white/15 bg-transparent px-0 pb-2.5 text-[16px] font-semibold text-white outline-none transition-colors placeholder:text-[#7D8794] focus:border-[#9D22F2] sm:text-[17px]"
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <input
                  type="text"
                  name="budget"
                  required
                  maxLength={80}
                  placeholder="Budget*"
                  className="w-full border-0 border-b border-white/15 bg-transparent px-0 pb-2.5 text-[16px] font-semibold text-white outline-none transition-colors placeholder:text-[#7D8794] focus:border-[#9D22F2] sm:text-[17px]"
                />

                <input
                  type="text"
                  name="subject"
                  required
                  minLength={3}
                  maxLength={150}
                  placeholder="Subject*"
                  className="w-full border-0 border-b border-white/15 bg-transparent px-0 pb-2.5 text-[16px] font-semibold text-white outline-none transition-colors placeholder:text-[#7D8794] focus:border-[#9D22F2] sm:text-[17px]"
                />
              </div>

              <textarea
                name="message"
                required
                minLength={10}
                maxLength={2000}
                rows={2}
                placeholder="Message*"
                className="w-full resize-none border-0 border-b border-white/15 bg-transparent px-0 pb-2.5 text-[16px] font-semibold text-white outline-none transition-colors placeholder:text-[#7D8794] focus:border-[#9D22F2] sm:text-[17px]"
              />

              <div className="flex justify-start max-[992px]:justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-3 rounded-md bg-gradient-to-r from-purple-600 to-fuchsia-500 px-7 py-3 text-[15px] font-extrabold text-white shadow-[0_18px_45px_rgba(157,34,242,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_55px_rgba(157,34,242,0.45)] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                  <Send size={20} />
                </button>
              </div>

              {formStatus && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`rounded-lg border px-4 py-3 text-center text-[14px] font-bold sm:text-[15px] ${
                    formStatus.type === "success"
                      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                      : "border-red-500/30 bg-red-500/10 text-red-300"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}
            </form>

            {/* Tablet + mobile contact info */}
            <div className="order-3 mx-auto mt-9 grid w-full max-w-[900px] grid-cols-1 gap-4 sm:grid-cols-3 lg:hidden">
              {contactInfo.map((item) => (
                <ContactInfoCard
                  key={item.id}
                  label={item.label}
                  value={item.value}
                  icon={item.icon}
                />
              ))}
            </div>

            {/* Tablet + mobile social icons */}
            <div className="order-4 mt-8 flex justify-center gap-5 lg:hidden">
              {contactSocialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.id}
                    href={item.href}
                    aria-label={item.label}
                    className="flex h-9 w-9 items-center justify-center rounded-md text-[#9D22F2] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#9D22F2] hover:text-white"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
