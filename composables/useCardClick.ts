export const useCardClick = () => {
  const clickedCards = ref<Record<number, boolean>>({})
  const timeouts = ref<Record<number, NodeJS.Timeout>>({})

  const toggleCard = (index: number, revertDelay: number = 2000) => {
    // Toggle the state
    clickedCards.value[index] = !clickedCards.value[index]

    // Clear any existing timeout for this card
    if (timeouts.value[index]) {
      clearTimeout(timeouts.value[index])
    }

    // Auto-revert after delay if clicked
    if (clickedCards.value[index]) {
      timeouts.value[index] = setTimeout(() => {
        clickedCards.value[index] = false
      }, revertDelay)
    }
  }

  const isCardClicked = (index: number): boolean => {
    return clickedCards.value[index] || false
  }

  // Cleanup on unmount
  onBeforeUnmount(() => {
    Object.values(timeouts.value).forEach(timeout => {
      if (timeout) clearTimeout(timeout)
    })
  })

  return {
    toggleCard,
    isCardClicked
  }
}
