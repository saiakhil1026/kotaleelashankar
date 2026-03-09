"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { EDUCATION, CERTIFICATIONS } from "@/data/constants";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="min-h-screen max-w-7xl mx-auto pb-20">
      <SectionHeader id="contact" className="relative mb-14" title={
        <>
          EDUCATION & <br className="hidden md:block" />
          CERTIFICATIONS
        </>} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 z-[9999] mx-4 mt-10 md:mt-20">

        {/* Education Column */}
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-bold tracking-tight text-primary mb-2 flex items-center gap-2">
            🎓 Education
          </h3>
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start gap-4">
                    <CardTitle className="text-xl font-bold">{edu.degree}</CardTitle>
                    <Badge variant="secondary" className="whitespace-nowrap font-mono">{edu.startDate} - {edu.endDate}</Badge>
                  </div>
                  <div className="text-muted-foreground font-medium">{edu.institution}</div>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="text-sm font-normal bg-secondary/30">{edu.score}</Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications Column */}
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-bold tracking-tight text-primary mb-2 flex items-center gap-2">
            🏆 Achievements
          </h3>
          <div className="flex flex-col gap-4">
            {CERTIFICATIONS.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl py-4 px-6 shadow-sm hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all border-l-4 border-l-primary flex items-center gap-4">
                  <div className="text-2xl shrink-0 leading-none">🎖️</div>
                  <p className="text-foreground font-medium leading-relaxed">{cert}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};
export default ContactSection;
