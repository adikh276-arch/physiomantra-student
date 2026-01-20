import Logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <img src={Logo} alt="PhysioMantra" className="h-10" />
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} PhysioMantra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
