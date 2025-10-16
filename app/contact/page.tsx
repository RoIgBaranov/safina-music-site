import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Контакты — Safina Music School",
  description: "Запишитесь на пробный урок: напишите в WhatsApp. Карта и адрес школы.",
};

export default function ContactPage() {
  return (
    <section className="container-max py-14">
      <h1 className="section-title">Контакты</h1>
      <p className="text-gray-600 mt-2">
        Напишите нам — подберём удобное время уже на этой неделе.
      </p>

      {/* Клиентская форма вынесена в отдельный компонент */}
      <ContactForm />

      {/* Карта */}
      <div className="mt-10 rounded-2xl overflow-hidden border">
        {/* ЗАМЕНИ src на встраиваемую карту вашего адреса */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.098788805216!2d34.797980599999995!3d32.0124376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b4c6add71da9%3A0xd339b217ec4083c2!2sHaOrgim%201%2C%20Holon!5e0!3m2!1sru!2sil!4v1760587861679!5m2!1sru!2sil"
          height="360"
          className="w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}
