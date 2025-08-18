import * as React from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "./card";
import { cn } from "@/lib/cn";

interface TestimonialProps {
  quote: string;
  author: string;
  location: string;
  rating: number;
  className?: string;
}

export function Testimonial({ 
  quote, 
  author, 
  location, 
  rating = 5,
  className 
}: TestimonialProps) {
  const initials = author
    .split(' ')
    .map(name => name[0])
    .join('')
    .toUpperCase();

  return (
    <Card className={cn("h-full", className)}>
      <CardContent className="p-6 space-y-4">
        {/* Rating */}
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={cn(
                "h-4 w-4",
                i < rating 
                  ? "text-yellow-400 fill-yellow-400" 
                  : "text-base-300"
              )} 
            />
          ))}
        </div>
        
        {/* Quote */}
        <blockquote className="text-base-700 italic leading-relaxed">
          "{quote}"
        </blockquote>
        
        {/* Author */}
        <div className="flex items-center space-x-3 pt-2">
          <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-primary-700">
              {initials}
            </span>
          </div>
          <div>
            <div className="font-semibold text-base-900">{author}</div>
            <div className="text-sm text-base-600">{location}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}