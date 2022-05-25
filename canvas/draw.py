
Products
2022 Developer Survey is open! Take survey.
How do you composite an image onto another image with PIL in Python?
Asked 12 years, 1 month ago
Modified 1 year, 1 month ago
Viewed 115k times

104


23
I need to take an image and place it onto a new, generated white background in order for it to be converted into a downloadable desktop wallpaper. So the process would go:

Generate new, all white image with 1440x900 dimensions
Place existing image on top, centered
Save as single image
In PIL, I see the ImageDraw object, but nothing indicates it can draw existing image data onto another image. Suggestions or links anyone can recommend?

python
image-processing
python-imaging-library
Share
Improve this question
Follow
edited Mar 11, 2013 at 14:07
user212218
asked Apr 1, 2010 at 21:29
user avatar
Sebastian
2,33044 gold badges2020 silver badges2626 bronze badges
Add a comment
5 Answers
Sorted by:

Highest score (default)

173

This can be accomplished with an Image instance's paste method:

from PIL import Image
img = Image.open('/path/to/file', 'r')
img_w, img_h = img.size
background = Image.new('RGBA', (1440, 900), (255, 255, 255, 255))
bg_w, bg_h = background.size
offset = ((bg_w - img_w) // 2, (bg_h - img_h) // 2)
background.paste(img, offset)
background.save('out.png')
This and many other PIL tricks can be picked up at Nadia Alramli's PIL Tutorial

Share
Improve this answer
Follow
edited Mar 9, 2018 at 10:14
answered Apr 1, 2010 at 21:42
user avatar
unutbu
776k165165 gold badges16951695 silver badges16131613 bronze badges
1
You may need to import depending on your module/system/version: from PIL import Image – 
Nuno Aniceto
 Apr 24, 2015 at 10:57 
3
Thanks @NunoAniceto, I've changed it to from PIL import Image to make the code more compatible with Pillow. – 
unutbu
 Apr 24, 2015 at 11:46
If you're using Python 3.x, check stackoverflow.com/a/17530159/7326714 to fix the 'offeset' tuple integer error. – 
LucSpan
 Mar 9, 2018 at 10:04 
Add a comment

9

Based on unutbus answer:

#!/usr/bin/env python

from PIL import Image
import math


def resize_canvas(old_image_path="314.jpg", new_image_path="save.jpg",
                  canvas_width=500, canvas_height=500):
    """
    Place one image on another image.

    Resize the canvas of old_image_path and store the new image in
    new_image_path. Center the image on the new canvas.
    """
    im = Image.open(old_image_path)
    old_width, old_height = im.size

    # Center the image
    x1 = int(math.floor((canvas_width - old_width) / 2))
    y1 = int(math.floor((canvas_height - old_height) / 2))

    mode = im.mode
    if len(mode) == 1:  # L, 1
        new_background = (255)
    if len(mode) == 3:  # RGB
        new_background = (255, 255, 255)
    if len(mode) == 4:  # RGBA, CMYK
        new_background = (255, 255, 255, 255)

    newImage = Image.new(mode, (canvas_width, canvas_height), new_background)
    newImage.paste(im, (x1, y1, x1 + old_width, y1 + old_height))
    newImage.save(new_image_path)

resize_canvas()
