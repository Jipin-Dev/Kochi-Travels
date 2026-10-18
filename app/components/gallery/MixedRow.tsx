import { Album } from '@/app/types/config'
import { AlbumLabels, AlbumCaption } from './AlbumLabels'

interface MixedRowProps {
  mainAlbum: Album
  sideAlbums: Album[]
  onAlbumClick: (album: Album, e: React.MouseEvent) => void
}

export default function MixedRow({ mainAlbum, sideAlbums, onAlbumClick }: MixedRowProps) {
  return (
    <>
      <div 
        className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 md:col-span-7 h-[500px] cursor-pointer"
        onClick={(e) => onAlbumClick(mainAlbum, e)}
      >
        <div className="w-full relative h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 to-purple-100/80 p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              {(
                <img
                  src={mainAlbum.coverImage}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              )}
              <AlbumLabels album={mainAlbum} />
<AlbumCaption album={mainAlbum} />
            </div>
          </div>
        </div>
      </div>

      {/* Right side vertical cards */}
      <div className="md:col-span-5 flex flex-col h-[500px] gap-4">
        {sideAlbums.map((album, index) => (
          <div 
            key={`right-${index}`} 
            className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex-1 cursor-pointer"
            onClick={(e) => onAlbumClick(album, e)}
          >
            <div className="w-full h-full relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 to-purple-100/80 p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                  <img
                    src={album.coverImage}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <AlbumLabels album={album} />
<AlbumCaption album={album} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
} 