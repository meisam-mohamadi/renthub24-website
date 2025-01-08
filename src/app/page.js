import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <img
        src="/images/under_construction.png"
      />
      <h3 style={{lineHeight:5}}>We are doing important maintenance work on the website and will be back shortly. We apologise for any inconvenience caused</h3>
      <h4>The RentHub24 team appreciates your patience . </h4>
    </div>
  );
}
