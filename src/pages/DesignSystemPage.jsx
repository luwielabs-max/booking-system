import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import GlassCard from "../components/ui/GlassCard";
import Section from "../components/layout/Section";
import FadeIn from "../components/motion/FadeIn";
import StaggerContainer from "../components/motion/StaggerContainer";
import Magnetic from "../components/motion/Magnetic";
import GradientOrb from "../components/ui/GradientOrb";


const DesignSystemPage = () => {
  return (

   <Section>

  <div
    style={{
      minHeight: "100vh",

      display: "flex",

      flexDirection: "column",

      gap: "3rem",
    }}
  >

    {/* PAGE TITLE */}

    <div>

      <h1
        style={{
          fontSize: "3rem",

          fontWeight: 600,

          marginBottom: "0.8rem",
        }}
      >
        Design System
      </h1>

      <p
        style={{
          color: "#71717A",

          fontSize: "1rem",
        }}
      >
        Premium reusable frontend components
        and motion system for Booker.
      </p>

    </div>

    <GradientOrb></GradientOrb>

    {/* BUTTONS */}
    <StaggerContainer>
<FadeIn delay={0.4}>
    <GlassCard>

      <h2
        style={{
          marginBottom: "1.5rem",
        }}
      >
        Buttons
      </h2>

      <div
        style={{
          display: "flex",

          gap: "1rem",

          flexWrap: "wrap",
        }}
      >
<Magnetic>
        <Button>
          Primary Button
        </Button>
        </Magnetic>

        <Button variant="secondary">
          Secondary Button
        </Button>

        <Button size="sm">
          Small Button
        </Button>

        <Button size="lg">
          Large Button
        </Button>

      </div>

    </GlassCard>

    </FadeIn>
    </StaggerContainer>

    {/* INPUTS */}

    <GlassCard>

      <h2
        style={{
          marginBottom: "1.5rem",
        }}
      >
        Inputs
      </h2>

      <div
        style={{
          maxWidth: "400px",
        }}
      >

        <Input
          placeholder="Email Address"
          type="email"
        />

      </div>

    </GlassCard>

    {/* SURFACE */}

    <GlassCard>

      <h2
        style={{
          marginBottom: "1rem",
        }}
      >
        Premium Surface
      </h2>

      <p
        style={{
          lineHeight: 1.7,

          color: "#52525B",
        }}
      >
        This reusable glass card system will
        power dashboards, CRM panels,
        analytics, booking flows, settings,
        pricing sections, and future AI
        interfaces inside Booker.
      </p>

    </GlassCard>

  </div>

</Section>
    
  );
};

export default DesignSystemPage;
