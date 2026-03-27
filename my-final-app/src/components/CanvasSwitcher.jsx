import React, { useState, useEffect, useRef } from "react";
import { Button } from "flowbite-react";

export default function CanvasSwitcher() {
  const [step, setStep] = useState(1);
  const canvasRef = useRef(null);
  const TOTAL_STEPS = 2;

  // Canvas drawing configurations
  const configs = {
    1: {
      bgColor: "#0ea5e9",
      text: "What do you think?",
      description: "Reflections and Insights",
      fontSize: 28,
      fontStyle: "bold Arial",
      
    },
    2: {
      bgColor: "#4821d4",
      text: "Any questions or suggestions?",
      description: "Reflections and Insights",
      fontSize: 20,
      fontStyle: "bold Arial",
    },
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const config = configs[step];

    // Clear previous drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background
    ctx.fillStyle = config.bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw text
    ctx.fillStyle = "#ffffff";
    // ctx.font = "bold 28px Arial";
    ctx.textAlign = "center";
    ctx.fillText(config.text, canvas.width / 2, canvas.height / 2 - 20);

    // Draw step indicator
    ctx.font = "16px Arial";
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    ctx.fillText(
      `Step ${step} of ${TOTAL_STEPS}`,
      canvas.width / 2,
      canvas.height / 2 + 30
    );
  }, [step]);

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8">
      {/* Canvas Container */}
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          {configs[step].description}
        </h2>
        <canvas
          ref={canvasRef}
          width={400}
          height={300}
          className="border-4 border-blue-500 rounded-lg shadow-lg dark:border-blue-400"
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 items-center">
        {step > 1 && (
          <Button
            color="gray"
            size="lg"
            pill
            onClick={() => setStep(step - 1)}
            aria-label={`Go to canvas step ${step - 1}`}
          >
            ← Previous
          </Button>
        )}

        {/* Step Indicator */}
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full">
          <span className="font-semibold text-gray-800 dark:text-white">
            {step} / {TOTAL_STEPS}
          </span>
        </div>

        {step < TOTAL_STEPS && (
          <Button
            color="blue"
            size="lg"
            pill
            onClick={() => setStep(step + 1)}
            aria-label={`Go to canvas step ${step + 1}`}
          >
            Next →
          </Button>
        )}
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-md bg-gray-300 dark:bg-gray-600 rounded-full h-2">
        <div
          className="bg-blue-500 dark:bg-blue-400 h-2 rounded-full transition-all duration-300"
          style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}