import { useState, useEffect, useRef } from 'react'
import { Camera, Eye, EyeOff, Plus, Trash2, SplitSquareVertical } from 'lucide-react'
import { Card, CardHeader } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { Dialog } from '../ui/Dialog'
import { Segmented } from '../ui/Segmented'
import { EmptyState } from '../ui/EmptyState'
import { useToast } from '../ui/Toast'
import { cn } from '../../lib/cn'
import type { ProgressPhoto, PhotoPose, WeightUnit } from '../../types'
import { getAssetBlob, validateImageFile } from '../../storage/repositories/assetRepository'
import { formatWeightValue } from '../../lib/display'
import { formatDate } from '../../lib/format'

interface ProgressPhotoGalleryProps {
  photos: ProgressPhoto[]
  currentWeightKg: number | null
  unit: WeightUnit
  lockPrivacy: boolean
  onAddPhoto: (input: { date: string; pose: PhotoPose; blob: Blob; weightKg?: number | null; note?: string }) => Promise<{ ok: boolean; error?: string }>
  onDeletePhoto: (id: string) => Promise<void>
  onTogglePrivacy: (locked: boolean) => void
  className?: string
}

function PhotoThumbnail({
  photo,
  unit,
  blurred,
  onClick,
  onDelete,
}: {
  photo: ProgressPhoto
  unit: WeightUnit
  blurred: boolean
  onClick: () => void
  onDelete: (e: React.MouseEvent) => void
}) {
  const [url, setUrl] = useState<string | null>(null)

  useEffect(() => {
    let active = true
    let objectUrl: string | null = null

    void getAssetBlob(photo.assetId).then((blob) => {
      if (active && blob) {
        objectUrl = URL.createObjectURL(blob)
        setUrl(objectUrl)
      }
    })

    return () => {
      active = false
      if (objectUrl) URL.revokeObjectURL(objectUrl)
    }
  }, [photo.assetId])

  return (
    <div
      onClick={onClick}
      className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl border border-line bg-surface2 transition-all hover:border-accent/40"
    >
      {url ? (
        <img
          src={url}
          alt={`Progress ${photo.pose} on ${photo.date}`}
          className={cn(
            'h-full w-full object-cover transition-all duration-300',
            blurred ? 'blur-md grayscale' : 'group-hover:scale-105',
          )}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-xs text-muted">
          Loading...
        </div>
      )}

      {/* Overlay badges */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2.5 text-xs text-white">
        <p className="font-bold">{formatDate(photo.date)}</p>
        <div className="flex items-center justify-between text-[11px] text-zinc-300">
          <span className="capitalize">{photo.pose}</span>
          {photo.weightKg && <span>{formatWeightValue(photo.weightKg, unit)}</span>}
        </div>
      </div>

      <button
        type="button"
        onClick={onDelete}
        aria-label="Delete photo"
        className="absolute top-2 right-2 flex h-7 w-7 items-center justify-center rounded-lg bg-black/60 text-white opacity-0 transition-opacity hover:bg-danger group-hover:opacity-100"
      >
        <Trash2 size={13} />
      </button>
    </div>
  )
}

export function ProgressPhotoGallery({
  photos,
  currentWeightKg,
  unit,
  lockPrivacy,
  onAddPhoto,
  onDeletePhoto,
  onTogglePrivacy,
  className,
}: ProgressPhotoGalleryProps) {
  const toast = useToast()
  const [selectedPose, setSelectedPose] = useState<PhotoPose | 'all'>('all')
  const [privacyHidden, setPrivacyHidden] = useState(lockPrivacy)
  const [addModalOpen, setAddModalOpen] = useState(false)
  const [compareModalOpen, setCompareModalOpen] = useState(false)
  const [compareLeftId, setCompareLeftId] = useState<string>('')
  const [compareRightId, setCompareRightId] = useState<string>('')
  const [photoDate, setPhotoDate] = useState(() => new Date().toISOString().slice(0, 10))
  const [photoPose, setPhotoPose] = useState<PhotoPose>('front')
  const [photoNote, setPhotoNote] = useState('')
  const [fileToUpload, setFileToUpload] = useState<File | null>(null)
  const [uploadPreview, setUploadPreview] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const filteredPhotos = photos.filter((p) => (selectedPose === 'all' ? true : p.pose === selectedPose))

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const validation = validateImageFile(file)
    if (!validation.ok) {
      toast.error('Invalid image', validation.error)
      return
    }

    setFileToUpload(file)
    setUploadPreview(URL.createObjectURL(file))
  }

  const handleUploadSubmit = async () => {
    if (!fileToUpload) return
    setSaving(true)

    const result = await onAddPhoto({
      date: photoDate,
      pose: photoPose,
      blob: fileToUpload,
      weightKg: currentWeightKg,
      note: photoNote.trim() || undefined,
    })

    setSaving(false)
    if (result.ok) {
      toast.success('Photo saved', 'Stored securely in offline storage.')
      setAddModalOpen(false)
      setFileToUpload(null)
      if (uploadPreview) URL.revokeObjectURL(uploadPreview)
      setUploadPreview(null)
    } else {
      toast.error('Failed to save', result.error)
    }
  }

  const handleOpenCompare = () => {
    if (photos.length >= 2) {
      setCompareLeftId(photos[photos.length - 1].id)
      setCompareRightId(photos[0].id)
      setCompareModalOpen(true)
    }
  }

  return (
    <Card className={cn('overflow-hidden', className)}>
      <CardHeader
        title={
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-surface2 text-accent">
              <Camera size={16} />
            </span>
            <span>Progress Photos</span>
            <Badge tone="accent">Private & Local</Badge>
          </div>
        }
        subtitle="100% private, on-device visual physique tracking"
        action={
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                const next = !privacyHidden
                setPrivacyHidden(next)
                onTogglePrivacy(next)
              }}
              title={privacyHidden ? 'Show photos' : 'Hide / blur photos'}
            >
              {privacyHidden ? <EyeOff size={15} /> : <Eye size={15} />}
              <span className="hidden sm:inline">{privacyHidden ? 'Hidden' : 'Visible'}</span>
            </Button>
            {photos.length >= 2 && (
              <Button variant="secondary" size="sm" onClick={handleOpenCompare}>
                <SplitSquareVertical size={15} /> Compare
              </Button>
            )}
            <Button size="sm" onClick={() => setAddModalOpen(true)}>
              <Plus size={15} /> Add Photo
            </Button>
          </div>
        }
      />

      <div className="mb-4 flex items-center justify-between gap-2">
        <Segmented
          size="sm"
          value={selectedPose}
          onChange={(val) => setSelectedPose(val as any)}
          options={[
            { value: 'all', label: 'All' },
            { value: 'front', label: 'Front' },
            { value: 'side', label: 'Side' },
            { value: 'back', label: 'Back' },
          ]}
        />
        <span className="text-xs text-muted">{filteredPhotos.length} photo{filteredPhotos.length === 1 ? '' : 's'}</span>
      </div>

      {filteredPhotos.length === 0 ? (
        <EmptyState
          icon={<Camera size={26} />}
          title="No progress photos yet"
          description="Track your physical evolution with private, offline side-by-side comparisons."
          action={
            <Button size="sm" onClick={() => setAddModalOpen(true)}>
              Take or Upload Photo
            </Button>
          }
        />
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {filteredPhotos.map((photo) => (
            <PhotoThumbnail
              key={photo.id}
              photo={photo}
              unit={unit}
              blurred={privacyHidden}
              onClick={() => {
                setCompareLeftId(photo.id)
                setCompareModalOpen(true)
              }}
              onDelete={async (e) => {
                e.stopPropagation()
                if (window.confirm('Delete this progress photo?')) {
                  await onDeletePhoto(photo.id)
                  toast.info('Photo removed')
                }
              }}
            />
          ))}
        </div>
      )}

      {/* Add Photo Dialog */}
      <Dialog
        open={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        title="Add Progress Photo"
        description="Photos remain 100% on your device in private IndexedDB storage."
        footer={
          <>
            <Button variant="ghost" onClick={() => setAddModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleUploadSubmit} disabled={!fileToUpload || saving}>
              {saving ? 'Saving...' : 'Save Photo'}
            </Button>
          </>
        }
      >
        <div className="space-y-4">
          <div>
            <label className="text-xs font-bold uppercase text-muted">Select Image</label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileSelect}
            />
            {uploadPreview ? (
              <div className="relative mt-2 aspect-[3/4] max-h-56 overflow-hidden rounded-xl border border-line bg-surface2">
                <img src={uploadPreview} alt="Upload preview" className="h-full w-full object-cover" />
                <Button
                  size="sm"
                  variant="secondary"
                  className="absolute bottom-2 right-2 bg-black/70"
                  onClick={() => fileInputRef.current?.click()}
                >
                  Change
                </Button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="mt-2 flex h-36 w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-line bg-surface2/50 text-muted hover:border-accent hover:text-ink"
              >
                <Camera size={24} />
                <span className="text-xs font-semibold">Click to browse or take photo</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold uppercase text-muted">Date</label>
              <input
                type="date"
                value={photoDate}
                onChange={(e) => setPhotoDate(e.target.value)}
                className="mt-1 h-10 w-full rounded-xl border border-line bg-surface2 px-3 text-sm text-ink outline-none"
              />
            </div>
            <div>
              <label className="text-xs font-bold uppercase text-muted">Pose</label>
              <select
                value={photoPose}
                onChange={(e) => setPhotoPose(e.target.value as PhotoPose)}
                className="mt-1 h-10 w-full rounded-xl border border-line bg-surface2 px-3 text-sm text-ink outline-none"
              >
                <option value="front">Front</option>
                <option value="side">Side</option>
                <option value="back">Back</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-bold uppercase text-muted">Note (Optional)</label>
            <input
              type="text"
              value={photoNote}
              onChange={(e) => setPhotoNote(e.target.value)}
              placeholder="e.g. End of 8-week lean bulk"
              className="mt-1 h-10 w-full rounded-xl border border-line bg-surface2 px-3 text-sm text-ink outline-none"
            />
          </div>
        </div>
      </Dialog>

      {/* Comparison Modal */}
      <Dialog
        open={compareModalOpen}
        onClose={() => setCompareModalOpen(false)}
        title="Side-by-Side Physique Comparison"
        footer={
          <Button onClick={() => setCompareModalOpen(false)}>
            Close
          </Button>
        }
      >
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Left Photo */}
            <div>
              <select
                value={compareLeftId}
                onChange={(e) => setCompareLeftId(e.target.value)}
                className="mb-2 h-9 w-full rounded-lg border border-line bg-surface2 px-2 text-xs text-ink"
              >
                {photos.map((p) => (
                  <option key={p.id} value={p.id}>
                    {formatDate(p.date)} ({p.pose})
                  </option>
                ))}
              </select>
              {photos.find((p) => p.id === compareLeftId) && (
                <PhotoThumbnail
                  photo={photos.find((p) => p.id === compareLeftId)!}
                  unit={unit}
                  blurred={privacyHidden}
                  onClick={() => {}}
                  onDelete={() => {}}
                />
              )}
            </div>

            {/* Right Photo */}
            <div>
              <select
                value={compareRightId}
                onChange={(e) => setCompareRightId(e.target.value)}
                className="mb-2 h-9 w-full rounded-lg border border-line bg-surface2 px-2 text-xs text-ink"
              >
                {photos.map((p) => (
                  <option key={p.id} value={p.id}>
                    {formatDate(p.date)} ({p.pose})
                  </option>
                ))}
              </select>
              {photos.find((p) => p.id === compareRightId) && (
                <PhotoThumbnail
                  photo={photos.find((p) => p.id === compareRightId)!}
                  unit={unit}
                  blurred={privacyHidden}
                  onClick={() => {}}
                  onDelete={() => {}}
                />
              )}
            </div>
          </div>
        </div>
      </Dialog>
    </Card>
  )
}
