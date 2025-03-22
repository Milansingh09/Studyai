import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const FeatureCard = ({ feature, setLoading }) => (
  <Card className="feature-card">
    <CardHeader>
      <CardTitle className="flex items-center">
        {feature.icon}
        <span className="ml-2">{feature.title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      {feature.content(setLoading)}
    </CardContent>
  </Card>
);
