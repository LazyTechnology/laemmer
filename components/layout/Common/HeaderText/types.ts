export type Props = {
  title: string
  accroche: string
  settings?: {
    spacing?: number,
    maxW?: number,
    heading?: {
      fontSize?: number|string,
      color?: string
    }
    text?: {
      fontSize?: number|string,
      color?: string
    }
  }
}
