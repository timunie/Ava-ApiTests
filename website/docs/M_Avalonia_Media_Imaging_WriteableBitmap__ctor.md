# WriteableBitmap(PixelSize, Vector, Nullable&lt;PixelFormat&gt;, Nullable&lt;AlphaFormat&gt;) Constructor


Initializes a new instance of the <a href="T_Avalonia_Media_Imaging_WriteableBitmap">WriteableBitmap</a> class.



## Definition
**Namespace:** <a href="N_Avalonia_Media_Imaging">Avalonia.Media.Imaging</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public WriteableBitmap(
	PixelSize size,
	Vector dpi,
	PixelFormat? format = null,
	AlphaFormat? alphaFormat = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	size As PixelSize,
	dpi As Vector,
	Optional format As PixelFormat? = Nothing,
	Optional alphaFormat As AlphaFormat? = Nothing
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        size : PixelSize * 
        dpi : Vector * 
        ?format : Nullable<PixelFormat> * 
        ?alphaFormat : Nullable<AlphaFormat> 
(* Defaults:
        let _format = defaultArg format null
        let _alphaFormat = defaultArg alphaFormat null
*)
-> WriteableBitmap
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Imaging/WriteableBitmap.cs#L25" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_PixelSize">PixelSize</a></dt><dd>The size of the bitmap in device pixels.</dd><dt>  <a href="T_Avalonia_Vector">Vector</a></dt><dd>The DPI of the bitmap.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="T_Avalonia_Platform_PixelFormat">PixelFormat</a>)  (Optional)</dt><dd>The pixel format (optional).</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="T_Avalonia_Platform_AlphaFormat">AlphaFormat</a>)  (Optional)</dt><dd>The alpha format (optional).</dd></dl>

#### Return Value
An instance of the <a href="T_Avalonia_Media_Imaging_WriteableBitmap">WriteableBitmap</a> class.

## See Also


#### Reference
<a href="T_Avalonia_Media_Imaging_WriteableBitmap">WriteableBitmap Class</a>  
<a href="Overload_Avalonia_Media_Imaging_WriteableBitmap__ctor">WriteableBitmap Overload</a>  
<a href="N_Avalonia_Media_Imaging">Avalonia.Media.Imaging Namespace</a>  

