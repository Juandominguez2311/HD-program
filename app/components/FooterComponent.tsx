"use client";
import Link from "next/link";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const styles = {
  body: {
    backgroundColor: "hsl(265,75%,50%)",
    color: "white",
  },
};

const Footer = () => (
  <footer
    style={styles.body}
    className="flex flex-col text-black-100  mt-5 border-t border-gray-100"
  >
    <div className=" p-3 px-4 gap-6 flex items-center justify-between">
      <div className="flex items-center relative">
        <Image src="/simplimuvLogo.png" alt="Logo" width={150} height={100} />
      </div>
      <div className="flex items-center gap-10 text-[1.5rem] px-2 hidden lg:flex justify-center">
        <div>
          <Link href="/">Bikes</Link>
        </div>

        <div>
          <Link href="/?item=2">Accessories</Link>
        </div>

        <div>
          <Link href="/">Apparel</Link>
        </div>
      </div>
      <div>
        <div className="flex items-end gap-10 text-[1.5rem] hidden lg:flex justify-end">
          <div>
            <InstagramIcon data-testid="InstagramIcon" />
          </div>
          <div>
            <FacebookIcon data-testid="FacebookIcon" />
          </div>
          <div>
            <TwitterIcon data-testid="TwitterIcon" />
          </div>
          <div>
            <YouTubeIcon data-testid="YouTubeIcon" />
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
