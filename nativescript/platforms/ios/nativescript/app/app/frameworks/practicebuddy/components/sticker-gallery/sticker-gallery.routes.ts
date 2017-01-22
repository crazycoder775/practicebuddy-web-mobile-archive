import { Route } from '@angular/router';

import { StickerGalleryComponent } from './sticker-gallery.component';

export const StickerGalleryRoutes: Route[] = [
  { path: "sticker-gallery/:id", component: StickerGalleryComponent }
];
