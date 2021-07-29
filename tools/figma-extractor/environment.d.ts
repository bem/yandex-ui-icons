declare global {
  namespace NodeJS {
    interface ProcessEnv {
      FIGMA_TOKEN: string
      FIGMA_PROJECT: string
      FIGMA_DOCUMENT: string
    }
  }
}

export {}
