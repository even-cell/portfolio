from pathlib import Path
from PIL import Image, ImageChops
import json
source=Path('/Users/alake/Documents/lake./新作品/通感博雅/作品图')
target=Path('public/projects/synesthesia-refresh');target.mkdir(exist_ok=True)
report=[]
for n in range(1,16):
 name='tg_01.jpg' if n==1 else f'tg-{n:02d}.'+('png' if n==9 else 'jpg')
 p=source/name
 with Image.open(p) as original:
  icc=original.info.get('icc_profile',b'')
  outputs=[]
  for width in (960,1920):
   resized=original.resize((width,round(original.height*width/original.width)),Image.Resampling.LANCZOS)
   dest=target/f'{n:02d}-{width}.webp'
   resized.save(dest,'WEBP',lossless=True,quality=100,method=6,icc_profile=icc,exact=True)
   with Image.open(dest) as check:
    assert check.mode==original.mode
    assert check.info.get('icc_profile',b'')==icc
    assert resized.tobytes()==check.tobytes()
   outputs.append({'width':width,'bytes':dest.stat().st_size})
  report.append({'source':name,'source_bytes':p.stat().st_size,'outputs':outputs})
  print(name,outputs,flush=True)
Path('../output/synesthesia-image-report.json').write_text(json.dumps(report,indent=2))
