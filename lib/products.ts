export type Variant = {
  id: string
  contents: string
  price: number
}

export type Product = {
  id: string
  name: string
  contents: string
  price: number
  category: 'Research Material' | 'Research Blend'
  description: string
  variants?: Variant[]
}

export const products: Product[] = [
  {
    id: 'RT-3-10',
    name: 'Retatrutide',
    contents: '10 mg',
    price: 99,
    category: 'Research Material',
    description: 'Research-use-only material. Not for human or veterinary use.',
    variants: [
      { id: 'RT-3-10', contents: '10 mg', price: 99 },
      { id: 'RT-3-20', contents: '20 mg', price: 159 },
    ],
  },
  {
    id: 'TRZ-2-10',
    name: 'Tirzepatide',
    contents: '10 mg',
    price: 94,
    category: 'Research Material',
    description: 'Research-use-only material. Not for human or veterinary use.',
    variants: [
      { id: 'TRZ-2-10', contents: '10 mg', price: 94 },
      { id: 'TRZ-2-20', contents: '20 mg', price: 149 },
    ],
  },
  { id: 'NAD-1-500', name: 'NAD+', contents: '500 mg', price: 89, category: 'Research Material', description: 'Research-use-only material. Not for human or veterinary use.' },
  { id: 'GHK-1-50', name: 'GHK-Cu', contents: '50 mg', price: 69, category: 'Research Material', description: 'Research-use-only material. Not for human or veterinary use.' },
  { id: 'GV-1', name: 'VOIÉLA Research Blend', contents: 'GHK-Cu 50 mg + BPC-157 10 mg + TB-500 10 mg', price: 99, category: 'Research Blend', description: 'Research-use-only blend. Not for human or veterinary use.' },
]
