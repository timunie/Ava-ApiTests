# CreateScaledBitmap Method


Creates a Bitmap scaled to a specified size from the current bitmap.



## Definition
**Namespace:** <a href="N_Avalonia_Media_Imaging">Avalonia.Media.Imaging</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Bitmap CreateScaledBitmap(
	PixelSize destinationSize,
	BitmapInterpolationMode interpolationMode = BitmapInterpolationMode.HighQuality
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function CreateScaledBitmap ( 
	destinationSize As PixelSize,
	Optional interpolationMode As BitmapInterpolationMode = BitmapInterpolationMode.HighQuality
) As Bitmap
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member CreateScaledBitmap : 
        destinationSize : PixelSize * 
        ?interpolationMode : BitmapInterpolationMode 
(* Defaults:
        let _interpolationMode = defaultArg interpolationMode BitmapInterpolationMode.HighQuality
*)
-> Bitmap 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Imaging/Bitmap.cs#L50" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_PixelSize">PixelSize</a></dt><dd>The destination size.</dd><dt>  <a href="T_Avalonia_Media_Imaging_BitmapInterpolationMode">BitmapInterpolationMode</a>  (Optional)</dt><dd>The <a href="T_Avalonia_Media_Imaging_BitmapInterpolationMode">BitmapInterpolationMode</a> to use should any scaling be required.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_Imaging_Bitmap">Bitmap</a>  
An instance of the <a href="T_Avalonia_Media_Imaging_Bitmap">Bitmap</a> class.

## See Also


#### Reference
<a href="T_Avalonia_Media_Imaging_Bitmap">Bitmap Class</a>  
<a href="N_Avalonia_Media_Imaging">Avalonia.Media.Imaging Namespace</a>  

