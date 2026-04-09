CREATE TABLE public.early_access_emails (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.early_access_emails ENABLE ROW LEVEL SECURITY;

-- Anyone can sign up (insert)
CREATE POLICY "Anyone can submit early access email"
  ON public.early_access_emails
  FOR INSERT
  WITH CHECK (true);

-- No public reads - admin only via service role
CREATE POLICY "No public reads"
  ON public.early_access_emails
  FOR SELECT
  USING (false);