import { Button } from "@/components/ui/button";
import { SignIn } from "./(auth)/sign-in";
import SignOut from "./(auth)/sign-out";
import Logo from "@/components/Logo";
import { ModeToggle } from "@/components/ModeToggle";
 

export default function Home() {
  return (
    <main>
      <h1> hi prashant</h1>
      <Button>Click me</Button>
      <SignIn />
      <SignOut />
      <Logo />
      <ModeToggle />
     
    </main>
  );
}
