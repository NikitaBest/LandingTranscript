import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Documents from "@/pages/Documents";
import DocumentDetail from "@/pages/DocumentDetail";
import CookieBanner from "@/components/CookieBanner";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/documents/:slug" component={DocumentDetail} />
      <Route path="/documents" component={Documents} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Router />
      <CookieBanner />
    </TooltipProvider>
  );
}

export default App;
