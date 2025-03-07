import { Slider } from "@chakra-ui/react"

export const SliderThumbContained = () => {
  return (
    <Slider.Root
      width="200px"
      thumbAlignment="contain"
      thumbSize={{ width: 16, height: 16 }}
      defaultValue={[40]}
    >
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
      </Slider.Control>
    </Slider.Root>
  )
}
