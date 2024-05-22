import Image from "next/image";
import Intro from "./components/intro";
import { Row, Box } from "./components/grid";
import styles from "./page.module.scss";
import Button from "./components/button";
import {
  faBullhorn,
  faEnvelope,
  faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Testimonial from "./components/testimonial";

export default function Home() {
  return (
    <main>
      <Intro></Intro>
      <section
        className={[
          styles.section,
          styles.sectionLight,
          styles.sectionQuote,
        ].join(" ")}
      >
        <Row>
          <Box>
            <p>
              “When someone really hears you without passing judgment on you,
              without trying to take responsibility for you, without trying to
              mold you, it feels damn good.”
              <br />— Carl Rogers
            </p>
          </Box>
        </Row>
      </section>
      <section className={styles.section} id="empathy">
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
      </section>
      <section className={styles.section} id="how">
        <Row>
          <Box>
            <h2 className={styles.heading}>How does it work?</h2>
            <div className={styles.lead}>
              <p>
                As with any hotline you don’t make an appointment; just call me
                when you need it, and I’ll be there for you. A session is free
                (see how this works below) and lasts up to 20 minutes. You may
                call as many times as you want.
              </p>
              <p>
                <Button
                  href="https://wa.me/34607033122"
                  icon={faWhatsapp}
                  iconColor="#25d366"
                >
                  Call me now
                </Button>
              </p>
              <p>
                To start with I’ll be available for two hours in a day, as shown
                in the schedule <span className="hidden-xs">to the right</span>
                <span className="visible-xs-inline">below</span> and in my
                WhatsApp profile. Feel free to call any time during these hours.
              </p>
            </div>
          </Box>
          <Box>
            <Image
              src="/images/calendar.png"
              className="img-responsive"
              alt="My schedule"
              width="500"
              height="500"
            ></Image>
          </Box>
        </Row>
      </section>
      <section className={styles.section} id="who">
        <Row>
          <Box>
            <h2 className={styles.heading}>Who am I?</h2>
            <div className={styles.lead}>
              <p>
                I am a completely uncertified counselor, mediator, facilitator,
                gestalt practitioner, coach, and, perhaps first and foremost,
                human companion. In fact, I like to say “don’t believe anything
                I say — find out for yourself!” My many years of work on myself
                is what drives me to want to support others. Having spent a
                lifetime specializing in shutting down in order to avoid being
                vulnerable, guessing other people’s expectations, and
                second-guessing my own intentions, I'm by now fairly experienced
                in welcoming feelings of hopelessness, anxiety, and lack of
                motivation.
              </p>
            </div>
          </Box>
          <Box>
            <h2 className={styles.heading}>My training</h2>
            <div className={styles.lead}>
              <ul>
                <li>NVC Intermediate Course — Orianne Boyer</li>
                <li>Conflict to Connection — John Kinyon</li>
                <li>NVC Advanced course — Yoram Mosenzon</li>
                <li>Embodying & Teaching NVC Year Course — Yoram Mosenzon</li>
                <li>Mediation Year Course — Yoram Mosenzon</li>
                <li>Mediation Intensive — Yoram Mosenzon</li>
                <li>Embracing shame and vulnerability — Liv Larsson</li>
                <li>9-day International Intensive Training in NVC — CNVC</li>
                <li>Radical Honesty Practitioner Program — Honesty Europe</li>
              </ul>
            </div>
          </Box>
        </Row>
      </section>
      <div className={styles.section} id="support">
        <Row>
          <Box>
            <h2 className={styles.heading}>How you can support me</h2>
            <div className={styles.lead}>
              <p>
                At the moment I'm running this project entirely out of my own
                pocket, simply because I enjoy giving empathy. Thus you can
                always call for free. At the same time my dream is for this
                project to eventually run on a pay-it-forward basis. Therefore,
                after a call you have the possibility to give a donation in
                order to gift a session to someone else, but <em>only</em> if
                it's joyful for you to do so.
              </p>
              <p>
                You may of course also donate without having had a call
                yourself, if you simply wish to contribute to this chain of
                freely giving and receiving empathy.
              </p>
              <p>
                <Button
                  href="https://www.buymeacoffee.com/ahultgren"
                  icon={faHandHoldingHeart}
                  iconColor="#d00"
                >
                  Gift someone a session
                </Button>
              </p>
            </div>
          </Box>
          <Box>
            <Image
              src="/images/free-hugs.jpg"
              className="img-responsive"
              alt="Three people offering free hugs"
              width="500"
              height="500"
            ></Image>
          </Box>
        </Row>
      </div>
      <section className={styles.section} id="testimonials">
        <Row>
          <h2 className={styles.heading}>What others have to say</h2>
        </Row>
        <Row>
          <Box>
            <Testimonial by="Nadine">
              I found myself very stuck in my emotions and I couldn’t really
              tell what was happening – I just felt so overwhelmed and didn’t
              know what to do. In Andreas I found someone who was able to hold
              space, ask the right questions for me to actually move through my
              emotions and become aware of what was really going on beneath the
              surface. This session was so helpful to move and release my
              emotions and getting clear what was going on inside of me – I felt
              so much better afterwards.
            </Testimonial>
          </Box>
          <Box>
            <Testimonial by="Joris">
              I had a fight with my girlfriend, on the same topic as so many
              times before. Stuck. Andreas supported both of us, through a
              combination of individual conversations with him and talks
              together. He is empathic, clear and warm, and helped us to
              disentangle emotions, facts and narratives. When we got into
              fighting territory, he slowed us back down, helping us to find the
              underlying pain and express that, instead of accusing each other.
              Recommended!
            </Testimonial>
          </Box>
          <Box>
            <Testimonial by="Elia">
              In a way, I think one of the most supporting things that I found
              from you was just hearing whatever came to your mind, actually
              bringing yourself in as you and not just as an empty ‘mediator’.
              Bringing your perception and honesty.
            </Testimonial>
          </Box>
        </Row>
      </section>
      <section
        className={[styles.section, styles.contact].join(" ")}
        id="contact"
      >
        <Row>
          <Box>
            <p>
              Do you want to go deeper than what’s possible in a free 20 minutes
              call? In addition to empathic listening I’m also available for
              coaching, relationship counseling, conflict mediation,
              communication workshops, and group decision facilitation. Contact
              me to schedule a free get-to-know-each-other call, or sign-up for
              my newsletter to get updated when I have more offers.
            </p>
          </Box>
          <Box>
            <Button href="me@andreashultgren.se" icon={faEnvelope}>
              me@andreashultgren.se
            </Button>
            <Button
              href="https://forms.gle/UYpPw8D6nWTbdPMc8"
              icon={faBullhorn}
            >
              Subscribe to updates
            </Button>
          </Box>
        </Row>
      </section>
    </main>
  );
}
