import { Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const features = [
  {
    title: "PDF Analyzer",
    icon: <Upload className="text-red-500" />,
    content: (setLoading) => (
      <>
        <p className="text-gray-600 mb-4">Upload your study materials and get AI-generated insights.</p>
        <Input type="file" accept=".pdf" onChange={() => {
          setLoading(true);
          setTimeout(() => setLoading(false), 2000);
        }} className="hidden" id="pdf-upload" />
        <Label htmlFor="pdf-upload" className="block w-full text-center bg-gray-100 p-4 rounded-lg cursor-pointer hover:bg-gray-200">
          Upload PDF
        </Label>
      </>
    ),
  },
];
