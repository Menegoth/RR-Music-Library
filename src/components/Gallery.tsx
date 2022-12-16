import GalleryItem from './GalleryItem'

interface GalleryItemProps {
    data: never[]
}

function Gallery(props: GalleryItemProps){

    const display = props.data.map((item, index: number) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery
