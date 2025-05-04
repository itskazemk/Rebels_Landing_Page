import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight, ExternalLink, X } from "lucide-react"
import * as React from "react"
import { createPortal } from "react-dom"

interface Photo {
  src: string
  description: string
}

interface CarouselProps {
  itemKey: string
  photos: Photo[]
  demoIsEanbled?: boolean
  demoUrl?: string
}

export function Carousel({
  itemKey,
  photos,
  demoIsEanbled = false,
  demoUrl,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(true)
  const [activeModal, setActiveModal] = React.useState<number | null>(null)

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  return (
    <>
      <div className="relative w-full" style={{ direction: "ltr" }}>
        <div className="overflow-hidden rounded-xl" ref={emblaRef}>
          <div className="flex">
            {photos.map((photo, index) => (
              <div
                className="min-w-0 flex-[0_0_100%] h-[30em] relative bg-contain bg-top bg-no-repeat bg-gray-400 cursor-pointer"
                key={`${itemKey}-${index}`}
                style={{ backgroundImage: `url(${photo.src})` }}
                onClick={() => setActiveModal(index)}
              >
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-sm p-2 text-center">
                  {photo.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mt-4">
          <button onClick={scrollPrev} disabled={!canScrollPrev}>
            <ArrowLeft className="w-5 h-5 text-gray-700" />
            <span className="sr-only">Previous</span>
          </button>

          <span className="text-sm text-muted-foreground">
            {selectedIndex + 1} / {photos.length}
          </span>

          <button onClick={scrollNext} disabled={!canScrollNext}>
            <ArrowRight className="w-5 h-5 text-gray-700" />
            <span className="sr-only">Next</span>
          </button>
        </div>
      </div>

      {/* External Link Button */}
      {demoIsEanbled && demoUrl ? (
        <div className="text-center mt-4">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-2 py-1 text-sm text-white bg-gray-600 hover:bg-gray-700 rounded-lg"
          >
            <ExternalLink className="w-4 h-4" />
            مشاهده دمو
          </a>
        </div>
      ) : (
        <div className="text-center mt-4">
          <button
            disabled
            className="inline-flex items-center gap-2 px-2 py-1 text-sm text-white dark:text-gray-600 dark:bg-gray-800/50 bg-gray-700/50 rounded-lg"
          >
            <ExternalLink className="w-4 h-4" />
            مشاهده دمو
          </button>
        </div>
      )}

      {/* Modal Viewer */}
      {activeModal !== null &&
        createPortal(
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setActiveModal(null)}
          >
            <div
              className="relative max-w-full max-h-full p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 text-white bg-black/60 rounded-full p-1"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={photos[activeModal].src}
                alt={photos[activeModal].description}
                className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg shadow-lg"
              />
              <div className="text-center text-white mt-2 text-sm">
                {photos[activeModal].description}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}
