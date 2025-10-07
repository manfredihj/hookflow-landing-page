
export function Footer() {
  return (
    <footer className="py-10 border-t mt-16">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-gray">© {new Date().getFullYear()} HookflowAI · All rights reserved</p>
        <div className="text-sm text-neutral-gray flex gap-4">
          <a href="/politicas" className="hover:underline">Políticas</a>
          <a href="/terminos" className="hover:underline">Términos</a>
          <a href="/contacto" className="hover:underline">Contacto</a>
        </div>
      </div>
    </footer>
  );
}
