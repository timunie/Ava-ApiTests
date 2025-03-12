# DecodeToHeight Method


Loads a Bitmap from a stream and decodes at the desired height. Aspect ratio is maintained. This is more efficient than loading and then resizing.



## Definition
**Namespace:** <a href="N_Avalonia_Media_Imaging">Avalonia.Media.Imaging</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static WriteableBitmap DecodeToHeight(
	Stream stream,
	int height,
	BitmapInterpolationMode interpolationMode = BitmapInterpolationMode.HighQuality
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function DecodeToHeight ( 
	stream As Stream,
	height As Integer,
	Optional interpolationMode As BitmapInterpolationMode = BitmapInterpolationMode.HighQuality
) As WriteableBitmap
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member DecodeToHeight : 
        stream : Stream * 
        height : int * 
        ?interpolationMode : BitmapInterpolationMode 
(* Defaults:
        let _interpolationMode = defaultArg interpolationMode BitmapInterpolationMode.HighQuality
*)
-> WriteableBitmap 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Imaging/WriteableBitmap.cs#L119" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.io.stream" target="_blank" rel="noopener noreferrer">Stream</a></dt><dd>The stream to read the bitmap from. This can be any supported image format.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The desired height of the resulting bitmap.</dd><dt>  <a href="T_Avalonia_Media_Imaging_BitmapInterpolationMode">BitmapInterpolationMode</a>  (Optional)</dt><dd>The <a href="T_Avalonia_Media_Imaging_BitmapInterpolationMode">BitmapInterpolationMode</a> to use should any scaling be required.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_Imaging_WriteableBitmap">WriteableBitmap</a>  
An instance of the <a href="T_Avalonia_Media_Imaging_WriteableBitmap">WriteableBitmap</a> class.

## See Also


#### Reference
<a href="T_Avalonia_Media_Imaging_WriteableBitmap">WriteableBitmap Class</a>  
<a href="N_Avalonia_Media_Imaging">Avalonia.Media.Imaging Namespace</a>  

