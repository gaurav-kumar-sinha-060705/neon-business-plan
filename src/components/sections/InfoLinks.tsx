import { Link } from "react-router-dom";

const InfoLinks = () => {
  return (
    <section className="py-16 border-t border-border/20" aria-labelledby="neon-info-heading">
      <div className="container mx-auto px-4">
        <h2 id="neon-info-heading" className="text-2xl md:text-3xl font-display font-bold mb-6">NEON Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <article>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-foreground/80">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </article>
          <article>
            <h3 className="font-semibold mb-3">Legal & Policy</h3>
            <ul className="space-y-2 text-foreground/80">
              <li><Link to="/legal/shipping-returns" className="hover:text-primary transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/legal/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/legal/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </article>
          <article className="sm:col-span-2">
            <p className="text-muted-foreground">Elevating luxury with timeless design and modern innovation.</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default InfoLinks;
