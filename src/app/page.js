import Image from "next/image";
import styles from "./page.module.css";
import Reviews from "./Reviews";

export default function ReviewPage() {
  return (
    <div class="bg-[#FFF1E8] relative flex items-center justify-center min-h-screen px-8 py-[112px] lg:px-[135px]">
      <div
        class="fixed top-0 right-0 w-[415px] h-[415px] z-0 bg-no-repeat bg-center bg-cover transform translate-x-1/2"
        style={{ backgroundImage: "url('/graphics/Accent.svg')" }}
      ></div>
      <div
        class="fixed bottom-0 left-0 w-[415px] h-[415px] z-0 bg-no-repeat bg-center bg-cover transform -translate-x-1/2"
        style={{ backgroundImage: "url('/graphics/Accent.svg')" }}
      ></div>
      <div className="relative z-10">
        <Reviews />
      </div>
    </div>
  );
}
