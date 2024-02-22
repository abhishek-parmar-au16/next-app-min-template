import "./page.css";
import Image from "next/image"; 
import Globe from "./globe.png";
import Phone from "./phone-call.png";
import AtTheRate from "./sign.png"
export default function HomePage() {
  return (
    <div class="card">
      <div class="img">
        <div id="rcorners1">Abhishek</div>
          <b>John Doe</b>
      </div>

      <div class="container">
        <h4>
        </h4>
        <p><Image class="tabler-icon-phone-call" src={AtTheRate} alt="At The Rate"  height="20"
                    width="20"/>{" "}Architect & Engineer</p>
        <p><Image class="tabler-icon-phone-call" src={Phone} alt="Phone"  height="20"
                    width="20"/>{" "}Architect & Engineer</p>
        <p><Image class="tabler-icon-phone-call" src={Globe} alt="Globe"  height="20"
                    width="20"/>{" "}Architect & Engineer</p>
      </div>
    </div>
  );
}
