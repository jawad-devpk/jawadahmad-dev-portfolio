import Container from "../common/Container";
import { siteInfo } from "../../data/siteInfo";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b1018] py-8 text-white">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-lg font-bold">Dev. {siteInfo.name}</h2>
            <p className="mt-1 text-sm text-gray-400">
              Modern web developer portfolio.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} {siteInfo.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
