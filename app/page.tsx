import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { tv } from 'tailwind-variants';
import Hero from "./(partial)/hero";
import UsersBoard from "./(partial)/users_board";
import Howitworks from "./(partial)/howitworks";
import Recommendations from "./(partial)/recommendations";
import Features from "./(partial)/features";
import Pricing from "./(partial)/pricing";
import Review from "./(partial)/review";
import Start from "./(partial)/start";
import Footer from "./(partial)/footer";


export default function Home() {



	return (
		<>
			<Hero/>
			<UsersBoard />
			<Howitworks />
			<Recommendations />
			<Features />
			<Pricing />
			<Review />
			{/* FAQ */}
			<Start />
			<section><div className="mx-auto max-w-6xl px-4 sm:px-6"><div className="py-4 text-sm text-gray-500"><p>*The HARO® and Help a Reporter Out® trademarks are owned by Cision US Inc. PressPulse.ai is neither affiliated with nor endorsed by Cision Us Inc.</p></div></div></section>
			<Footer />
		</>
		
	);
}
