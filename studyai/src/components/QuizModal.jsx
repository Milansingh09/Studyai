import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export const QuizModal = ({ showQuizModal, setShowQuizModal }) => (
  <Dialog open={showQuizModal} onOpenChange={setShowQuizModal}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Practice Quiz</DialogTitle>
      </DialogHeader>
      <div className="space-y-4">
        <Card>
          <CardContent className="pt-6">
            <p className="font-semibold mb-2">What is the main purpose of AI in education?</p>
            <RadioGroup>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option1" id="option1" />
                <Label htmlFor="option1">To replace teachers</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option2" id="option2" />
                <Label htmlFor="option2">To enhance learning experience</Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>
        <Button className="w-full" onClick={() => setShowQuizModal(false)}>Submit Quiz</Button>
      </div>
    </DialogContent>
  </Dialog>
);
