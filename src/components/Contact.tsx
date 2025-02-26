
export const Contact = () => {
  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-6">
          Get in Touch
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
        <p className="text-accent-foreground/80 mb-8 max-w-lg mx-auto">
          Have a project in mind? I'd love to help bring your ideas to life.
        </p>
        <a
          href="mailto:your-email@example.com"
          className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};
