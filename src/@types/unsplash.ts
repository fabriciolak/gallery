export type UnsplashPhotoUserType = {
  id: string
  username: string
  name: string
  profile_image: {
    small: string
    medium: string
    large: string
  }
  links: {
    html: string
  }
}

export type UnsplashPhotoURLType = {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
}

export type UnsplashPhotoLinksType = {
  self: string
  html: string
  download: string
  download_location: string
}

export type UnsplashPhotoResponse = {
  id: string
  created_at: string
  updated_at: string
  width: number
  height: number
  color: string
  blur_hash: string
  likes: number
  description: string
  urls: UnsplashPhotoURLType
  links: UnsplashPhotoLinksType
  user: UnsplashPhotoUserType
}
