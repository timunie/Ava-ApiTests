# WriteableBitmap(PixelFormat, AlphaFormat, IntPtr, PixelSize, Vector, Int32) Constructor


Initializes a new instance of the <a href="T_Avalonia_Media_Imaging_WriteableBitmap">WriteableBitmap</a> class with existing pixel data The data is copied to the bitmap



## Definition
**Namespace:** <a href="N_Avalonia_Media_Imaging">Avalonia.Media.Imaging</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public WriteableBitmap(
	PixelFormat format,
	AlphaFormat alphaFormat,
	IntPtr data,
	PixelSize size,
	Vector dpi,
	int stride
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	format As PixelFormat,
	alphaFormat As AlphaFormat,
	data As IntPtr,
	size As PixelSize,
	dpi As Vector,
	stride As Integer
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        format : PixelFormat * 
        alphaFormat : AlphaFormat * 
        data : IntPtr * 
        size : PixelSize * 
        dpi : Vector * 
        stride : int -> WriteableBitmap
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Imaging/WriteableBitmap.cs#L51" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Platform_PixelFormat">PixelFormat</a></dt><dd>The pixel format.</dd><dt>  <a href="T_Avalonia_Platform_AlphaFormat">AlphaFormat</a></dt><dd>The alpha format.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.intptr" target="_blank" rel="noopener noreferrer">IntPtr</a></dt><dd>The pointer to the source bytes.</dd><dt>  <a href="T_Avalonia_PixelSize">PixelSize</a></dt><dd>The size of the bitmap in device pixels.</dd><dt>  <a href="T_Avalonia_Vector">Vector</a></dt><dd>The DPI of the bitmap.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The number of bytes per row.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Media_Imaging_WriteableBitmap">WriteableBitmap Class</a>  
<a href="Overload_Avalonia_Media_Imaging_WriteableBitmap__ctor">WriteableBitmap Overload</a>  
<a href="N_Avalonia_Media_Imaging">Avalonia.Media.Imaging Namespace</a>  

