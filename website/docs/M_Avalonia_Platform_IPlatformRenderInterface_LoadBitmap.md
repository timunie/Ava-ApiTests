# LoadBitmap(PixelFormat, AlphaFormat, IntPtr, PixelSize, Vector, Int32) Method


Loads a bitmap implementation from a pixels in memory.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
IBitmapImpl LoadBitmap(
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
Function LoadBitmap ( 
	format As PixelFormat,
	alphaFormat As AlphaFormat,
	data As IntPtr,
	size As PixelSize,
	dpi As Vector,
	stride As Integer
) As IBitmapImpl
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract LoadBitmap : 
        format : PixelFormat * 
        alphaFormat : AlphaFormat * 
        data : IntPtr * 
        size : PixelSize * 
        dpi : Vector * 
        stride : int -> IBitmapImpl 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IPlatformRenderInterface.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Platform_PixelFormat">PixelFormat</a></dt><dd>The pixel format.</dd><dt>  <a href="T_Avalonia_Platform_AlphaFormat">AlphaFormat</a></dt><dd>The alpha format.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.intptr" target="_blank" rel="noopener noreferrer">IntPtr</a></dt><dd>The pointer to source bytes.</dd><dt>  <a href="T_Avalonia_PixelSize">PixelSize</a></dt><dd>The size of the bitmap in device pixels.</dd><dt>  <a href="T_Avalonia_Vector">Vector</a></dt><dd>The DPI of the bitmap.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The number of bytes per row.</dd></dl>

#### Return Value
<a href="T_Avalonia_Platform_IBitmapImpl">IBitmapImpl</a>  
An <a href="T_Avalonia_Platform_IBitmapImpl">IBitmapImpl</a>.

## See Also


#### Reference
<a href="T_Avalonia_Platform_IPlatformRenderInterface">IPlatformRenderInterface Interface</a>  
<a href="Overload_Avalonia_Platform_IPlatformRenderInterface_LoadBitmap">LoadBitmap Overload</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
