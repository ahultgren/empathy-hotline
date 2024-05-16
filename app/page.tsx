import Image from "next/image";
import Intro from "./components/intro";
import { Row, Box } from "./components/grid";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <section>
      <Intro></Intro>
      <div className={styles.section} id="empathy">
        <Row>
          <Box>
            <h2 className={styles.heading}>Support when you need it</h2>
            <div className={styles.lead}>
              <p>
                Do you wish your therapist or coach were available <em>now</em>,
                when you’re actually struggling? Would you like to talk about
                what you're going through when it is actually happening instead
                of saving it for an appointment next week?
              </p>
              <p>
                Often times I don’t need an expert to figure things out for me;
                I just need someone who listens and understands what I’m
                experiencing in this moment. I can be that someone for you.
              </p>
              <p>
                Welcome to the Empathy Hotline! Any problem, big or small, seems
                lighter when understood by someone else. That dreadful
                application you need to send today can turn into a fun mission.
                A vague stress and anxiety can become clear and manageable. And
                to be heard when overwhelmed by a sudden loss or setback can
                transform despair into a sweet mourning. That’s the magic of
                empathy.
              </p>
            </div>
          </Box>
          <Box>
            <Image
              src="/images/listening.jpg"
              className="img-responsive"
              alt="A person listening"
              width="500"
              height="500"
            ></Image>
          </Box>
        </Row>
      </div>
    </section>
  );
}
