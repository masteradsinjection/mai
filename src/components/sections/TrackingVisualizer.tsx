"use client";

import React, { useState } from "react";
import { ShieldCheck, Server, Globe, Database, ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PipelineNode {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  status: string;
  details: string[];
}

export function TrackingVisualizer() {
  const [activeNode, setActiveNode] = useState<string>("server");

  const nodes: PipelineNode[] = [
    {
      id: "browser",
      title: "1. Client Browser Interaction",
      subtitle: "First-Party Webpage",
      icon: <Globe className="w-5 h-5 text-blue-600" />,
      status: "Ad-Blocker Proof",
      details: [
        "Lightweight GTM client script loads from your own custom subdomain (e.g. data.yourdomain.com).",
        "Captures user actions (add_to_cart, lead_submit, purchase) in standardized Data Layer format.",
        "Zero bulky third-party vendor tracking scripts loaded on the user's browser, maximizing Core Web Vitals.",
      ],
    },
    {
      id: "server",
      title: "2. Server GTM (Cloud Run)",
      subtitle: "Secure First-Party Cloud",
      icon: <Server className="w-5 h-5 text-blue-600" />,
      status: "First-Party Context",
      details: [
        "Container operates under your own domain with HTTP-only secure cookies that bypass Safari ITP 7-day truncation.",
        "PII Scrubbing: Automatic SHA-256 normalization and hashing of customer email, phone, and address.",
        "Event Deduplication: Synchronizes unique event_id to prevent double-counting across browser and server.",
      ],
    },
    {
      id: "destinations",
      title: "3. Direct Server-to-Server APIs",
      subtitle: "High-Fidelity Ad Platforms",
      icon: <Database className="w-5 h-5 text-blue-600" />,
      status: "99.4% Signal Integrity",
      details: [
        "Meta Conversions API (CAPI): Direct dispatch delivering 9.0+ Event Match Quality score.",
        "Google Ads Enhanced Conversions: Accurate offline and cross-device conversion attribution.",
        "GA4 & BigQuery: Permanent, un-sampled raw event streaming for first-party data ownership.",
      ],
    },
  ];

  const currentNode = nodes.find((n) => n.id === activeNode) || nodes[1];

  return (
    <div className="w-full rounded-2xl bg-slate-900 text-white p-6 md:p-8 shadow-floating">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-blue-400">
            Interactive Architecture Inspector
          </span>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mt-1">
            How MAI Server-Side Tracking Restores Lost Ad Signals
          </h3>
          <p className="text-xs md:text-sm text-slate-400 mt-1">
            Click on each pipeline node to inspect how data flows securely from visitor interaction to ad algorithms.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/60">
            <ShieldCheck className="w-3.5 h-3.5" />
            Consent Mode v2 Compliant
          </span>
        </div>
      </div>

      {/* Nodes Selector */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 my-6">
        {nodes.map((node) => {
          const isSelected = activeNode === node.id;
          return (
            <button
              key={node.id}
              type="button"
              onClick={() => setActiveNode(node.id)}
              className={cn(
                "p-4 rounded-xl text-left border transition-all duration-300 cursor-pointer relative hover:-translate-y-0.5",
                isSelected
                  ? "bg-slate-800/90 border-blue-500 shadow-md ring-1 ring-blue-500/50 scale-[1.01]"
                  : "bg-slate-950/50 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40"
              )}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="p-2 rounded-lg bg-blue-950/80 border border-blue-900/60 transition-transform group-hover:scale-105">
                  {node.icon}
                </div>
                <span className="text-[11px] font-mono font-medium text-blue-300 bg-blue-950/60 px-2 py-0.5 rounded">
                  {node.status}
                </span>
              </div>
              <h4 className="font-semibold text-sm text-white">{node.title}</h4>
              <p className="text-xs text-slate-400 mt-0.5">{node.subtitle}</p>
              {isSelected && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-800 rotate-45 border-b border-r border-blue-500 hidden md:block" />
              )}
            </button>
          );
        })}
      </div>

      {/* Node Details Inspection Card */}
      <div key={currentNode.id} className="p-5 md:p-6 rounded-xl bg-slate-800/60 border border-slate-700/80 animate-fade-in">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-1.5 rounded-md bg-blue-600 text-white">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-mono uppercase tracking-wider text-blue-300">
            Pipeline Stage Specifications // {currentNode.title}
          </span>
        </div>

        <ul className="space-y-2.5">
          {currentNode.details.map((detail, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300">
              <ArrowRight className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
