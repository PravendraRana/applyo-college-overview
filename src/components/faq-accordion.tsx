"use client"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqData } from "@/data/faqs"

export function FAQAccordion() {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Frequently Asked Question(s)</h3>
      <p className="text-sm text-gray-600 mb-4">Your questions, answered.</p>

      <Accordion type="single" collapsible className="space-y-2">
        {faqData.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
            <AccordionTrigger className="text-left hover:no-underline">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-6 px-2 bg-blue-50 flex items-center justify-between">
        <div className="mb-4">
          <h4 className="font-medium text-blue-600 mb-2">Still have questions?</h4>
          <p className="text-sm text-gray-600">Can't find what you're looking for? Let us help you.</p>
        </div>
        <Button className="bg-blue-600 text-white">Get in touch</Button>
      </div>
    </div>
  )
}
