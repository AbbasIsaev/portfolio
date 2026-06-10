import './CarouselApp.css'

import {Dialog, useTheme} from '@mui/material'
import {type FC, useState} from 'react'
import {Carousel} from 'react-bootstrap'

type TImg = {
    name: string
}

type Props = {
    src: string
    images: TImg[]
    interval?: number
    indexDefault?: number
    isOpenDialog?: boolean
}

export const CarouselApp: FC<Props> = (
    {
        src,
        images,
        interval,
        indexDefault = 0,
        isOpenDialog = true
    }
) => {
    const theme = useTheme()
    const [index, setIndex] = useState(indexDefault)

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex)
    }

    const [open, setOpen] = useState(false)
    const onOpen = () => setOpen(true)
    const onClose = () => setOpen(false)

    if (images.length === 1) {
        return (
            <img
                className="img-fluid"
                src={src + images[0].name}
                alt={images[0].name}
            />
        )
    }

    return (
        <>
            <Carousel
                data-bs-theme={theme.palette.mode === 'dark' ? 'light' : 'dark'}
                activeIndex={index} onSelect={handleSelect}
                className={isOpenDialog ? 'carousel-app' : ''}
            >
                {images.map((img) => {
                    return (
                        <Carousel.Item
                            key={src + img.name}
                            interval={interval}
                        >
                            <img
                                className="img-fluid"
                                src={src + img.name}
                                alt={img.name}
                                onClick={isOpenDialog ? onOpen : undefined}
                            />

                        </Carousel.Item>
                    )
                })}
            </Carousel>

            {isOpenDialog &&
                <Dialog
                    className={'carousel-app-dialog'}
                    open={open} onClose={onClose}
                    fullWidth={true} maxWidth={'xl'}
                    sx={{
                        '& .MuiPaper-root': {
                            borderRadius: '15px'
                        }
                    }}
                    data-aos="zoom-in"
                    data-aos-duration="300"
                >
                    <CarouselApp
                        src={src}
                        images={images}
                        indexDefault={index}
                        isOpenDialog={false}
                    />
                </Dialog>
            }
        </>
    )
}