declare module '@tensorflow-models/mobilenet' {
    interface ClassificationResult {
      className: string;
      probability: number;
    }
  }
  
declare module '@tensorflow-models/coco-ssd' {
    interface ClassificationResult {
      className: string;
      probability: number;
    }
  }
  