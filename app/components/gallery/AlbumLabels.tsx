import { Album } from '@/app/types/config'

export type PackageAlbum = Album & {
  title?: string
  tag?: string       // e.g. "Customizable"
  duration?: string  // e.g. "5N/6D"
  route?: string     // e.g. "1N Cochin • 2N Munnar • 1N Thekkady • 1N Alleppey"
}

const pill = 'bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm'

// Top-right badges: tag + duration only (photo count and date are removed)
export function AlbumLabels({ album: item }: { album: Album }) {
  const album = item as PackageAlbum
  if (!album.tag && !album.duration) return null

  return (
    <div className="absolute top-4 right-4 flex gap-2">
      {album.tag && (
        <div className={pill}>
          <span className="text-sm font-medium text-gray-700">{album.tag}</span>
        </div>
      )}
      {album.duration && (
        <div className={pill}>
          <span className="text-sm font-medium text-gray-700">{album.duration}</span>
        </div>
      )}
    </div>
  )
}

// Bottom overlay: title + route (renders only when the album has them)
export function AlbumCaption({ album: item }: { album: Album }) {
  const album = item as PackageAlbum
  if (!album.title && !album.route) return null

  return (
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent px-4 pt-10 pb-4">
      {album.title && <h3 className="text-xl font-medium text-white leading-tight">{album.title}</h3>}
      {album.route && <p className="mt-1 text-sm text-white/90">{album.route}</p>}
    </div>
  )
}  