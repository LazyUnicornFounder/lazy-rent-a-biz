import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Loader2 } from "lucide-react";

interface EarlyAccessEmail {
  id: string;
  email: string;
  created_at: string;
}

const Admin = () => {
  const [emails, setEmails] = useState<EarlyAccessEmail[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmails = async () => {
      // This uses the anon key, which is blocked by RLS.
      // For a real admin panel you'd use auth + an admin role.
      // For now we use a service-role edge function.
      const { data, error } = await supabase.functions.invoke("get-early-access-emails");
      if (!error && data) {
        setEmails(data);
      }
      setLoading(false);
    };
    fetchEmails();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="py-24">
        <div className="container max-w-3xl">
          <h1 className="font-serif text-3xl text-foreground">Early Access Signups</h1>
          <p className="mt-2 text-text-secondary">
            {!loading && `${emails.length} email${emails.length !== 1 ? "s" : ""} collected`}
          </p>

          {loading ? (
            <div className="mt-12 flex justify-center">
              <Loader2 className="h-6 w-6 animate-spin text-text-muted" />
            </div>
          ) : emails.length === 0 ? (
            <p className="mt-12 text-center text-text-muted">No signups yet.</p>
          ) : (
            <div className="mt-8 rounded-xl border border-border bg-card">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Email</TableHead>
                    <TableHead className="text-right">Signed up</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {emails.map((entry) => (
                    <TableRow key={entry.id}>
                      <TableCell className="font-medium">{entry.email}</TableCell>
                      <TableCell className="text-right text-text-muted">
                        {new Date(entry.created_at).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Admin;
