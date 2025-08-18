"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader } from "./card";
import { Badge } from "./badge";
import { cn } from "@/lib/cn";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  href: string;
  badges?: string[];
  className?: string;
}

export function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  href, 
  badges = [],
  className 
}: ServiceCardProps) {
  return (
    <Card className={cn("h-full group cursor-pointer", className)}>
      <Link href={href} className="block h-full">
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="rounded-xl bg-primary-50 p-3 group-hover:bg-primary-100 transition-colors">
                <Icon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-base-900">{title}</h3>
            </div>
            <ArrowRight className="h-5 w-5 text-base-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
          </div>
          
          {badges.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {badges.map((badge, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {badge}
                </Badge>
              ))}
            </div>
          )}
        </CardHeader>
        
        <CardContent className="space-y-4">
          <p className="text-base-600 leading-relaxed">{description}</p>
          
          <ul className="space-y-2">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-base-700">
                <CheckCircle className="h-4 w-4 text-success-500 mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
      </Link>
    </Card>
  );
}