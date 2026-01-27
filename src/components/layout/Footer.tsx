import { Link } from "react-router-dom";
import { 
  Cross, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Instagram,
  Facebook,
  Youtube
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Parish Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent">
                <Cross className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold">
                  Paróquia São Paulo
                </h3>
                <p className="text-sm opacity-80">Apóstolo</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Uma comunidade de fé, oração e serviço no coração do Jardim São Paulo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Navegação
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Início", href: "/" },
                { name: "Sobre a Paróquia", href: "/sobre" },
                { name: "Missas e Sacramentos", href: "/missas-sacramentos" },
                { name: "Agenda Paroquial", href: "/agenda" },
                { name: "Notícias", href: "/noticias" },
                { name: "Contato", href: "/contato" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 opacity-80 flex-shrink-0" />
                <span className="text-sm opacity-80">
                  Av. José Higino Neves, 1075<br />
                  Jardim São Paulo (Zona Leste)<br />
                  São Paulo - SP, 08461-650
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 opacity-80 flex-shrink-0" />
                <a 
                  href="tel:+551125553970" 
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  (11) 2555-3970
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 opacity-80 flex-shrink-0" />
                <a 
                  href="mailto:contato@saopauloapostolo.com.br" 
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  contato@saopauloapostolo.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Mass Times */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Horários das Missas
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5 opacity-80 flex-shrink-0" />
                <div className="text-sm opacity-80">
                  <p className="font-medium opacity-100">Domingos (Matriz)</p>
                  <p>7h e 19h</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5 opacity-80 flex-shrink-0" />
                <div className="text-sm opacity-80">
                  <p className="font-medium opacity-100">Segunda (Almas)</p>
                  <p>20h</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5 opacity-80 flex-shrink-0" />
                <div className="text-sm opacity-80">
                  <p className="font-medium opacity-100">Terça, Sexta e Quarta</p>
                  <p>10h (Ter/Sex) | 19h30 (Qua)</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/paroquiaspaguaianases"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/p/Par%C3%B3quia-S%C3%A3o-Paulo-Ap%C3%B3stolo-Guaianases-100073569917650"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/paroquia"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm opacity-60 text-center">
              © {new Date().getFullYear()} Paróquia São Paulo Apóstolo. 
              Todos os direitos reservados.
            </p>
            <Link to="/admin/login" className="text-xs opacity-40 hover:opacity-100 transition-opacity">
              Acesso Administrativo
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
