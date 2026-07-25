import FloatingHearts from "@/components/FloatingHearts";
import BirthdayMessage from "@/components/BirthdayMessage";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-blush to-rose-light/20 overflow-hidden">
      <FloatingHearts />
      <BirthdayMessage />
    </div>
  );
};

export default Index;
