import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';
import React from 'react'

const MakeMoneyAccordion = () => {
  return (
    <>
		<Box px="20" w="full">
			<Accordion w="full">
				{faqsAccordionData.map((item, idx) => (
					<AccordionItem border="none">
						{({ isExpanded }) => (
							<>
								<h2>
									<AccordionButton>
										<Box flex="1" textAlign="left">
											{item.title}
										</Box>
										{isExpanded ? (
											<MinusIcon fontSize="12px" />
										) : (
											<AddIcon fontSize="12px" />
										)}
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>{item.desc}</AccordionPanel>
							</>
						)}
					</AccordionItem>
				))}
			</Accordion>
		</Box>
    </>
	);
}

export default MakeMoneyAccordion