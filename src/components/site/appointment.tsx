'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactInfo, services } from "./data";

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, "Please enter your first name"),
  lastName: z
    .string()
    .min(2, "Please enter your last name"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().min(1, "Please choose a service"),
  preferredDate: z.string().min(1, "Please choose a date"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function Appointment() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      service: "",
      preferredDate: "",
      message: "",
    },
  });

  const serviceValue = watch("service");

  const onSubmit = async (data: FormValues) => {
    // Simulate a brief network roundtrip so the loader shows
    await new Promise((resolve) => setTimeout(resolve, 900));
    // In production this would POST to /api/appointment
    // For now we keep it client side and show confirmation
    console.log("Appointment request:", data);
    setSubmitted(true);
    reset();
  };

  const today = new Date();
  const minDate = new Date(today);
  minDate.setDate(today.getDate() + 1);
  const minDateStr = minDate.toISOString().split("T")[0];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* Left: info and contact */}
          <div className="lg:col-span-2">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-accent">
              Get in touch
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Book a visit or ask a question
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Fill out the form and our front desk will call you back within
              one business day to confirm a time that works. Already a patient?
              You can also call us directly and we will fit you in.
            </p>

            <div className="mt-10 space-y-5">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-5 bg-background rounded-2xl border border-border hover:shadow-md transition-shadow"
                >
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="mt-1 font-semibold text-foreground leading-snug">
                      {item.value}
                    </p>
                    <p className="mt-0.5 text-sm text-muted-foreground leading-snug">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <div className="bg-background rounded-3xl border border-border p-7 lg:p-10 shadow-xl shadow-primary/10">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-accent/15 text-accent flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    Request received
                  </h3>
                  <p className="mt-3 text-muted-foreground max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. A member of our front desk
                    team will call you within one business day to confirm a
                    time that works. If this is a medical emergency, please
                    call 911 right away.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="mt-6 rounded-full border-primary/30 text-primary hover:bg-primary/5"
                  >
                    Send another request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="firstName" className="text-foreground">
                        First name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="Maria"
                        autoComplete="given-name"
                        className="rounded-lg"
                        {...register("firstName")}
                      />
                      {errors.firstName && (
                        <p className="text-xs text-destructive">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="lastName" className="text-foreground">
                        Last name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Gonzalez"
                        autoComplete="family-name"
                        className="rounded-lg"
                        {...register("lastName")}
                      />
                      {errors.lastName && (
                        <p className="text-xs text-destructive">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="phone" className="text-foreground">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 555-1234"
                        autoComplete="tel"
                        className="rounded-lg"
                        {...register("phone")}
                      />
                      {errors.phone && (
                        <p className="text-xs text-destructive">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-foreground">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        className="rounded-lg"
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="text-xs text-destructive">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="service" className="text-foreground">
                        Service needed
                      </Label>
                      <Select
                        value={serviceValue}
                        onValueChange={(val) => setValue("service", val, { shouldValidate: true })}
                      >
                        <SelectTrigger id="service" className="rounded-lg">
                          <SelectValue placeholder="Choose a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((s) => (
                            <SelectItem key={s.id} value={s.title}>
                              {s.title}
                            </SelectItem>
                          ))}
                          <SelectItem value="not-sure">
                            Not sure, please advise
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.service && (
                        <p className="text-xs text-destructive">
                          {errors.service.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="preferredDate" className="text-foreground">
                        Preferred date
                      </Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        min={minDateStr}
                        className="rounded-lg"
                        {...register("preferredDate")}
                      />
                      {errors.preferredDate && (
                        <p className="text-xs text-destructive">
                          {errors.preferredDate.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="message" className="text-foreground">
                      Anything we should know? <span className="text-muted-foreground font-normal">(optional)</span>
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us briefly what brings you in. New patients are welcome."
                      className="rounded-lg min-h-24 resize-none"
                      {...register("message")}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending request
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Request appointment
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center leading-relaxed">
                    By submitting this form you agree to be contacted by our
                    front desk. We never share your information. For medical
                    emergencies, call 911 instead of using this form.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
